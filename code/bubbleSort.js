// 冒泡排序
const bubbleSort = arr => {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    let hasChange = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        hasChange = true;
      }
    }
    if (!hasChange) break;
  }
  return arr;
};

let arr = [1, 3, 4, 52, 4, 5, 2, 4, 52, 1, 2, 7, 5, 4];
arr = bubbleSort (arr);
console.log (arr);
