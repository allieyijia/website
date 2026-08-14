(function () {
  var page = location.pathname.split('/').pop() || 'index.html';
  var workPages = ['ux.html', 'ups.html', 'beacon.html', 'pawfect.html', 'savor.html', 'abg.html', 'abg-research.html', 'abg-artet.html'];

  function link(href, label, active) {
    return '<a href="' + href + '"' + (active ? ' class="active"' : '') + '>' + label + '</a>';
  }

  document.write(
    '<nav class="nav">' +
      '<a href="index.html" class="nav-logo">Allie He ✦</a>' +
      '<div class="nav-links">' +
        link('ux.html', 'Work', workPages.indexOf(page) !== -1) +
        link('graphics.html', 'Graphics', page === 'graphics.html') +
        link('about.html', 'About', page === 'about.html') +
        link('contact.html', 'Resume & Contact', page === 'contact.html') +
      '</div>' +
    '</nav>'
  );
})();
