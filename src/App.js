// import logo from './logo.svg';
import {NavLink,Route} from 'react-router-dom'
import Home from './pages/Home'
import Content from './pages/Content'
import About from './pages/About'


function App() {
  return (
    <div >
        <div className="navBar">
            <NavLink activeClassName="sidebar_selected"
                     to="/Home/zhangsan/18">Home</NavLink>
            <NavLink activeClassName="sidebar_selected"
                     // to="/Content?name=zhangsan&age=18"
                     to={{pathname:'/Content',query:{name:'lisi',age:19}}}>Content</NavLink>
            <NavLink activeClassName="sidebar_selected"
                     to={{pathname:'/About',state:{name:'wangwu',age:20}}}>About</NavLink>
        </div>
        <p>--------------view------------------</p>
        <div className="view">
            <Route path="/Home/:name/:age" component={Home}></Route>
            <Route path="/Content" component={Content}></Route>
            <Route path="/About" component={About}></Route>
        </div>
    </div>
  );
}

export default App;
