function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-es]').forEach(el => {
    el.textContent = lang === 'es' ? el.getAttribute('data-es') : el.getAttribute('data-en');
  });
}
// Idioma predeterminado
setLang('es');