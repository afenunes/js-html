import tag from './internal/tag';

function details(attributes, content = '') {
  return tag(attributes, content, 'details');
}

export default details;
