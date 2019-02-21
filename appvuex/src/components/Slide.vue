<template>
    <div class="slide-wraper">
        <ul class="slide">
            <transition-group name="fade"> 
                <li v-for="(value,index) in imgs" :key="index" v-show="index == iNow">
                    <img :src="value" alt="">
                </li>
            </transition-group>
        </ul>
        <ul class="btns">
            <li v-for="(i,index) in imgs.length" :key="index" :class="{active:index == iNow}"></li>
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
                    "https://img3.doubanio.com/lpic/s6989253.jpg"
                ],
                iNow:2
            }
        },
        created() {
            setInterval(()=>{
                this.iNow++;
                if(this.iNow == this.imgs.length ){
                    this.iNow = 0;
                }
            },2000)
        },
    }
</script>

<style scoped>
.slide li{
    width:100%;
    position: absolute;
    left:0px;
    top:0px;
}
.slide img{
    width:100%;
    height:6rem;
}
.slide-wraper{
    position: relative;
     height:6rem;
     overflow: hidden;
    /* overflow: ; */
}
.btns{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    bottom:0.2rem;
}
.btns li{
    width:0.2rem;
    height:0.2rem;
    background: #f00;
    border-radius: 50%;
    float: left;
    margin-right:0.1rem;
}
.btns li.active{
    background: #0f0;
}
.fade-enter{
    transform: translateX(100%)
}
.fade-enter-active{
    transition: transform 2s ease;
}
.fade-enter-to{
    transform: translateX(0)
}
.fade-leave{
    transform: translateX(0)
}
.fade-leave-active{
    transition: transform 2s ease;
}
.fade-leave-to{
    transform: translateX(-100%)
}
</style>