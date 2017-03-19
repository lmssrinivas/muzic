/**
 * Created by mlingolu on 3/15/17.
 */


import React from "react";
import LoginComponent from './../components/login.component'

class LoginContainer extends React.Component{


    constructor(props){

        super(props);


        this.state ={
            errors:{},
            user:{
                password:'',
                email:''
            }
        }

        this.changeUser = this.changeUser.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    changeUser($event){
        let field = $event.target.name;
        const user = this.state.user;
        user[field] = $event.target.value;
        this.setState({
            user
        })
    }

    submitForm($event){
        console.log($event);
    }

    render(){
        return (
            <LoginComponent

                onChange={this.changeUser}
                onSubmit={this.submitForm}
                user={this.state.user}
                errors={this.state.errors}
            />
        )
    }


}


export default LoginContainer;