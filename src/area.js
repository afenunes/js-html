import tag from './internal/tag';

function area(attributes, content = '') {
  return tag(attributes, content, 'area');
}

export default area;
