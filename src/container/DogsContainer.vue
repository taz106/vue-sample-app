<template>
    <div class="dogs">
        <p>I am DogsContainer</p>
        <div class="dogs-menu">
          <p class="title"> Dogs Menu </p>
          <ul>
            <li v-for="(breed, index) in breeds"
                :key="index"
                @click="getBreedDesc(index)">
                  <dogsmenu :breed="breed" />
            </li>
          </ul>
        </div>
        <div class="dogs-viewer">
            <dogsviewer 
              :dogbreedIndex="breedIndex"
              :dogbreedName="breedViewName" 
              :dogbreedImg="breedViewImg"
              @next-random="nextRandom" />
        </div>
    </div>
</template>

<script>
import DogsMenu from '@/components/dogs/DogsMenu'
import DogsViewer from '@/components/dogs/DogsViewer'
import DogService from '@/service/dogService'

export default {
  name: 'DogsContainer',
  data: function () {
    return {
      breeds: [],
      breedIndex: 0,
      breedViewName: '',
      breedViewImg: ''
    }
  },
  components: {
    dogsmenu: DogsMenu,
    dogsviewer: DogsViewer
  },
  created () {
    this.getBreedName()
  },
  watch: {
    '$route': 'getBreedName'
  },
  methods: {
    getBreedDesc (index) {
      DogService.getBreedImg(this.breeds[index])
      .then(
        res => {
          this.breedIndex = index
          this.breedViewName = this.breeds[index]
          this.breedViewImg = res.data.message
        }
      )
      .catch(err => console.log(err))
    },

    getBreedName () {
      DogService.getAllBreedName()
      .then(
        res => {
          if (res.status === 200) {
            let breedNames = res.data.message

            for (let breedName in breedNames) {
              this.breeds.push(breedName)
            }
            return this.getBreedDesc(0)
          }
        }
      )
      .catch(
        err => console.log(err)
      )
    },

    nextRandom (index) {
      this.getBreedDesc(index)
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
  .title {
    margin: 0px;
    padding: 10px 0px;
    height: 20px;
    background-color: #e2e2e2;
    box-shadow: 0px 0px 1px 1px #adaeb1;
  }
  ul {
    list-style: none;
    padding-left: 0px;
    margin-top: 0px;
    height: 700px;
    overflow-y: scroll;
  }

  ul::-webkit-scrollbar {
    width: 1em;
  }

  ul::-webkit-scrollbar-thumb{
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  li {
    text-align: center;
    height: 30px;
    padding: 10px 5px;
    border-bottom: 1px solid #e2e2e2;
  }
</style>



