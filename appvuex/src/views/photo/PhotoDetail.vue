<template>
    <div>
        <!-- detail photo -->
        <!-- {{$route.params.index}} -->

        <!-- {{photos[$route.params.index]}} -->
        <router-link to="/photo">
            <div class="bg" :style="{backgroundImage:'url('+ photos[$route.params.index].src +')'}"></div>
        </router-link>
        
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        computed: {
            ...mapState(['photos'])
        }
    }
</script>

<style scoped>
    .bg{
        position: absolute;
        top:1rem;
        left:0px;
        bottom: 1rem;
        right:0px;
        background: #000 no-repeat center center;
        background-size: contain;

    }
</style>