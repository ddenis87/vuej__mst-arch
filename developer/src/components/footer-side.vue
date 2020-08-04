<template>
  <div class="footer">
    <div class="footer__text">Разработано в MST</div>
    <div class="footer__text">2020</div>
  </div>  
</template>

<script>
export default {
  name: 'FooterSide'
}
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: Gilroy sans-serif;
    &__text {
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 15px;
      letter-spacing: 0.175729px;
      text-transform: uppercase;
      &:first-child {
        border-right: 1px solid grey;
        padding-right: 20px;
      }
      &:last-child { padding-left: 20px; }
    }
    &__line { height: 2px; }
  }
</style>