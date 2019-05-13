import tag from './internal/tag';

function colgroup(attributes, content = '') {
  return tag(attributes, content, 'colgroup');
}

export default colgroup;
