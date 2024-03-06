import React from 'react'
import About from './About';

class ContactClass extends React.Component{
    constructor(props){
        super(props);

        console.log(props)

    }

    render(){
        return (
            <div>
                ContactClass
                <About />
            </div>
        )
    }
    
    componentDidMount(){
        console.log("First Component Mounted")
    }
}

export default ContactClass;