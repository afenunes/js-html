function tag(attributes, content = '', name) {
  if (attributes) {
    let result = `<${name} `;
    Object.entries(attributes).forEach(([key, value]) => {
      result += `${key}="${value}"`;
    });
    return `${result}>${content}</${name}>`;
  }
  return `<${name}>${content}</${name}>`;
}

export default tag;
