import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import passport from 'passport'

const PrivateRoute = ({component: Component, ...rest}) => {
    function isLogin(req, res, next) {
        axios.post('/login',
        passport.authenticate('local'),
        function(req, res) {
            // If this function gets called, authentication was successful.
            // `req.user` contains the authenticated user.
            res.redirect('/users/' + req.user.username);
        });
    
      }
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;