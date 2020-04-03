<template>
  <div class="ion-page">
    <headerCustom></headerCustom>
    <ion-content class="ion-padding">
      <img alt="Vue logo" src="../assets/undraw_Bibliophile_hwqc.png">
      <ion-item>
        <ion-label position="floating">Enter a name book</ion-label>
        <ion-input @input="nameBook=$event.target.value"></ion-input>
      </ion-item>
      <section>
        <ion-button @click="send" expand="block" color="dark">Find</ion-button>
        <ion-button @click="emptyList" expand="block" color="dark">Reset</ion-button>
      </section>
      <transition name="fade">
        <books :getBooks="booksArray" :skeleton="skelette"></books>
      </transition>
    </ion-content>
  </div>
</template>

<script>
  import headerCustom from '@/components/headerCustom.vue'
  import books from '@/components/allBooks.vue'
    export default {
        name: "home",
        components:{
            headerCustom,
            books
        },
        data(){
            return{
                key : "AIzaSyDA7tT5uCQB_w3_0Uk4G6a5K0jD75bLzNE",
                nameBook:null,
                booksArray:[],
                skelette : false
            }
        },
        methods:{
            send(){
                if (this.nameBook !== null) {
                    this.booksArray = []
                    this.skelette = !this.skelette
                    this.$http.get('https://www.googleapis.com/books/v1/volumes?q='+this.nameBook+'&key='+this.key)
                        .then(response => {
                            this.skelette = !this.skelette
                            this.booksArray = response.data.items
                            localStorage.setItem("storeBooks", JSON.stringify(this.booksArray))
                        });
                }
                else{
                    return this.$ionic.alertController
                        .create({
                            header: 'Erreur !! 😅',
                            message: 'Enter a name please',
                            buttons: ['OK'],
                        })
                        .then(a => a.present())
                }
            },
            emptyList(){
                this.show = !this.show
                this.booksArray = []
                localStorage.removeItem("storeBooks")
            }
        },
        mounted(){
            if (localStorage.getItem("storeBooks") || this.booksArray !== []){
                this.booksArray = JSON.parse(localStorage.getItem("storeBooks"))
            }
        }
    };
</script>
<style scoped lang="scss">
  ion-button{
    margin-top: 20px;
  }
</style>