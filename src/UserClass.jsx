import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log("child constructor")

        this.state={
            count:0,
            user:{
                username:"demouser",
                avatar_url:null
            }
        }
    }
    async componentDidMount(){
        console.log("child component did mount")
        let res=await fetch("https://api.github.com/users/pranavshinde")
        let data=await res.json()

        this.setState({
            user:data
        })
    }
    componentDidUpdate(){
        console.log("updated")
    }
    componentWillUnmount(){
        console.log("unmount")
    }
    render(){
        console.log("child rendered")
        return(<>
            <div style={{border:"1px solid black",width:"1000px",margin:"10px",padding:"10px"}}>
               <h1>Username:{this.props.name}</h1>
               <h2>Location</h2>
               <p>Count:{this.state.count}</p>
               <button onClick={()=>
                this.setState({
                    count:this.state.count+1
                })
               }>increase count</button>
            </div>
            <div style={{border:"1px solid black",width:"1000px",margin:"10px",padding:"10px"}}>
                <h1>username:{this.state.user.login}</h1>
                <img src={this.state.user.avatar_url}></img>
            </div></>
        )
    }
}
export default UserClass;

//lifecycle:
/*
   ===mounting===
   constructor-
   render(dummy data)-
   <html>(dummy data)-
     componentDidMount===
       API-
       setState()


    ===updating===
     render(api data)-
     html(api data)-
     componentDidUpdate
     
    ===unmounting===
    componentWillUnmount- 
*/