const {
  author: PKG_AUTHOR,
  name: PKG_NAME,
  version: PKG_VERSION
} = require('../package.json');

const LISTENING_PORT = 32401;
const MEDIA_EVENTS = [
  'media.play',
  'media.resume',
  'media.pause',
  'media.stop',
  'media.scrobble'
  ];

module.exports = {
  LISTENING_PORT,
  PKG_AUTHOR,
  PKG_NAME,
  PKG_VERSION,
  MEDIA_EVENTS
};
