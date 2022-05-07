// 例如：[-10,21,0,-7,35,7,9,23,18] 输出数组中 大于 0 的 最小项的索引

const arr = [-10, -21, 0, -7, 35, 7, 9, 23, 18];

let min = arr[0];
let idx = 0;

let item;
const { length } = arr;

for (let index = 1; index < length; index += 1) {
  item = arr[index];
  if (min <= 0 || (item > 0 && min > item)) {
    min = item;
    idx = index;
  }
}

console.log('idx: ', idx);
