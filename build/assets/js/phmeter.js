// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB17Dg3NCxBLk-XVnZ1dUOJsss1-9hl-Ak",
    authDomain: "fishfeeder-8e3e2.firebaseapp.com",
    databaseURL: "https://fishfeeder-8e3e2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fishfeeder-8e3e2",
    storageBucket: "fishfeeder-8e3e2.appspot.com",
    messagingSenderId: "657950017507",
    appId: "1:657950017507:web:be4e0e8aeb84713a0ac2d6",
    measurementId: "G-RFGCT9PLN8"
};

firebase.initializeApp(firebaseConfig);

var phmeterRef = firebase.database().ref('phvalue');
phmeterRef.on('value', function (snapshot) {
    phvalue = snapshot.val()
    console.log(phvalue)
});