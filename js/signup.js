// js/signup.js

document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const displayName = document.getElementById('display-name').value.trim();
    const username = document.getElementById('username').value.trim().toLowerCase();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const role = document.getElementById('role').value;

    // ===== VALIDATE =====
    if (!displayName || !username || !password || !confirmPassword || !role) {
        alert('Vui lòng điền đầy đủ tất cả các trường.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Mật khẩu không khớp.');
        return;
    }

    if (password.length < 6) {
        alert('Mật khẩu phải >= 6 ký tự.');
        return;
    }

    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
        alert('Username chỉ gồm chữ, số và _');
        return;
    }

    // ===== FIREBASE =====
    const userRef = db.ref('users/' + username);

    userRef.once('value')
        .then(snapshot => {
            if (snapshot.exists()) {
                alert('Tên đăng nhập đã tồn tại!');
                return;
            }

            const newUser = {
                displayName: displayName,
                password: password, // demo only
                role: role
            };

            return userRef.set(newUser);
        })
        .then(() => {
            alert('Đăng ký thành công!');
            window.location.href = 'dangnhap.html';
        })
        .catch(err => {
            console.error(err);
            alert('Lỗi khi đăng ký. Mở Console để xem.');
        });
});
