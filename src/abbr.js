import tag from './internal/tag';

function abbr(attributes, content = '') {
  return tag(attributes, content, 'abbr');
}

export default abbr;
