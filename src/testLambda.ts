import { chunk } from 'lodash'

export const handler = async (event:any) =>{

     console.log('Lambda invoked ',event)
      
     let result = chunk([1,2,3,4,5,6],2)

     return JSON.stringify(result)
}