<template>
  <div class="main">
    <div class="main-text">
      <div class="main-text_before"></div>
      <div class="main-text_center">
        <div class="main-text__title">Транспортная доступность</div>
        <div class="main-text__text"> 
          {{ (loremText.length > 120 ) ? loremText.slice(0, 120) : loremText }}
          <div class="text-more" v-if="(loremText.length > 120)">...</div>
        </div>
      </div>
      <div class="main-text_after">{{ pageIndex }}/6</div>  
    </div>
    
    <div class="main-images">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Transport',
  data: function() {
    return {
      loremText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente ex tempore molestiae facere aperiam voluptas doloremque deserunt reprehenderit veritatis vitae, ducimus voluptatem facilis aspernatur quia, odit laudantium ullam ipsa dolore, fugiat reiciendis in! Natus itaque at, suscipit quia dolorem labore nulla distinctio quod asperiores aperiam. Nemo in magnam rem?', 
      pageIndex: 0,
    }
  },
  created: function() {
    this.pageIndex = this.$route.query.index;
  }
}
</script>

<style lang="scss" scoped>
  .main {
    display: grid;
    grid-template-areas: "text images";
    grid-template-rows: 840px;
    grid-template-columns: 1fr 1fr;
    border: 0px solid black;
    .main-text { 
      grid-area: text;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 160px 0px;
      padding-left: 172px;
      border: 0px solid black;
      background-color: #F0F0F0;

      &__title {
        margin-bottom: 40px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 800;
        font-size: 44px;
        line-height: 54px;
        letter-spacing: -0.0255199px;
        text-transform: uppercase;
        color: #262525;
      }
      &__text {
        padding-right: 152px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 30px;
        letter-spacing: -0.0220791px;
        color: #262525;
        .text-more {
          display: inline-block;
          width: 28px;
          height: 28px;
          color: white;
          background-color: black;
          text-align: center;
        }
      }
      &_after {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 300;
        font-size: 17px;
        line-height: 20px;
        color: #505050;
      }
    }
    .main-images { 
      grid-area: images;
      background-color: #F0F0F0;
      background-image: url('/vue--mst-arch/images/background-transport.png');
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
</style>