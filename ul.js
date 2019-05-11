import li from './internal/li';

function ul(options, items) {
  const content = items.map(item => li(item).join(''));
  if (options) {
    let result = '<ul ';
    Object.entries(options).forEach(([key, value]) => {
      result += `${key}="${value}"`;
    });
    return `${result}>${content}</ul>`;
  }
  return `<ul>${content}</ul>`;
}

export default ul;
