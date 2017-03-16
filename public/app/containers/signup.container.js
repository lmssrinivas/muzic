import React from "react";
import SignUpComponent from "../components/signup.component";

class SignUpContainer extends React.createClass{

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
            <SignUpComponent
                errors={this.state.errors}
                onChange={this.changeUser}
                onSubmit={this.submitForm}
                user={this.state.user}
            />
        )
    }

}

export default SignUpContainer;
