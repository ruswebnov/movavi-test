document.addEventListener('DOMContentLoaded', function() {

  let modal = document.querySelector('.modal');
  let closeModal = document.querySelector('.modal__continue');
  let shopping = document.querySelector('.header__shopping');
  let overlay = document.querySelector('.overlay');
  
  shopping.addEventListener('click', function() {
    modal.style.right = '0';
    overlay.classList.add('active');
  });

  closeModal.addEventListener('click', function() {
    modal.style.right = '-100%';
    overlay.classList.remove('active');
  });
  
});

