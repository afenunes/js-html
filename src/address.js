import tag from './internal/tag';

function address(attributes, content = '') {
  return tag(attributes, content, 'address');
}

export default address;
