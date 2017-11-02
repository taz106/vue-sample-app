import axios from 'axios'

export class HttpService {
  apiPrefix = 'https://dog.ceo/api/';
  getBreedNameEndPoint = 'breeds/list/all';

  constructor () {
    console.log('called')
  }

  getAllBreedName () {
    return new Promise((resolve, reject) => {
      axios.get(this.apiPrefix + this.getBreedNameEndPoint)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  getBreedDesc (breed) {
    return new Promise((resolve, reject) => {
      axios.get(this.apiPrefix + 'breed/' + breed + '/images/random')
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
}
