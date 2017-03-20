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


    changeUser($event){

    }


    submitForm($event){

        $event.preventDefault();

        let data={};
        data.name = encodeURIComponent(this.state.user.name);
        data.email = encodeURIComponent(this.state.user.email);
        data.password = encodeURIComponent(this.state.user.password);
        let f= encodeURIComponent(this.state.user);

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
