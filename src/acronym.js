import tag from './internal/tag';

function acronym(attributes, content = '') {
  return tag(attributes, content, 'acronym');
}

export default acronym;
