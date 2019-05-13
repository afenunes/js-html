import tag from './internal/tag';

function big(attributes, content = '') {
  return tag(attributes, content, 'big');
}

export default big;
