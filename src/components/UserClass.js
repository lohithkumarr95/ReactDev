import {Component} from 'react';
class UserClass extends Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            userInfo:{
                name:"Dummy",
                address:"Bengaluru"
            }
        }
    }

    async componentDidMount(){
        console.log("Child Component mounted")
        const response = await fetch("https://api.github.com/users/lohithkumarr95");
        const json = await response.json()
        console.log(json)

        this.setState({
            userInfo : json
        })
        
    }

    render(){
        const {login,location,avatar_url} = this.state.userInfo;
        return (
            <div>
                <h1>Name - {login}</h1>
                <h1>Address - {location}</h1>
                <img src={avatar_url}></img>
            </div>
        )
    }
}

export default UserClass; 