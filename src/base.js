import tag from './internal/tag';

function base(attributes, content = '') {
  return tag(attributes, content, 'base');
}

export default base;
