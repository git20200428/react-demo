export const asyncIncrement = (dispatch)=>{
    setTimeout(()=>{
        dispatch({type:'asyncIncrement'})
    },3000);
}