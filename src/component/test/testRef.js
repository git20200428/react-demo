import React from 'react';

export default class TestRef extends React.Component{

    test = ()=>{
        console.log("button is clicked");
        console.log(this.c)
        this.c.focus();
    }
    render() {
        return <div>
            <label htmlFor="">用户名</label><input ref={c => this.c=c} type="text"/><br/>
            <button onClick={this.test}>button</button>
        </div>
    }
}