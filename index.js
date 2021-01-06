//forEach()
const myForEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
      cb(arr[i]);
    }
  }
  const addOne = (n) => { n + 1; }
  const myNum = [1,2,3,4,5];
  myForEach(myNum, addOne);
  //output: 2,3,4,5,6
  