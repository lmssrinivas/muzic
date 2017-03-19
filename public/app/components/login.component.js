/**
 * Created by lmssrinivas on 3/15/17.
 */

import React,{ PropTypes } from "react";
import {Card, CardText} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {Link} from "react-router-dom";


const LoginComponent = ({onSubmit,onChange,user,errors}) =>(

    <Card className="container">
        <h2 className="card-heading">Log In</h2>


        <div className="field-line">

            <TextField
                floatingLabelText="Email"
                name="email"
                value={user.email}
                onChange={onChange}
                errorText={errors.email}
            />
        </div>

        <div className="field-line">
            <TextField
                floatingLabelText="Password"
                name="password"
                type="password"
                value={user.password}
                onChange={onChange}
                errorText={errors.password}
            />
        </div>


        <RaisedButton type="submit" label="Log in"></RaisedButton>

        <CardText> Don't have Account <Link to={'/signup'}> Create Account</Link> </CardText>

    </Card>
);

LoginComponent.propTypes={
    onSubmit:PropTypes.func.isRequired,
    onChange:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired,
    user:PropTypes.object.isRequired,
};


export default LoginComponent;