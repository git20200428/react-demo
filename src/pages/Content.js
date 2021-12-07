import React from "react";
// import qs from 'querystring'

export default class Content extends  React.Component{

    render() {
        console.log(this.props.location)
        // console.log(qs.parse(this.props.location.search.replace('?','')));
        // let {name,age} = this.props.location.search;//qs.parse(this.props.location.search.replace('?',''));
        // console.log("Content",name,age)
        return <div>
            this is Content
        </div>
    }
}