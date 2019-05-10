<template>
<div class="col-md-8">
            <div class="card">
            <form action="" v-on:submit.prevent="newCurso()">
                <div class="card-header">Cursos</div>
                <div class="card-body">
                    <input type="text" class="form-control" name="curso" v-model="nombre"> 
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        Crear Curso
                    </button>
                </div>
            </form>
            </div>
        </div>
</template>

<script>
    export default {
        data(){
            return {
                nombre:''
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            newCurso() {
                const params = {
                    nombre: this.nombre
            };
            this.nombre = '';

            axios.post('/cursos', params)
            .then((response) => {
                const curso = response.data;
                this.$emit('new', curso);

            });

                
                
                
            }
        }
    }
</script>
