const preState = {detail:{address:'张东路',telNum:'18317004020'}}

export default function detail(state=preState,action){
    console.log('detail>>',action)
    switch (action.type){
        case 'updateAddress':
            return {...state.detail,address:action.data}
        default:
            return state;
    }
}