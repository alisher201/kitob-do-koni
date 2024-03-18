const url = 'https://kytabshop.al-raqam.com'
// const url = 'http://192.168.100.167:8060'
// const url = 'https://jsonplaceholder.typicode.com'

export class FechData {
  constructor(api) {
    this.api = api
  }
  // Get
  get = () => {
    return $fetch(`${url}/${this.api}`, {
    })

  }
  // Create
  create = (data, id) => {
    return $fetch(`${url}/${this.api}${id ? '/' : ''}${id ? id : ''}`,
      {
        method: 'Post',
        body: {
          ...data
        }
      })
      // .catch(error => {
      //   console.log('eror');
      // })
  }
  // Delete
  delate = (id) => {
    return $fetch(`${url}/${this.api}/${id}`, {
      method: 'DELETE',
    })
  }
  
  likeDelete = (id, type) => {
    return $fetch(`${url}/${this.api}/${id}?type=${encodeURIComponent(type)}`, {
      method: 'DELETE',
    })
  }
  
  deleteAll = () => {
    return $fetch(`${url}/${this.api}`, {
      method: 'POST'
    })
  }
  // GetOneById
  getOne = (id) => {
    return $fetch(`${url}/${this.api}/${id}`)
  }
}