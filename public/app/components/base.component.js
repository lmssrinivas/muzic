/**
 * Created by mlingolu on 3/15/17.
 */


import React,{PropTypes} from "react";
import {IndexLink , Link} from "react-router";

const Base = ({children}) => (
    <div>
        <div className="top-bar">
            <div className="top-bar-left">
                <IndexLink to={'/'}>Muzic App</IndexLink>
            </div>

            <div className="top-bar-right">
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'> Login In</Link>
            </div>
        </div>

        {children}

    </div>
);


Base.propTypes = {
    children : PropTypes.object.isRequired
};


export default Base;