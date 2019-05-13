import tag from './internal/tag';

function a(attributes, content = '') {
  return tag(attributes, content, 'a');
}

export default a;
