import tag from './internal/tag';

function dd(attributes, content = '') {
  return tag(attributes, content, 'dd');
}

export default dd;
