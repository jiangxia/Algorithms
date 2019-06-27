// 冒泡排序
const bubbleSort = arr => {
  if (arr.length <= 1) return arr;
  let lastExchangeIndex = 0;
  let sortBorder = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let hasChange = false;

    for (let j = 0; j < sortBorder; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        hasChange = true;
        lastExchangeIndex = j;
      }
    }
    sortBorder = lastExchangeIndex;
    if (!hasChange) break;
  }
  return arr;
};

const testArr = [];
let i = 0;
while (i < 100) {
  testArr.push (Math.floor (Math.random () * 1000));
  i++;
}

const res = bubbleSort (testArr);
console.log (res);
