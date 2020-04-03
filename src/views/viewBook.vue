<template>
  <div class="ion-page">
    <ion-header no-border>
      <div class="ion-padding" style="text-align: left; background-color: #09114D">
        <router-link to="/"><button class="btn back"><ion-icon style="color: white;font-size: 22px" name="arrow-back"></ion-icon></button></router-link>
      </div>
    </ion-header>
    <ion-content v-if="this.infoBook" class="ion-padding">
      <div>
        <img v-if="this.imgBook" style="width: 50%;" :src="this.imgBook" alt="">
        <img v-else style="width: 70%;" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Pas_d%27image_disponible.svg" alt="">
      </div>
      <section class="informations">
        <h1>{{this.infoBook.title}}</h1>
        <div>
          <p><b>Publisher : </b>{{this.infoBook.publisher}}</p>
          <p><b>Number of page : </b>{{this.infoBook.pageCount}}</p>
          <p><b>Published Date : </b>{{this.infoBook.publishedDate}}</p>
          <div v-if="infoAuthor">
            <b>Authors : </b><span v-for="infoUser in infoAuthor">{{infoUser}}</span>
          </div>
          <p><b>Language : </b>{{this.infoBook.language}}</p>
          <div v-if="infoCategorie">
            <b>Categories : </b><span v-for="categorie in infoCategorie">{{categorie}}</span>
          </div>
        </div>
        <div :v-if="this.infoBook.description">
          <p class="description">{{this.infoBook.description}}</p>
        </div>
        <div v-if="this.accessPreview !== false">
          <router-link :to="{name: 'preview', params: { id: this.$route.params.id}}"><button class="btn">Preview</button></router-link>
        </div>
      </section>
    </ion-content>
    <ion-content v-else class="ion-padding">
      <div class="error">
        <p>{{this.error}}</p>
      </div>
    </ion-content>
  </div>
</template>
<script>
  export default {
      name:'book',
      data(){
          return{
              imgBook :null,
              infoBook:'',
              infoAuthor:[],
              infoCategorie:[],
              accessPreview:null,
              error:"Ce livre n'existe pas désole"
          }
      },
      mounted(){
          this.bookDisplay()
      },
      methods:{
          bookDisplay(){
              this.$http.get('https://www.googleapis.com/books/v1/volumes/'+this.$route.params.id)
                  .then(response => {
                        this.accessPreview = response.data.accessInfo.embeddable
                        if (response.data.volumeInfo.imageLinks) {
                            this.imgBook = response.data.volumeInfo.imageLinks.thumbnail
                        }
                        this.infoBook = response.data.volumeInfo
                        this.infoAuthor = response.data.volumeInfo.authors
                        this.infoCategorie = response.data.volumeInfo.categories
                  });
          }
      }
  }
</script>
<style scoped lang="scss">
  ion-content {
    --background: black;
  }
  img{
    border-radius: 3px;
    border: 1px solid whitesmoke;
  }
  .informations{
    color: black;
    background-color: whitesmoke;
    border-radius: 3px;
    padding: 10px;
    margin-top: 10px;
    h1{
      margin: 0;
    }
  }
  .description{
    text-align: left;
  }
  .btn{
    padding:10px;
    border-radius: 3px;
    border:1px solid #09114D;
    background-color: transparent;
    color: black;
    font-size: 20px;
  }
  .back{
    border-radius: 100%;
    background-color: #09114D;
  }
  .error{
    background-color: #f7d7da;
    padding: 10px;
    border-radius: 3px;
    p{
      color: #99535a;
    }
  }
</style>
