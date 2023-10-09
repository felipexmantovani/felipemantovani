function getDateNow() {
  return new Date();
}

function getCurrentYear() {
  return getDateNow().getFullYear();
}

function setCurrentYearFooter() {
  var yearElement = document.getElementById('footer-year');
  yearElement.appendChild(document.createTextNode(getCurrentYear()));
}
setCurrentYearFooter();
