import {useState,useRef} from 'react'
// import store from '../../../store/index'
import {useStore,useDispatch,useSelector} from "react-redux";
export default function FuncHook2(){
    const inpRef = useRef();
    let [person, setPerson] = useState({name:'zhang'});
    console.log('FuncHook2>> ' + person.name);
    // const store = useStore();
    // console.log(store.getState())
    const dispatch = useDispatch();
    // console.log(dispatch)
    const select = useSelector(state => state.count);
    console.log(select)

    function click(){
        const {value} = inpRef.current;
        console.log("FuncHook2>> click" + value)
        setPerson({name:value});
        dispatch({type:'updateName',data:{name:undefined} });
    }

    return <div>
        FuncHook2:<span>{person.name}</span><br/>
        <label>name</label><input ref={inpRef}/>
        <button onClick={click}>change name</button>
    </div>
}