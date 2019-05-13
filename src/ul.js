import li from './internal/li';
import tag from './internal/tag';

function ulFromArray(attributes, items) {
  const content = items.map(item => li(item)).join('');
  if (attributes) {
    let result = '<ul';
    Object.entries(attributes).forEach(([key, value]) => {
      result += `${key}="${value}"`;
    });
    return `${result}>${content}</ul>`;
  }
  return `<ul>${content}</ul>`;
}


function ul(attributes, content = '') {
  return tag(attributes, content, 'ul');
}

export {
  ul,
  ulFromArray,
};
