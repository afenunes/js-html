import tag from './internal/tag';

function blockquote(attributes, content = '') {
  return tag(attributes, content, 'blockquote');
}

export default blockquote;
