import React , {Component} from "react";
import SingUpComponent from "../components/signup.component";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class SignUpContainer extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            errors : {},
            user:{
                name:'',
                email:'',
                password:''
            }
        };



        this.submitForm = this.submitForm.bind(this);
        this.changeUser  = this.changeUser.bind(this);

    }


    changeUser(event){
        console.log(event);
        console.log(this.state);
    }


    submitForm(event){
        console.log(event);
    }


    render(){
        return(
            <SingUpComponent
                errors={this.state.errors}
                onChange={this.changeUser}
                onSubmit={this.submitForm}
                user={this.state.user}
            />
        )
    }

}

export default SignUpContainer;
