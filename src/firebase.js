import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDEOjhClkbFBOKw-OT4lloMfi0R0dEpm5s",
  authDomain: "meuprojeto-bf550.firebaseapp.com",
  databaseURL: "https://meuprojeto-bf550.firebaseio.com"
};

var fb = firebase.initializeApp(config);

export default fb;