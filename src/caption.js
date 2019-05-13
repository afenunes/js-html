import tag from './internal/tag';

function caption(attributes, content = '') {
  return tag(attributes, content, 'caption');
}

export default caption;
