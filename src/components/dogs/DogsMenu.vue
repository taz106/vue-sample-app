<template>
  <span> {{breed}} </span>
</template>

<script>
export default {
  name: 'DogsMenu',
  props: ['breed'],
  methods: {
    // onBreedSelect (breed) {
    //   console.log('breed selected -- ', breed)
    //   this.$emit('changebreed', breed)
    // }
  }
}
</script>

<style scoped>
  
</style>


