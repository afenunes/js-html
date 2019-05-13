module.exports = {
  div(options, content = '') {
    if (options) {
      let result = '<div ';
      Object.entries(options).forEach(([key, value]) => {
        result += `${key}="${value}"`;
      });
      return `${result}>${content}</div>`;
    }
    return `<div>${content}</div>`;
  },
};
