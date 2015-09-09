ZeroClipboard = this.ZeroClipboard;

try {
  delete this.ZeroClipboard;
}
  catch (e) {
}

ZeroClipboard.config( { swfPath: '/packages/propercursive_zeroclipboard/zeroclipboard/dist/ZeroClipboard.swf' } );