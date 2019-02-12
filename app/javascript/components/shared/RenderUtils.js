const parseDataNode = id => {
  const node = document.getElementById(id);
  return node && JSON.parse(node.getAttribute("value"));
};

module.exports = {
  parseDataNode
};
