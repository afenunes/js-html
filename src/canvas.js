import tag from './internal/tag';

function canvas(attributes, content = '') {
  return tag(attributes, content, 'canvas');
}

export default canvas;
