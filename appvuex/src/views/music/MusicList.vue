<template>
    <div>
        <aplayer :music="list[0]" :list="list" v-if="isShow" showLrc/>
    </div>
</template>

<script>
    import Aplayer from 'vue-aplayer';
    import Axios from 'axios';
   
    export default {
        data(){
            return{
                list:[],
                isShow:false
            }
        },
        components:{
            Aplayer
        },
        created () {
            Axios.get('/data/musicdata.json')
           .then((result)=>{
              result.data.musicData.forEach(obj => {
                  let obj1 = {
                      title : obj.title,
                      artist : obj.author,
                      src : obj.src,
                      pic :obj.musicImgSrc,
                      lrc:`http://localhost:8080/${obj.lrc}`
                  }
                  this.list.push(obj1);
              });
              this.isShow = true;
           })
        } 
       
    }
</script>

<style scoped></style>