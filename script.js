const form = document.getElementById('myForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const messPattern = /^.{10,}$/;
form.addEventListener('submit',(e) => {
    
    if(name.value === ""){
        alert("Vui lòng nhập họ và tên");
        e.preventDefault();
        name.focus();
    }
    else if(!emailPattern.test(email.value)){
        alert("Vui lòng nhập email hợp lệ");
        e.preventDefault();
        email.focus();
    }
    else if(!messPattern.test(message.value)){
        alert("Vui lòng nhập tin nhắn ít nhất 10 ký tự");
        e.preventDefault();
        message.focus();
    }
});

const target = document.querySelectorAll('.target');

target.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
        const row = e.target.closest('tr');

        if(e.target.checked){
            row.classList.add('completed');
        }
        else{
            row.classList.remove('completed');
        }
});
});



const avatar = document.querySelector('.avatar');

avatar.addEventListener('mouseover', () => {
  avatar.classList.add('hovered');
});

avatar.addEventListener('mouseout', () => {
  avatar.classList.remove('hovered');
});



const backToTop = document.getElementById('backToTop');

// Hiện nút khi cuộn quá 300px
const topBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
if (topBtn) topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
topBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

