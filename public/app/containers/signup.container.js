import React , {Component} from "react";
import SingUpComponent from "../components/signup.component";
import Snackbar from 'material-ui/Snackbar'
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class SignUpContainer extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            snackbar:{
                open:false,
                message:''
            },
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

    clearForm(){

        let user = {
            name:'',
            email:'',
            password:''
        };
        this.setState({user});
    }

    closeSnackBar(){
        // this.setState({open:false});
    }

    changeUser($event){
        const user = this.state.user;
        let field = $event.target.name;
        user[field] = $event.target.value;

        this.setState({
            user
        })

    }


    submitForm($event){

        $event.preventDefault();

        axios.post('/api/users/signup',this.state.user).then(response=>{

            let snackbar ={};
            snackbar.open = true;
            snackbar.message = response.data.message;

            this.setState({snackbar});
            if(response.data.data && response.data.success){
                this.clearForm();
                this.props.history.push(`/users/${response.data.data._id}`)

            }else if(response.data.error && !response.data.success){

            }

        })

    }


    render(){
        let style={
            top: 0,
            height: 50,
            backgroundColor: '#e86750'
        }

        return(
            <div>
                <Snackbar
                    style={style}
                    open={this.state.snackbar.open}
                    message={this.state.snackbar.message}
                    autoHideDuration={3000}
                    onRequestClose={this.closeSnackBar}
                />

                <SingUpComponent
                    errors={this.state.errors}
                    onChange={this.changeUser}
                    onSubmit={this.submitForm}
                    user={this.state.user}
                />
            </div>

        )
    }

}

export default SignUpContainer;
