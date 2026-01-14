// js/firebase-config.js

const firebaseConfig = {
    apiKey: "AIzaSyBqwdHrHSxDM8wxE_qfGIFMRgpUV6P3W0IQ",
    authDomain: "lop6a3-259cd.firebaseapp.com",
    projectId: "lop6a3-259cd",
    storageBucket: "lop6a3-259cd.appspot.com",
    messagingSenderId: "278028419126",
    appId: "1:278028419126:web:edb9ec336ba822e0e19897",
    // Đoạn databaseURL này là cần thiết cho Realtime Database
    databaseURL: "https://lop6a3-259cd-default-rtdb.firebaseio.com" 
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Export database
const db = firebase.database();
