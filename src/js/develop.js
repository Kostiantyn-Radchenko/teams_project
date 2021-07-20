(() => {
  const refs = {
    openDevBtns: document.querySelectorAll('[data-dev-open]'),
    closeDevBtn: document.querySelector('[data-dev-close]'),
    dev: document.querySelector('[data-dev]'),
  };

  refs.openDevBtns.forEach(btn => {
    btn.addEventListener('click', toggleDev);
  });
  refs.closeDevBtn.addEventListener('click', toggleDev);
  window.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      toggleDev();
    }
  });

  function toggleDev() {

    refs.dev.classList.toggle('backdrop--is-hidden');

  }
})();
