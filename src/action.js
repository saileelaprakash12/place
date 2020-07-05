import Servercall from './servercall'
const Useraction=(dispatch)=>{
Servercall.fnGetuser('name/')
.then(async(response)=>{
    const data= await response.data
    dispatch({
        type:"MOMENTS",
        payload:data
    })
})
.catch(()=>{
dispatch({
    type:"MOMENTS",
    payload:[]
})
})
}

export default Useraction