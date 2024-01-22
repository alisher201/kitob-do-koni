const url = 'https://jsonplaceholder.typicode.com'

class FechData {
    constructor(api) {
      this.api = api
    }
    get = () => {
     return $fetch(`${url}/${this.api}`, {
      })
   
    }
    create = (data) => {
        return $fetch(`${url}/${this.api}`)


    }
  }
//  export const getData = new FechData('todos')

 
