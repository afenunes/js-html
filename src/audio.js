import tag from './internal/tag';

function audio(attributes, content = '') {
  return tag(attributes, content, 'audio');
}

export default audio;
