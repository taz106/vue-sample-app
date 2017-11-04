<template>
    <div>
        <p> {{title}} </p>
        <h3> {{dogbreedName}} </h3>
        <div class="image-holder">
          <img :src="dogbreedImg" :alt="'dog Image'" />
        </div>

        <div>
          <button @click="$emit('next-random', dogbreedIndex)"> Next </button>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'DogsViewer',
  props: ['dogbreedIndex', 'dogbreedName', 'dogbreedImg'],
  created () {
    console.log('created called')
    console.log(this.dogbreedName)
    console.log(this.dogbreedImg)
  },
  updated () {
    console.log('updated called')
  },
  data () {
    return {
      title: 'Dogs Viewer'
    }
  }
}
</script>

<style scoped>
  button {
    width: 30%;
    margin-top: 40px;
    height: 35px;
    border-radius: 3px;
    border: 0px;
    box-shadow: 0px 0px 1px;
  }

  .image-holder {
    height: 400px;
    padding: 30px 0;
  }

  img {
    height: 100%;
  }
</style>
