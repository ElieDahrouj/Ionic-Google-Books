<template>
    <div>
        <ion-list>
            <ion-item v-for="getBook in getBooks" v-bind:key="getBook.text">
                <ion-thumbnail  slot="start">
                    <img v-if="getBook.volumeInfo.imageLinks" :src="getBook.volumeInfo.imageLinks.smallThumbnail">
                    <img v-else src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Pas_d%27image_disponible.svg">
                </ion-thumbnail>
                <ion-label>
                    <p class="title">
                        <strong>
                            {{getBook.volumeInfo.title}}
                        </strong>
                    </p>
                    <h4 v-if="getBook.volumeInfo.subtitle ? getBook.volumeInfo.subtitle: ''">
                        {{getBook.volumeInfo.subtitle}}
                    </h4>
                    <p class="publishedDate" v-if="getBook.volumeInfo.publishedDate ? getBook.volumeInfo.publishedDate: ''">
                        {{getBook.volumeInfo.publishedDate}}
                    </p>
                    <p v-if="getBook.volumeInfo.description ? getBook.volumeInfo.description: ''">
                        {{getBook.volumeInfo.description}}
                    </p>
                    <router-link :to='"book/"+getBook.id'><button class="btn">More</button></router-link>
                </ion-label>
            </ion-item>

            <ion-item v-if="skeleton">
                <ion-thumbnail slot="start">
                    <ion-skeleton-text animated></ion-skeleton-text>
                </ion-thumbnail>
                <ion-label>
                    <p class="title">
                        <strong>
                            <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
                        </strong>
                    </p>
                    <h4>
                        <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
                    </h4>
                    <p class="publishedDate">
                        <ion-skeleton-text animated style="width: 35%"></ion-skeleton-text>
                    </p>
                    <p>
                        <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
                    </p>
                </ion-label>
            </ion-item>
            <ion-item v-if="skeleton">
                <ion-thumbnail slot="start">
                    <ion-skeleton-text animated></ion-skeleton-text>
                </ion-thumbnail>
                <ion-label>
                    <p class="title">
                        <strong>
                            <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
                        </strong>
                    </p>
                    <h4>
                        <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
                    </h4>
                    <p class="publishedDate">
                        <ion-skeleton-text animated style="width: 35%"></ion-skeleton-text>
                    </p>
                    <p>
                        <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
                    </p>
                </ion-label>
            </ion-item>
            <ion-item v-if="skeleton">
                <ion-thumbnail slot="start">
                    <ion-skeleton-text animated></ion-skeleton-text>
                </ion-thumbnail>
                <ion-label>
                    <p class="title">
                        <strong>
                            <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
                        </strong>
                    </p>
                    <h4>
                        <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
                    </h4>
                    <p class="publishedDate">
                        <ion-skeleton-text animated style="width: 35%"></ion-skeleton-text>
                    </p>
                    <p>
                        <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
                    </p>
                </ion-label>
            </ion-item>
            <ion-item v-if="skeleton">
                <ion-thumbnail slot="start">
                    <ion-skeleton-text animated></ion-skeleton-text>
                </ion-thumbnail>
                <ion-label>
                    <p class="title">
                        <strong>
                            <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
                        </strong>
                    </p>
                    <h4>
                        <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
                    </h4>
                    <p class="publishedDate">
                        <ion-skeleton-text animated style="width: 35%"></ion-skeleton-text>
                    </p>
                    <p>
                        <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
                    </p>
                </ion-label>
            </ion-item>
        </ion-list>
    </div>
</template>
<script>
    export default {
        name:'allBooks',
        props:{
            getBooks:Array,
            skeleton:Boolean
        },
    }
</script>
<style scoped lang="scss">
    p{
        text-overflow: ellipsis;
    }
    .title{
        text-overflow: ellipsis;
        font-size: 18px;
        color: black;
    }
    .publishedDate{
        font-size: 14px;
    }
    .btn{
        padding:10px;
        border-radius: 3px;
        background-color: #09114D;
        color: whitesmoke;
    }
</style>