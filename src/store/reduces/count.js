
const preState = {num:1};
export default function count(state=preState,action){
    console.log('count>>',action)
    switch (action.type){
        case 'increment':
            console.log('count increment')
            return {num: state.num+1};
        case 'asyncIncrement':
            return {num: state.num+1};
        case 'decrement':
            return {num:state.num -1};
        default:
            return state;
    }
}