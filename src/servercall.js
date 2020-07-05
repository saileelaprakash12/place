import axios from 'axios'

  class Servercall {
    static  fnGetuser =async(url)=>{
        return await axios.get('places/')

    }
    
}
export default Servercall