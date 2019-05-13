import tag from './internal/tag';

function bdo(attributes, content = '') {
  return tag(attributes, content, 'bdo');
}

export default bdo;
