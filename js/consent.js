// Cookie consent + Google Analytics (G-W8B1B1RRV3)
// GA loads only after the visitor accepts; choice is remembered in localStorage.
(function () {
  var KEY = 'bw-cookie-consent';

  function loadGA() {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-W8B1B1RRV3';
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', 'G-W8B1B1RRV3');
  }

  var choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) {}

  if (choice === 'accepted') { loadGA(); return; }
  if (choice === 'declined') { return; }

  var banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie consent');
  banner.innerHTML =
    '<h4>This website uses cookies.</h4>' +
    '<p>We use cookies to analyze website traffic and optimize your website experience. ' +
    'By accepting our use of cookies, your data will be aggregated with all other user data.</p>' +
    '<div class="cookie-actions">' +
    '<button type="button" class="btn btn-light" data-consent="declined">Decline</button>' +
    '<button type="button" class="btn btn-dark" data-consent="accepted">Accept</button>' +
    '</div>';
  document.body.appendChild(banner);

  banner.addEventListener('click', function (e) {
    var v = e.target.getAttribute && e.target.getAttribute('data-consent');
    if (!v) return;
    try { localStorage.setItem(KEY, v); } catch (err) {}
    banner.remove();
    if (v === 'accepted') loadGA();
  });
})();
