/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const strs = s.split('')

  let cycle = (numRows - 1) * 2 // 周期长度
  if(cycle === 0) {
    return s
  }

  // 初始化每一行的数组
  let rows = []

  for (let index = 0; index < strs.length; index++) {
    const str = strs[index];
    let line = index % cycle
    if(line >= numRows) line = cycle - line
    rows[line] = (rows[line] || '') + str
  }

  let result = ''
  for (let index = 0; index < numRows; index++) {
    result = result + (rows[index] || '')
  }

  return result
};

console.log(convert('ABCDEFG', 3))