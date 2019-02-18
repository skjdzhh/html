<template>
    <div>
        <ul class="slide">
            <li v-for="(value,index) in imgs" :key="index" v-show="index == iNow">
                <img :src="value" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                imgs:[
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg"
                ],
                iNow:0
            }
        },
        created() {
            setInterval(()=>{
                this.iNow++;
                if(this.iNow == this.imgs.length ){
                    this.iNow = 0;
                }
            },1000)
        },
    }
</script>

<style scoped>
.slide img{
    width:100%;
    height:6rem;
}
</style>