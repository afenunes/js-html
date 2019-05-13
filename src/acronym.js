function acronym(title, content = '') {
  if (title) {
    return `<acronym title="${title}">${content}</acronym>`;
  }
  return `<acronym>${content}</acronym>`;
}
