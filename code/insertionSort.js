// 插入排序
const insertionSort = arr => {
  if (arr.length <= 1) return arr;
  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];
    let j = i - 1;
    // 若arr[i]前有大于arr[i]的值的话，向后移位，腾出空间，直到一个<=arr[i]的值
    for (j; j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = value;
  }
  return arr;
};

let arr = [1, 3, 4, 52, 4, 5, 2, 4, 52, 1, 2, 7, 5, 4];
arr = insertionSort (arr);
console.log (arr);
