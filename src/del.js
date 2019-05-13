import tag from './internal/tag';

function del(attributes, content = '') {
  return tag(attributes, content, 'del');
}

export default del;
