import tag from './internal/tag';

function button(attributes, content = '') {
  return tag(attributes, content, 'button');
}

export default button;
