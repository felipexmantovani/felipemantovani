function isProd() {
  return window.location.href.startsWith('https://felipexmantovani.github.io');
}

const URL_APP = isProd() ? 'https://felipexmantovani.github.io/site' : 'http://127.0.0.1:8080';
const LANGUAGES = {
  'pt-BR': 'pt-BR',
  'en-US': 'en-US',
  it: 'it'
}
const NAVIGATOR_LANGUAGE = navigator.language;
const DEFAULT_LANGUAGE = LANGUAGES['en-US'];
const STORAGE_LANGUAGE = 'currentLanguage';

function initApp(language) {
  let languageCurrent = storageGetLanguage() ? storageGetLanguage() : language;
  if (window.location.pathname) {
    const STRING_REPLACE = isProd() ? '/site/' : '/';
    languageCurrent = window.location.pathname.replaceAll(STRING_REPLACE, '') || DEFAULT_LANGUAGE;
  }
  storageSetLanguage(languageCurrent);
  redirectToCurrentLanguage(languageCurrent);
  setActiveFlag(languageCurrent);
}

function storageSetLanguage(language) {
  sessionStorage.setItem(STORAGE_LANGUAGE, language);
}

function storageGetLanguage() {
  return sessionStorage.getItem(STORAGE_LANGUAGE);
}

function storageRemoveLanguage() {
  sessionStorage.removeItem(STORAGE_LANGUAGE);
}

function setActiveFlag(language) {
  const FLAG_ELEMENTS = document.getElementsByClassName('flag-item');
  for (const flag of FLAG_ELEMENTS) {
    if (flag.getAttribute('title') === language) {
      flag.classList.add('active');
    }
    flag.addEventListener('click', () => {
      storageSetLanguage(flag.getAttribute('title'));
    });
  }
}

function redirectToCurrentLanguage(language) {
  if (storageGetLanguage() || storageGetLanguage() === language) {
    return;
  }
  const HREF = language === DEFAULT_LANGUAGE ? URL_APP : `${URL_APP}/${language}`;
  window.location.href = HREF;
}

LANGUAGES[NAVIGATOR_LANGUAGE] ? initApp(NAVIGATOR_LANGUAGE) : initApp(DEFAULT_LANGUAGE);
