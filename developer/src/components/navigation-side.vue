<template>
  <div class="navigation-side">
    <ul class="menu">
      <router-link v-for="(row, index) in arrMenu" 
                   :key="index" 
                   :to="row.url"
                   :exact="row.exact"
                   tag="li" 
                   class="menu__item"
                   active-class="menu__item_active">{{ row.title }}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavigationSide',
  data: function() {
    return {
      arrMenu: [
        {url: '/', title: 'Архитектура', exact: true},
        {url: '/improvement?index=2', title: 'Благоустройство'},
        {url: '/safety?index=3', title: 'Безопастность'},
        {url: '/enginering?index=4', title: 'Инженерия'},
        {url: '/infrastructure?index=5', title: 'Инфраструктура'},
        {url: '/transport?index=6', title: 'Транспортная доступность'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .navigation-side {
    font-family: 'Roboto';

    .menu {
      padding-left: 60px;
      &__item {
        margin: 32px 0px;
        list-style: none;
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: 0.567739px;
        cursor: pointer;
        &:first-child { margin-top: 0px; }
        &:last-child { margin-bottom: 0px; }
        &:hover { background-image: linear-gradient(#fff, #EBD8CC); }
        &_active {
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.567739px;
          text-transform: uppercase;
          color: #262525;
          background-image: linear-gradient(#fff, #EBD8CC);
        }
      }
    }
  }
</style>