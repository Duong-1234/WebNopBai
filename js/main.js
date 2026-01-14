// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const userJSON = localStorage.getItem('currentUser');

    if (!userJSON) {
        // chưa login → đá về trang đăng nhập
        window.location.href = 'dangnhap.html';
        return;
    }

    const user = JSON.parse(userJSON);

    const nameEl = document.getElementById('user-name');
    if (nameEl) {
        nameEl.textContent = user.displayName;
    }

    // ví dụ phân quyền
    if (user.role === 'admin') {
        console.log('Admin logged in');
    }
});

// logout
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'dangnhap.html';
}
