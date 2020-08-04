<template>
  <div class="navigation-top">
    <div class="navigation-top__title">Первомайская</div>
    <div class="navigation-top__menu">
      <ul class="menu-top" id="menu-top">
        <li v-for="(row, index) in arrMenu" 
            :key="index" 
            class="menu-top__item"
            @click="clickItem(row.url, $event)" @mouseover="overItem" @mouseout="outItem">{{ row.title }}</li>
      </ul>
      <div class="hr-block">
        <hr class="navigation-top__hr" :style="{ left: hrStart + 'px', width: hrWidth + 'px' }">
      </div>
      
    </div>
    <div class="navigation-top__contact">88001000000</div>
    <div class="block">
      <div class="block__left"></div>
      <div class="block__right">
        <div class="block__line"><hr class="block__hr"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigation-top',
  components: {
  },
  data: function() {
    return {
      arrMenu: [
        {url: '/', title: 'О комплексе'},
        {url: '/', title: 'Особенности'},
        {url: '/', title: 'Пентхаусы'},
        {url: '/', title: 'Выбрать квартиру'},
      ],
      hrStart: 0,
      hrStartActiv: 0,
      hrEnd: 0,
      hrWidth: 0,
      hrWidthActiv: 0,
      coordMenuStart: 0,
    }
  },
  created: function() {
  },
  methods: {
    clickItem: function(url, menuItem) {
      let menuParent = menuItem.target.parentNode.getBoundingClientRect();
      let coordMenuItem = menuItem.target.getBoundingClientRect();
      this.hrStart = Math.abs(coordMenuItem.x - menuParent.x);
      this.hrStartActiv = this.hrStart;
      this.hrWidth = coordMenuItem.width;
      this.hrWidthActiv = this.hrWidth;
      this.$router.push(url);
    },
    overItem: function(menuItem) {
      let menuParent = menuItem.target.parentNode.getBoundingClientRect();
      let coordMenuItem = menuItem.target.getBoundingClientRect();
      if (((coordMenuItem.x - menuParent.x) + coordMenuItem.width) > (this.hrStart + this.hrWidth)) {
        this.hrWidth = Math.abs((coordMenuItem.x - menuParent.x - this.hrStart) + coordMenuItem.width);
      } else {
        this.hrStart = coordMenuItem.x - menuParent.x;
        this.hrWidth = this.hrStartActiv + this.hrWidthActiv - this.hrStart;
      }
    },
    outItem: function(menuItem) {
      let coordMenuItem = menuItem.target.getBoundingClientRect();
      this.hrWidth = this.hrWidthActiv;
      this.hrStart = this.hrStartActiv;
    }
  }
}
</script>

<style lang="scss" scoped>
  .navigation-top {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0px 120px;
    font-family: Gilroy sans-serif;

    &__title, &__contact {
      text-transform: uppercase;
      font-style: normal;
      font-weight: 800;
      font-size: 17px;
      line-height: 21px;
      letter-spacing: 0.290629px;
      color: #262525;
      z-index: 200;
    }
    &__menu {
      position: relative;
      border: 0px solid grey;
      z-index: 200;
      box-sizing: border-box;
      .menu-top {
        margin: 0px;
        padding: 0px;
        border: 0px solid grey;
        box-sizing: border-box;

        &__item {
          display: inline-block;
          width: auto;
          padding: 0px 28px;
          // margin: 0px 22px;
          list-style: none;
          text-transform: uppercase;
          font-style: normal;
          font-weight: 800;
          font-size: 12px;
          line-height: 15px;
          letter-spacing: 0.8px;
          color: #262525;
          cursor: pointer;
          border: 0px solid black;
          box-sizing: border-box;
          &:first-child { margin-left: 0px; }
          &:last-child { margin-right: 0px; }
        }
      }
      .hr-block {
        display: inline-block;
        border: 0px solid black;
        .navigation-top__hr {
          position: relative;
          height: 5px;
          border: 0px;
          background-color: #D88F5E;
          left: 100px;
        }
      }
    }
    
    .block {
      position: absolute;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 60px;
      left: 0px;
      top: 0px;
      padding: 0px 24px;
      padding-top: 25px;
      box-sizing: border-box;
      z-index: 100;
      // background-color: lightblue;

      &__left {
        width: 70px;
        height: 70px;
        background-color: black;
        box-shadow: 0px 0px 3px black;
      }
      &__right {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 70px;
        background-color: black;
        box-shadow: 0px 0px 3px black;
      }
      &__line {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 25px;
        height: 25px;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        transform: rotate(-45deg);
        
      }
      &__hr {
        position: relative;
        left: -10px;
        margin: 0px;
        width: 40px;
      }
    }
   
  }
</style>