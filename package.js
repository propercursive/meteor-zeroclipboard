Package.describe({
  name: 'propercursive:zeroclipboard',
  version: '0.0.1',
  summary: 'ZeroClipboard provides an easy way to copy text to the clipboard using Adobe Flash and JavaScript.',
  git: 'https://github.com/propercursive/meteor-zeroclipboard',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles([
    './zeroclipboard/dist/ZeroClipboard.js',
    'export.js'
  ],['web.browser']);
  api.addFiles(
    ['./zeroclipboard/dist/ZeroClipboard.swf'],
    'web.browser', {isAsset: true});
  api.export('ZeroClipboard', 'web.browser');
});

Package.onTest(function(api) {
  api.use(['tinytest'],['web.browser']);
  api.use('propercursive:zeroclipboard');
  api.addFiles(['tests.js'],['web.browser']);
});