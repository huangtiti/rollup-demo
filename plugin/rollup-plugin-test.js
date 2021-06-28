module.exports = function testFunc () {
  return {
    name: 'rollup-plugin-testFunc',
    renderChunk(code) {
      const reg = /Learn React/;
      const transformCode = code.replace(reg, "rollup-plugin-testFunc");
      return transformCode;
    }
  };
}