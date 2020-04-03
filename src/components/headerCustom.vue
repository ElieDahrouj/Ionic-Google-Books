<template>
  <div>
    <ion-header no-border>
      <ion-toolbar  class="new-background-color">
        <ion-title>Apple Books</ion-title>
      </ion-toolbar>
    </ion-header>
  </div>
</template>

<script>
export default {
  name: 'headerCustom',
}
</script>
<style scoped lang="scss">
  .new-background-color{
    --background: #09114D;
    padding: 10px;
  }
  ion-title{
    --color: white;
  }
</style>
