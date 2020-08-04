<template>
  <div id="app" class="app">
    <div class="nav-top">
      <navigation-top></navigation-top>
    </div>
    <div class="nav-side">
      <navigation-side></navigation-side>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <div class="footer-side">
      <footer-side></footer-side>
    </div>
  </div>
</template>

<script>
import NavigationTop from '@/components/navigation-top'
import NavigationSide from '@/components/navigation-side'
import FooterSide from '@/components/footer-side'

export default {
  name: 'App',
  components: {
    NavigationTop, NavigationSide, FooterSide,
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  @import url('https://db.onlinewebfonts.com/c/00d5a78493aed4b11e2584ad7cceee49?family=Gilroy+ExtraBold');

  .app {
    display: grid;
    grid-template-areas: "nav-top nav-top"
                         "nav-side content"
                         "footer-side footer-side";
    grid-template-rows: 60px auto 60px;
    grid-template-columns: 343px 1fr;
    width: 1920px;
    border: 0px solid grey;
    margin-left: auto;
    margin-right: auto;

    .nav-top { grid-area: nav-top; border: 0px solid grey; }
    .nav-side { 
      grid-area: nav-side; 
      display: flex;
      
      align-items: center;
      border: 0px solid grey; }
    .content { 
      grid-area: content; 
      padding-right: 60px;
      border: 0px solid grey; }
    .footer-side { 
      grid-area: footer-side; 
      display: flex;
      align-items: center;
      padding: 0px 60px;
      border: 0px solid grey; }
  }
</style>
