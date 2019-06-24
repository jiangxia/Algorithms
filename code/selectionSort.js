const selectionSort = arr => {
  if (arr.length <= 1) return arr;
  // 需要注意这里的边界, 因为需要在内层进行 i+1后的循环，所以外层需要 数组长度-1
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // 找到整个数组的最小值
      }
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};

let arr = [1, 3, 4, 52, 4, 5, 2, 4, 52, 1, 2, 7, 5, 4];
arr = selectionSort (arr);
console.log (arr);
