<template>
    <div>
        {{$route.params.movieId}} 
        {{movieDeatil.title}}
        <img :src="movieDeatil.images.small" />
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        data(){
            return {
                movieDeatil:{}
            }
        },
        created () {
            Axios.get("/data/moviedetail.json")
            // Axios.get(`https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}`)
            .then((result)=>{
                console.log(result.data);
                this.movieDeatil = result.data;
                console.log(this.movieDeatil.images.small)

            }).catch(()=>{

            })
        }
    }
</script>

<style scoped>

</style>