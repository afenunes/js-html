function abbr(title, content = '') {
  if (title) {
    return `<abbr title="${title}">${content}</abbr>`;
  }
  return `<abbr>${content}</abbr>`;
}
