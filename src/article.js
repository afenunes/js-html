import tag from './internal/tag';

function article(attributes, content = '') {
  return tag(attributes, content, 'article');
}

export default article;
