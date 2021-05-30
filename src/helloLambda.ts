import { omit } from 'lodash'

export const handler = async (event:any) =>{

     console.log('Lambda invoked ',event)
      
     let result = omit(event,'_type__name')

     return result
}