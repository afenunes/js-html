import tag from './internal/tag';

function code(attributes, content = '') {
  return tag(attributes, content, 'code');
}

export default code;
