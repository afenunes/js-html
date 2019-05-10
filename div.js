function div(options, content = '') {
  if (options) {
    let result = '<div ';
    Object.entries(options).forEach(([key, value]) => {
      result += `${key}="${value}"`;
      console.log(`${key}="${value}"`);
    });
    return `${result}>${content}</div>`;
  }
  return `<div>${content}</div>`;
}
