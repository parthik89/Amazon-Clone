import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-93eed/us-central1/api", //THE API (cloud function) URL
});
export default instance;

// GO and check the qazi amazon clone to know about the function deploy then go and check

// https://us-central1-challenge-4b2b2.cloudfunctions.net/api

// FOR WORKING PROJECT DO LOCALHOST
// 1. NPM TART
// 2. firebase emulators:start //  E:\REACTPROJECT\amazzon-clone\functions> firebase emulators:start
// 3. open https://dashboard.stripe.com
// 4. just go WIth IT

// inside functionn
// 2.  E:\REACTPROJECT\amazzon-clone\functions> firebase emulators:start

// MAIN URL LIVE URL NOT WORK PROPERLY BCZ I DONT CHANGE MY PLAN OF FIREBASE AND DEPLOY MY FIREBASE FUNCTION
// https://challenge-93eed.web.app
//https://challenge-93eed.web.app

// FIREBASE SHOW URL PROJECT DEPLOY
// https://console.firebase.google.com/project/challenge-93eed/overview
