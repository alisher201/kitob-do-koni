const url = 'https://jsonplaceholder.typicode.com'

export class FechData {
  constructor(api) {
    this.api = api
  }
  get = () => {
    return $fetch(`${url}/${this.api}`, {
    })

  }
  create = (data, id) => {
    return $fetch(`${url}/${this.api}${id ? '/' : ''}${id ? id : ''}`,
      {
        method: 'Post',
        body: {
          data
        }
      })
  }
  delate = (id) => {
    return $fetch(`${url}/${this.api}/${id}`, {
      method: 'DELETE',
    })
  }
  getOne = (id) => {
    return $fetch(`${url}/${this.api}/${id}`)
  }



}



