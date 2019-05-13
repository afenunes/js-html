function a(href, content = '') {
  if (href) {
    return `<a href="${href}">${content}</a>`;
  }
  return `<a>${content}</a>`;
}

export default a;
