function getDateNow() {
  return new Date();
}

function getCurrentYear() {
  return getDateNow().getFullYear();
}

function getMyBirth() {
  return new Date(1990, 3, 19, 8, 30, 00);
}

function setMyAge() {
  var ageDifMs = getDateNow() - getMyBirth().getTime();
  var ageDate = new Date(ageDifMs);

  var myAge = Math.abs(ageDate.getUTCFullYear() - 1970);

  var ageElement = document.getElementById('age');
  ageElement.appendChild(document.createTextNode(myAge));
}
setMyAge();

function setCurrentYearFooter() {
  var yearElement = document.getElementById('footer-year');
  yearElement.appendChild(document.createTextNode(getCurrentYear()));
}
setCurrentYearFooter();
