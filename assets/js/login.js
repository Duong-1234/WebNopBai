// assets/js/login.js

(function () {
  function redirectToRolePage(role) {
    if (role === 'gv') window.location.href = 'trang_chu_gv.html';
    else if (role === 'hs') window.location.href = 'index_hs.html';
    else window.location.href = 'index.html';
  }

  // Nếu đã login thì tự redirect luôn
  function autoRedirectIfLoggedIn() {
    const cur = localStorage.getItem('currentUser');
    if (!cur) return;

    try {
      const user = JSON.parse(cur);
      if (user && user.role) redirectToRolePage(user.role);
    } catch (e) {
      localStorage.removeItem('currentUser');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    autoRedirectIfLoggedIn();

    const form = document.getElementById('login-form');
    if (!form) {
      console.error('Không tìm thấy #login-form');
      return;
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');

      const username = (usernameInput?.value || '').trim().toLowerCase();
      const password = passwordInput?.value || '';

      if (!username || !password) {
        alert('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.');
        return;
      }

      // Lấy user từ Firebase: users/<username>
      const userRef = db.ref('users/' + username);

      userRef.once('value')
        .then((snapshot) => {
          if (!snapshot.exists()) {
            alert('Tên đăng nhập không tồn tại.');
            return null;
          }

          const user = snapshot.val();

          if (!user || user.password !== password) {
            alert('Mật khẩu không chính xác.');
            return null;
          }

          // Lưu session
          localStorage.setItem('currentUser', JSON.stringify({
            username: username,
            displayName: user.displayName || username,
            role: user.role || ''
          }));

          alert(`Đăng nhập thành công! Chào mừng ${user.displayName || username}.`);
          redirectToRolePage(user.role);
          return null;
        })
        .catch((err) => {
          console.error(err);
          alert('Lỗi đăng nhập (Firebase). Mở Console để xem chi tiết.');
        });
    });
  });
})();

