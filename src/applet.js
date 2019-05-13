import tag from './internal/tag';

function applet(attributes, content = '') {
  return tag(attributes, content, 'applet');
}

export default applet;
