/**
 * Created by mlingolu on 3/15/17.
 */

import Base          from "./components/base.component";
import HomeComponent from "./components/home.component";
import LoginContainer from "./containers/login.container";
import SignUpContainer from "./containers/signup.container";

const routes ={
    component: Base,
    childRoutes:[

        {
            path:'/',
            component : HomeComponent
        },
        // {
        //     path:'/login',
        //     component:LoginContainer
        // },
        {
            path:'/signup',
            component:SignUpContainer
        }

    ]
};

export default routes;