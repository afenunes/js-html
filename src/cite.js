import tag from './internal/tag';

function cite(attributes, content = '') {
  return tag(attributes, content, 'cite');
}

export default cite;
