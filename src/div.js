import tag from './internal/tag';

function div(attributes, content = '') {
  return tag(attributes, content, 'div');
}

export default div;
