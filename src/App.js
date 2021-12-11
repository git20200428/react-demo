// import logo from './logo.svg';
import {NavLink,Route} from 'react-router-dom'
// import Home from './pages/Home'
// import Content from './pages/Content'
// import About from './pages/About'
// import TestRef from './component/test/testRef'
import FuncHook1 from "./component/test/hooks/funcHook1"
import FuncHook2 from "./component/test/hooks/funcHook2"
function App() {
  return <div>
    <h3> App</h3>
    {/*<NavLink to='/func1'>FuncHook1</NavLink>*/}
    {/*<NavLink to='/func2'>FuncHook2</NavLink>*/}
    <p>-------------</p>
    {/*<Route path='/func1' component={FuncHook1}></Route>*/}
    {/*<Route path='/func2' component={FuncHook2}></Route>*/}
    <FuncHook1></FuncHook1>
    <FuncHook2></FuncHook2>
  </div>;
}

export default App;
