import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

export default class About extends Component{
    constructor(props){
        super(props);
        console.log("parent constructor")
    }
    componentDidMount(){
        console.log("parent did mount")
    }
    render(){
        console.log("parent render")
        return(
            <div>
                <h1>About us</h1>
                <User name="Pranav Shinde(function)"/>
                <UserClass name="Pranav Shinde(class)"/>
                <UserClass name="Pranav Shinde(class)"/>
            </div>
        )
    }
}