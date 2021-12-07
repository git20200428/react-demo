import React from "react";

export default class Home extends  React.Component{

    render() {
        let {name,age} = this.props.match.params;
        console.log("Home",name,age)
        return <div>
            this is Home
        </div>
    }
}
