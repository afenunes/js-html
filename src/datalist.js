import tag from './internal/tag';
import option from './internal/option';

function datalistFromArray(attributes, items) {
  const content = items.map(item => option(item)).join('');
  if (attributes) {
    let result = '<datalist';
    Object.entries(attributes).forEach(([key, value]) => {
      result += `${key}="${value}"`;
    });
    return `${result}>${content}</datalist>`;
  }
  return `<datalist>${content}</datalist>`;
}

function datalist(attributes, content = '') {
  return tag(attributes, content, 'datalist');
}

export {
  datalist,
  datalistFromArray,
};
