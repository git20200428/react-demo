import React from "react";

export default class About extends  React.Component{

    render() {
        console.log(this.props.location.state)
        // let {name,age} = this.props.location.state;
        // console.log("About",name,age)
        return <div>
            this is About
        </div>
    }
}
