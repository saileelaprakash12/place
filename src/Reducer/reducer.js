const initialval={
    name:"",
    moments:[]
}
const reducer=(state=initialval,action)=>{

switch(action.type){
    
case 'NAME':
    debugger;
    state={
        ...state,
        name:action.payload
    }
    break;
    case 'MOMENTS':
    debugger;
    state={
        ...state,
        moments:action.payload
    }
    break;
    
    default:break;
}

return state
}
export default reducer