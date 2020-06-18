import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import passport from 'passport'

const PublicRoute = ({component: Component, restricted, ...rest}) => {
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
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;