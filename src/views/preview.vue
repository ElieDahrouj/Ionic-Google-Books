<template>
    <div class="ion-page">
        <ion-header>
            <div class="ion-padding" style="text-align: left; background-color: #09114D">
                <router-link :to='"/book/"+this.$route.params.id'><button class="btn"><ion-icon style="color: white;font-size: 22px" name="arrow-back"></ion-icon></button></router-link>
            </div>
        </ion-header>

        <div id="viewerCanvas" style="width: 100vw; height: 100vh"></div>
    </div>
</template>

<script>
    export default {
        name:"preview",
        mounted(){
            setTimeout (() => {this.initialize();}, 1000);

        },
        methods:{
            initialize() {
                let viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
                viewer.load(this.$route.params.id);
            },
        }
    }
</script>
<style scoped lang="scss">
    .btn{
        padding:10px;
        border-radius: 100%;
        background-color: #09114D;
        outline: none;
    }
</style>