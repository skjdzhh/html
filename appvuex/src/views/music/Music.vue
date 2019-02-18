<template>
    <div>
        <img v-for="(obj,index) in music" :key="index" :src="obj.bg" @click="goList"/>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        data(){
            return {
                music:[]
            }
        },
        created () {
            Axios.get("/data/musiclist.json")
            .then((result)=>{
                // console.log(result);  
                this.music = result.data.albums;
            })
            .catch();
            //
        },
        methods:{
            goList(){
                this.$router.push('/musiclist');
            }
        }
    }
</script>

<style scoped>
    img{
        width:50%;
    }
</style>