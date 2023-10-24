const authCtrl = {};

const firebase = require('../firebase');
var express = require('express')
var app = require('../server')
const session = require("express-session");


authCtrl.createNewUser = async (req, res) => {
    const { email, password, passwordconfirm } = req.body;
    const auth = firebase.auth;
    if (email === '' || password === '' || passwordconfirm === '' || password.length < 6 || password !== passwordconfirm) {
        res.redirect('/signup');

    } else {
        await firebase.createUserWithEmailAndPassword(auth, email, password,)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                res.redirect('/admin');
                // ...
                app.locals.user = user;
                console.log(app.locals.user.providerData[0].email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                res.redirect('/signin');
            });
    }

}

authCtrl.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const auth = firebase.auth;
    if (email === '' || password === '') {
        res.redirect('/signin');
    } else {
        await firebase.signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                req.app.locals.user = user;
                res.redirect('/admin');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                res.redirect('/signin');
            });
    }
}




module.exports = authCtrl;