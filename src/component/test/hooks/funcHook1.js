import {useState,createRef} from 'react'
// import store from '../../../store/inde
import {useStore,useDispatch,useSelector} from "react-redux";
import {asyncIncrement} from '../../../store/actions/countAction'
export default function FuncHook1(){
    const ref = createRef();
    let [num, setNum] = useState(25);
    console.log('FuncHook1>> ' + num);
    const store = useStore();
    // console.log(store)
    const dispatch = useDispatch();
    // // console.log(dispatch)
    // const select = useSelector(state => state,(left,right)=>{
    //     console.log(left)
    //     console.log(right)
    //     return 0
    // });
    // console.log(select)
    function click(){
        console.log("FuncHook1>> click")
        // setNum(num+1);
        // store.dispatch({type:'increment'})
        dispatch({type:'increment'})
    }
    function asyClick(){
        console.log("FuncHook1>> click")
        // setNum(num+1);
        // store.dispatch(asyncIncrement)
        dispatch(asyncIncrement)
    }

    return <div>
        FuncHook1:<span>{store.getState().count.num}</span><br/>
        <button onClick={click}>change num</button>
        <button onClick={asyClick}>async change num</button>
    </div>
}