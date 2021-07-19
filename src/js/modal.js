// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('backdrop--is-hidden');
//   }
// })();


//////////////////////////////////////
;(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  }

  refs.openModalBtns.forEach((btn) => {
    btn.addEventListener('click', toggleModal)
  })
  refs.closeModalBtn.addEventListener('click', toggleModal)
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      toggleModal()
    }
  })

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden')
  }
})()