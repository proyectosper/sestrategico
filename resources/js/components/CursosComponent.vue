<template>
<div class="col-md-8">
         <br>
            <div class="card">
                <div class="card-header">

                    <input v-if="editMode" type=text class="form-control" v-model="curso.name">
                    <p v-else>{{ curso.name }}</p>

                </div>
                <div class="card-body">
                    <button v-if="editMode" class="btn btn-success" v-on:click="onClickUpdate()">
                        Guardar
                    </button>
                    <button v-else class="btn btn-success" v-on:click="onClickEdit()">
                        Editar
                    </button>
                    <button  class="btn btn-danger" v-on:click="onClickDelete()">
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        props: ['curso'],
        data() {
            return {
                editMode: false
            };
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            onClickDelete(){
                axios.delete(`/cursos/${this.curso.id}`).then(() => {
                this.$emit('delete');
                });
            },
            onClickEdit(){
                this.editMode = true;
            },
            onClickUpdate(){
                const params = {
                    nombre: this.curso.name
                }
                axios.put(`/cursos/${this.curso.id}`,params).then((response) => {
                    this.editMode = false;
                    const cursos = response.data;
                    this.$emit('update',curso);   
            });
                
            }
        } 
    }
</script>
