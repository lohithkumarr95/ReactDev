import { useEffect } from "react";
import UserClass from "./UserClass";

const About = () => {

  useEffect(()=>{
    console.log("About component added in useEffect");
    
  },[])
  console.log("About page loaded")
    return (
      <div>
        <h1>This is About Page</h1>
        <UserClass userData={{"name":'Lohith',"address":"Srinagar"}} />
      </div>
    );
}

export default About;