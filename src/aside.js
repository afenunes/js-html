import tag from './internal/tag';

function aside(attributes, content = '') {
  return tag(attributes, content, 'aside');
}

export default aside;
