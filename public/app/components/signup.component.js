/**
 * Created by mlingolu on 3/15/17.
 */


import React, { PropTypes } from 'react';
import {Card,CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';

const SingUpComponent = ({onSubmit,onChange,errors,user})=>(
    <Card className="container">

        <form action="/" onSubmit={onSubmit}>
            <h2 className="card-heading">Sign Up Form</h2>

            { errors.summary && <p className="error-message">{errors.summary}</p> }

            <div className="field-line">
                <TextField
                    floatingLabelText="Name"
                    name="name"
                    onChange={onChange}
                    errorText={errors.name}
                    value={user.name}
                    autoComplete="off"
                />
            </div>

            <div className="field-line">

                <TextField
                    floatingLabelText="Email"
                    name="email"
                    value={user.email}
                    onChange={onChange}
                    errorText={errors.email}
                    autoComplete="off"
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText="Password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    errorText={errors.password}
                    value={user.password}
                    autoComplete="off"
                />

            </div>


            <div className="button-line">
                <RaisedButton type="submit" label="Create "/>
            </div>

            <CardText><Link to={'/login'} > Log In ??</Link></CardText>
        </form>
    </Card>
);

SingUpComponent.propTypes={
    onSubmit:PropTypes.func.isRequired,
    onChange:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired,
    user:PropTypes.object.isRequired
};


export default SingUpComponent;