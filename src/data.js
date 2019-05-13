import tag from './internal/tag';

function data(attributes, content = '') {
  return tag(attributes, content, 'data');
}

export default data;
