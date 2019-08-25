const lastModified = arr =>
  arr.reduce((accum, node) => {
    const value = node.node.data.LastModified;
    if (value < accum) {
      return accum;
    } else {
      return value;
    }
  }, arr[0].node.data.LastModified);

module.exports = lastModified;
