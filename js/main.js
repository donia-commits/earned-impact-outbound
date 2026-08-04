document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
  var rel = (link.getAttribute('rel') || '').split(/\s+/).filter(Boolean);
  ['noopener', 'noreferrer'].forEach(function (token) {
    if (!rel.includes(token)) rel.push(token);
  });
  link.setAttribute('rel', rel.join(' '));
});
