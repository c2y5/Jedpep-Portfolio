function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.onload = function() {
  var tab = getParameterByName("t");
  if (!isNaN(tab)) {
    document.querySelector(`.outer-nav li:nth-child(${tab})`).click();
  }
};