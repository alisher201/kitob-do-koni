const url = 'https://kytabshop.al-raqam.com'
// const url = 'http://192.168.100.189:8060'

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
          data
        }
      })
  }
  // Delete
  delate = (id) => {
    return $fetch(`${url}/${this.api}/${id}`, {
      method: 'DELETE',
    })
  }
  // GetOneById
  getOne = (id) => {
    return $fetch(`${url}/${this.api}/${id}`)
  }



}



