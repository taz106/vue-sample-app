<template>
    <div class="dogs">
        <p>I am DogsContainer</p>
        <div class="dogs-menu">
            <dogsmenu />
        </div>
        <div class="dogs-viewer">
            <dogsviewer />
        </div>
    </div>
</template>

<script>
import DogsMenu from '@/components/dogs/DogsMenu'
import DogsViewer from '@/components/dogs/DogsViewer'
import { HttpService } from '@/service/httpService'

export default {
  name: 'DogsContainer',
  data: function () {
    return {
      breeds: [],
      views: {}
    }
  },
  components: {
    dogsmenu: DogsMenu,
    dogsviewer: DogsViewer
  },
  created () {
    this.fetchData(new HttpService())
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData (httpService) {
      httpService.getAllBreedName()
      .then(
        res => {
          if (res.status === 200) {
            let breedNames = res.data.message

            for (let breedName in breedNames) {
              this.breeds.push(breedName)
            }
            return httpService.getBreedDesc(this.breeds[0])
          }
        }
      )
      .then(
        res => {
          console.log('log for dogs desc')
          console.log(res)
        }
      )
      .catch(
        err => console.log(err)
      )
    }
  }
}
</script>

<style scoped>
    .dogs-menu {
        width: 25%;
        float: left;
    }

    .dogs-viewer {
        width: 75%;
        float: left;
    }
</style>



