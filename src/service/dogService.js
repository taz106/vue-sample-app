import axios from 'axios'

export default {
  apiPrefix: 'https://dog.ceo/api/',
  getBreedNameEndPoint: 'breeds/list/all',

  getAllBreedName () {
    return new Promise((resolve, reject) => {
      axios.get(this.apiPrefix + this.getBreedNameEndPoint)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  },

  getBreedImg (breed) {
    return new Promise((resolve, reject) => {
      axios.get(this.apiPrefix + 'breed/' + breed + '/images/random')
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
}
