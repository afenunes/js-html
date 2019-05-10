function ul(content) {
  const items = content.map(item => `<li>${item}</li>`).join('');
  return `<ul>${items}</ul>`;
}
