import tag from './internal/tag';

function body(attributes, content = '') {
  return tag(attributes, content, 'body');
}

export default body;
