import tag from './internal/tag';

function bdi(attributes, content = '') {
  return tag(attributes, content, 'bdi');
}

export default bdi;
