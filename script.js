// Show/Hide Password
const showPasswordIcon = document.getElementById('show-password');
const passwordInput = document.getElementById('password');

showPasswordIcon.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordIcon.classList.remove('fa-eye');
    showPasswordIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    showPasswordIcon.classList.remove('fa-eye-slash');
    showPasswordIcon.classList.add('fa-eye');
  }
});

// Form Submission (Login)
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // ป้องกันการส่งแบบฟอร์มปกติ

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // ตรวจสอบข้อมูลการเข้าสู่ระบบ (ตัวอย่าง)
  if (username === 'your_username' && password === 'your_password') {
    alert('เข้าสู่ระบบสำเร็จ!');
    // เปลี่ยนเส้นทางไปยังหน้าอื่น หรือทำสิ่งที่ต้องการ
  } else {
    alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
  }
});

// Signup Link
const signupLink = document.getElementById('signupLink');

signupLink.addEventListener('click', (event) => {
  event.preventDefault();

  // สร้างฟอร์มสมัครสมาชิก (ตัวอย่าง)
  loginForm.innerHTML = `
    <fieldset>
        <legend>สมัครสมาชิก</legend>
        <div class="input-group">
            <i class="fas fa-user"></i>
            <input type="text" id="newUsername" name="newUsername" placeholder="ชื่อผู้ใช้" required>
        </div>
        <div class="input-group">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" name="email" placeholder="อีเมล" required>
        </div>
        <div class="input-group">
            <i class="fas fa-lock"></i>
            <input type="password" id="newPassword" name="newPassword" placeholder="รหัสผ่าน" required>
        </div>
        <button type="submit" class="btn">สมัครสมาชิก</button>
    </fieldset>
    
    
  `;
});
