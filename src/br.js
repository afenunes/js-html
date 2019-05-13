import tag from './internal/tag';

function br(attributes, content = '') {
  return tag(attributes, content, 'br');
}

export default br;
