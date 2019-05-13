import tag from './internal/tag';

function col(attributes, content = '') {
  return tag(attributes, content, 'col');
}

export default col;
