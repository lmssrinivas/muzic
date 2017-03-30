/**
 * Created by mlingolu on 3/15/17.
 */

import React, {PropTypes} from "react";
import {Link} from "react-router-dom";
import FontIcon from 'material-ui/FontIcon';
import {blue500} from 'material-ui/styles/colors'

const Base = () => (
    <div>
        <div className="top-bar">
            <div className="top-bar-left">
                <span>
                     <i className="fa fa-home blue"></i>
                 </span>
                <Link to={'/'}>24</Link>
                <Link to={'/music'}>Music</Link>
                <Link to={'/users'}>Users</Link>
            </div>

            <div className="top-bar-right">
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'> Login In</Link>
            </div>
        </div>

    </div>
);

//
// Base.propTypes = {
//     children : PropTypes.object.isRequired
// };


export default Base;