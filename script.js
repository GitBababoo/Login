const showPasswordIcon = document.getElementById('show-password');
const passwordInput = document.getElementById('password');
const errorMessage = document.querySelector('.error-message'); // เลือก error message

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

const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // ทำการ validate ข้อมูล
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username.trim() === '' || password.trim() === '') {
    // แสดง error message ใน input fields
    document.getElementById('username').classList.add('error');
    document.getElementById('password').classList.add('error');
    errorMessage.textContent = 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน'; // แสดง error message
    errorMessage.style.display = 'block'; // แสดง error message
    return;
  }

  // แสดง loading animation
  const btn = event.target.querySelector('.btn');
  btn.disabled = true;
  btn.textContent = 'กำลังดำเนินการ...';
  btn.classList.add('loading');

  // หลังจากดำเนินการเสร็จแล้ว (ส่งข้อมูลไปยัง server)
  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = 'เข้าสู่ระบบ';
    btn.classList.remove('loading');

    // แสดงผลลัพธ์จาก server
    if (// ตรวจสอบผลลัพธ์) {
      alert('ล็อกอินสำเร็จ');
      // redirect ไปยังหน้าหลัก
    } else {
      // แสดง error message
      errorMessage.textContent = 'ล็อกอินล้มเหลว';
      errorMessage.style.display = 'block';
    }
  }, 2000);

});