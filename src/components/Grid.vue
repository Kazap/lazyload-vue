<template>
  <div class="wrapper">
    <div class="container">
      <img v-lazy-src:webp="srcDin" alt="My Image Example" /> {{ srcDin }}
      <input type="text" v-model="srcDin" />
      <div class="card" v-for="image in images" :key="image">
        <h3>Lorem ipsum dolor sit amet</h3>
        <img
          v-lazy-src="`http://lorempixel.com/200/200/fashion/${image}`"
          alt="My Image Example"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid",
  props: {
    msg: String
  },
  data() {
    return {
      srcDin: "http://lorempixel.com/500/500/fashion/1/",
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.wrapper
  background #eee
  box-shadow 0 0 0 3px rgba(0,0,0,.3)
.container
  margin 0 auto
  max-width 900px
  overflow hidden
  background #fff
</style>
