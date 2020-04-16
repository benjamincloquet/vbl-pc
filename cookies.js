window.onload = function () {
  if (areCookiesAccepted() == false)
  {
    document.querySelector("#cookie-consent").style.display = "block";
  }
};

function setCookie(name, value) {
  document.cookie = name + "=" + value;
}

function getCookie(name) {
  return document.cookie.split(';').some((item) => item.trim().startsWith(name + "="));
}

function areCookiesAccepted() {
  var cookie = getCookie("cookieConsent");
  if (cookie != "") {
    return true;
  }
  return false;
}

function acceptCookies() {
  setCookie("cookieConsent", "true");
  document.querySelector("#cookie-consent").style.display = "none";
}
