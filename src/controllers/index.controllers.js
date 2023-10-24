const indexCtrl = {};
const firebase = require('../firebase');
const auth = require('./auth.controller')
var express = require('express')
var app = require('../server')
const session = require("express-session");

indexCtrl.renderIndex = (req, res) => {
    res.render('index.hbs');
}

indexCtrl.renderSignin = (req, res) => {
    res.render('auth/signin.hbs');
}

indexCtrl.renderSignup = (req, res) => {
    res.render('auth/signup.hbs');
}

indexCtrl.renderAdmin = async (req, res) => {
    const db = firebase.firestoreDb;
    await firebase.getDocs(firebase.collection(db, "tickets"))
        .then((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                // console.log(doc.data()), console.log(doc.id);
                docs.push({ doc: doc.data(), id: doc.id });
            });

            res.render('admin.hbs', { docs });

        });
    console.log(req.session);
}




module.exports = indexCtrl;