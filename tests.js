Tinytest.add('Instantiation', function(test) {
  test.isNotUndefined(ZeroClipboard);
});

Tinytest.add('Basic API', function(test) {
  test.isNotUndefined(ZeroClipboard.activate);
  test.isNotUndefined(ZeroClipboard.create);
  test.isNotUndefined(ZeroClipboard.config);
  test.isNotUndefined(ZeroClipboard.isFlashUnusable);
  test.isNotUndefined(ZeroClipboard.setData);
  test.isNotUndefined(ZeroClipboard.clearData);
  test.isNotUndefined(ZeroClipboard.on);
  test.isNotUndefined(ZeroClipboard.off);
  test.isNotUndefined(ZeroClipboard.destroy);
});