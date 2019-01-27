<template>
  <div class="wrapper">
    <div class="container">
      <center>
        <img
          v-lazy-src:webp="srcDin"
          alt="My Image Example"
          v-on:click="isActive = !isActive"
          v-bind:class="{ active: isActive }"/>
      </center>
       <center>{{ srcDin }}</center>
      <center><input type="text" v-model="srcDin" /></center>
      <div class="card" v-for="image in images" :key="image">
        <h3>Lorem ipsum dolor sit amet</h3>
        <img
          v-lazy-src="`https://via.placeholder.com/200/000000/ffffff?text=${image}`"
          alt="My Image Example"
        />
      </div>

      <h3>Scrolling Panel with container</h3>

      <div v-lazy-container class="scrollingPanel">
        <div class="card" v-for="image in images" :key="image">
          <h3>Lorem ipsum dolor sit amet</h3>
          <img
            v-lazy-src="`https://via.placeholder.com/150/000000/ffffff?text=${image}`"
            alt="My Image Example"
          />
        </div>
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
      isActive: true,
      srcDin: "https://via.placeholder.com/400/000000/ffffff?text=Lazyload test 1",
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
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
.active
  border 4px solid lime
.scrollingPanel
  max-height 300px
  overflow-y scroll
  -webkit-overflow-scrolling touch
  margin 1em
  border 2px solid #333
</style>
