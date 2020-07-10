var fb = require('firebase');
// var fb = require('firebase-admin');



var fbconf = {
    apiKey: "AIzaSyBOcHCpbhK9HelrUXrUHNFU3SMfx4si-Kw",
    authDomain: "foodapp-f0cbb.firebaseapp.com",
    databaseURL: "https://foodapp-f0cbb.firebaseio.com",
    projectId: "foodapp-f0cbb",
    storageBucket: "foodapp-f0cbb.appspot.com",
    messagingSenderId: "555512310235",
    appId: "1:555512310235:web:e486b7a8e3b0b860"
  };

  fb.initializeApp(fbconf);
    var fbobj = {
    "db" : fb.database()
}

module.exports = fbobj;