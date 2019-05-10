
<template>
<div class="row justify-content-center">
        <form-component @new="addCurso"></form-component>
        <cursos-component 
        v-for="(curso, index) in cursos" 
        :key="curso.id"
        :curso="curso"
        @update="updateCurso(index, ...arguments)"
        @delete="deleteCurso(index)">
        </cursos-component>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                cursos: []
            }
        },

        mounted() {
            axios.get('/cursos').then((response) =>{
                this.cursos = response.data;
            });
        },

        methods: {
            addCurso(curso){
                this.cursos.push(curso);
            },
            updateCurso(index, curso){
                this.cursos[index] = curso;
            },
            deleteCurso(index){
                this.cursos.splice(index, 1);
            }
        }
    }
</script>
