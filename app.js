function loadRevisionme(url, callback) {
  var s = document.createElement('script');
  s.src = url;
  s.async = 'async';
  s.onreadystatechange = callback;
  s.onload = callback;
  document.head.appendChild(s);
}

loadRevisionme('https://revisionme.pages.dev/revisionme.js', function () {
  var event = new Event('rmLoaded');
  document.dispatchEvent(event);
});
