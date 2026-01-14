// js/login.js

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim().toLowerCase();
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Vui lòng nhập đầy đủ.');
        return;
    }

    const userRef = db.ref('users/' + username);

    userRef.once('value')
        .then(snapshot => {
            if (!snapshot.exists()) {
                alert('Tài khoản không tồn tại!');
                return;
            }

            const user = snapshot.val();

            if (user.password !== password) {
                alert('Sai mật khẩu!');
                return;
            }

            // Lưu session đăng nhập
            localStorage.setItem('currentUser', JSON.stringify({
                username: username,
                displayName: user.displayName,
                role: user.role
            }));

            window.location.href = 'index.html';
        })
        .catch(err => {
            console.error(err);
            alert('Lỗi đăng nhập.');
        });
});
