import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCzg5Kmx8KAZVySMJX8qqEsKlj0yPnqF1M",
    authDomain: "feynmen-18368.firebaseapp.com",
    databaseURL: "https://feynmen-18368.firebaseio.com",
    projectId: "feynmen-18368",
    storageBucket: "feynmen-18368.appspot.com",
    messagingSenderId: "343008585205",
    appId: "1:343008585205:web:6ff82cf4757f1dcae0acbc",
    measurementId: "G-J5YLRD2B5N"
  };


const app=firebase.initializeApp(firebaseConfig)

// const auth = firebase.auth()

// export default auth

export default app