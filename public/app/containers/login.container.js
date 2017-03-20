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
        $event.preventDefault();

        let data={};
        data.email = encodeURIComponent(this.state.user.email);
        data.password = encodeURIComponent(this.state.user.password);

        let ff= encodeURIComponent(this.state.user);

        const xhr = new XMLHttpRequest();
        xhr.open('post','/auth/login');
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.responseType = 'json';

        xhr.addEventListener('load', () => {
            if(xhr.status == 200){

                this.setState({
                    errors : {}
                });

                alert('Successfully loged in');
            }else{
                let errors = xhr.response.errors ? xhr.response.errors : {};
                errors.message =xhr.response.message;

                this.setState({
                    errors
                })
            }
        });

        xhr.send(this.state.user);
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