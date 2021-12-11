import {useState,useRef} from 'react'
import store from '../../../store/index'
export default function FuncHook3(){
    const inpRef = useRef();
    let [info, setInfo] = useState({name:'zhang'});
    console.log('FuncHook3>> ' + info.name);

    function click(){
        const {value} = inpRef.current;
        console.log("FuncHook3>> click" + value)
        setInfo({name:value});
        store.dispatch({type:'updateName',data:{name:undefined} });
    }

    return <div>
        FuncHook3:<span>{info.name}</span><br/>
        <label>name</label><input ref={inpRef}/>
        <button onClick={click}>change name</button>
    </div>
}