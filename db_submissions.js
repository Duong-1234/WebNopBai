// db_submissions.js

// --- 1. KHỞI TẠO CẤU HÌNH FIREBASE (Sử dụng cấu hình của bạn từ hình ảnh tham khảo) ---
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

// Khởi tạo Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// --- 2. KHAI BÁO BIẾN TOÀN CỤC CỦA FIREBASE SDK v8 ---
// Đây là cách sử dụng các module Auth và Database 
const auth = firebase.auth();
const database = firebase.database();