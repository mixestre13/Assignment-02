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
  
  //map()
  const myMap = (arr, cb) => {
    let newArr = [];
    let value;
    for(let i = 0; i < arr.length; i++) {
      value = cb(arr[i]);
      newArr.push(value);
    }
    return newArr;
  }
  const addTwo = (n) => { return n + 2; }
  const myNum1 = [1,2,3,4,5];
  myMap(myNum1, addTwo);
  //output: 3,4,5,6,7
  
  //fitler()
  const myFilter = (arr, cb) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
      if(cb(arr[i]) == true) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  } 
  const fitlerEven = (n) => {return n % 2 == 0;}
  const myNum2 = [1,2,3,4,5,6];
  myFilter(myNum2, fitlerEven);
  //output: 2,4,6
  
  //some()
  const mySome = (arr, cb) => {
    for(let i = 0; i < arr.length; i++) {
      if(cb(arr[i])) {
        return true;
      }
    }
    return false;
  }
  const isEven = (n) => {return n % 2 === 0;}
  const myNum3 = [1,3,5,7];
  mySome(myNum3, isEven);
  //output: false
  
  //every()
  const myEvery = (arr, cb) => {
    for(let i = 0; i < arr.length; i++) {
      if(!cb(arr[i])) {
        return false;
      }
    }
    return true;
  }
  const isOdd = (n) => {return !(n % 2 === 0);}
  const myNum4 = [1,5,2,3];
  myEvery(myNum4, isOdd);
  //output: false
  
  //reduce()
  const myReduce = (arr, cb) => {
    let acc = 0;
    for(let i = 0; i < arr.length; i++) {
      acc = cb(acc, arr[i])
    }
    return acc;
  }
  const acc = (a, b) => {return a + b;}
  const myNum5 = [10,20,30,40];
  myReduce(myNum5, acc);
  //output: 100
  
  //include()
  const myInclude = (arr, target) => {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] == target) {
        return true;
      }
    }
    return false;
  }
  const myNum6 = [1,2,3,4,5,6,7];
  myInclude(myNum6, 4);
  //output: true
  
  //indexOf()
  const myIndexOf = (arr, target) => {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] == target) {
        return i;
      }
    }
    return -1;
  }
  const myNum7 = [3,7,4,2,8];
  myIndexOf(myNum7, 8);
  //output: 4
  
  //push()
  const myPush = (arr, entry) => {
    let newSize = arr.length;
    arr[newSize] = entry; 
    return arr;
  }
  const myNum8 = [1,5,8,3,4,8];
  myPush(myNum8, 7);
  //output: 1,5,8,3,4,8,7
  
  //lastIndexOf()
  const myLastIndexOf = (arr, target) => {
    let found = false;
    let cur;
    let i;
    for(i = 0; i < arr.length; i++) {
      if(arr[i] == target) {
        cur = i;
        bool = found;
      }
    }
    if(!found) {
      return -1;
    }
    return cur;
  }
  const myNum9 = [1,4,6,3,7,6,2,6]
  myLastIndexOf(myNum9, 6);
  //output: 6
  
  //Object.keys()
  const myObj = {a: 1, b: 2, c: 3};
  const grabKeys = (obj) => {
    const arr = [];
      for(const key in obj) {
        arr.push(key);
      }
    return arr;
  }
  grabKeys(myObj);
  //output: 'a', 'b', 'c'
  
  //Object.values()
  const myObj1 = {a: 1, b: 2, c: 3};
  const grabValues = (obj) => {
    const arr = [];
    for(const values in obj) {
      var value = obj[values];
      arr.push(value);
    }
    return arr;
  }
  grabValues(myObj1);
  //output: 1,2,3
  
  //misc q1 sum range
  const range = (start, end) => {
    let arr = [];
    for(let i = 0; i < end; i++) {
      arr.push(start++);
    }
    return arr;
  }
  let arr5 = range(1,10);
  
  const sum = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  let sum1 = sum(arr5);
  console.log(sum1);
  //output: 55
  
  //misc q2 reversing an array
  const reverse = (arr) => {
    let newArr = [];
    let j = arr.length - 1;
    for(let i = 0; i < arr.length; i++) {
      newArr[i] = arr[j];
      j--;
    }
    return newArr;
  }
  let arr7 = [1,2,3,4,5,6];
  reverse(arr7);
  //output: 6,5,4,3,2,1
  
  const reverse1 = (arr) => {
    let temp = [];
    let j = arr.length - 1;
    for(let i = 0; i < arr.length; i++) {
      temp.push(arr[i]);
    }
    for(let i = 0; i < arr.length; i++) {
      arr[i] = temp[j]
      j--;
    }
    return arr;
  }
  let arr8 = [1,2,3,4,5,6];
  reverse1(arr8);
  //output: 6,5,4,3,2,1
  
  //misc 3 A List
  const arrayToList = (arr) => {
    var list = null;
  
    for( i = arr.length-1; i >= 0; i-- )
      list = { value: arr[i], rest: list };
  
    return list;
  }
  
  const listToArray = (list) => {
    let arr = [];
  
    for( var node = list; node; node = node.rest )
      arr.push(node.value);
  
    return arr;
  }
  
  const prepend = (value, rest) => {
    return {value: value, rest: rest};
  }
  
  const nth = (list, n) => {
    if(n === 0) {
      return list.value
    }
    else {
      return nth(list.rest, n - 1);
    }
  }
  //output:
  console.log(arrayToList([10, 20]));
  //{value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // 20
  
  //misc 4 deep comparison
  const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) {
      return true;
    }
    else if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)) {
      if (Object.keys(obj1).length != Object.keys(obj2).length)
        return false;
  
      for (var prop in obj1) {
        if (obj2.hasOwnProperty(prop))
        {  
          if (!deepEqual(obj1[prop], obj2[prop]))
            return false;
        }
        else
          return false;
      }
      return true;
    }
    else 
      return false;
  }
  //output:
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true
  
  //misc 5 move zeroes
  const moveZero = (arr) => {
    let temp = [];
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] == 0) {
        temp.push(arr[i]);
      }
    }
    var i = 0;
      while (i < arr.length) {
          if(arr[i] === 0) {
              arr.splice(i, 1);
          } else {
              ++i;
          }
      }
      for(let i = 0; i < temp.length; i++) {
        arr.push(temp[i]);
      }
      return arr;
  }
  let arr = [0,1,0,3,12,0,6,8,0];
  arr = moveZero(arr);
  console.log(arr);
  //output: 1,3,12,6,8,0,0,0,0