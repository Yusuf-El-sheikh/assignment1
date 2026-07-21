//Name : Yusuf Ahmed Abd-Al-Sataar El-Sheikh
//Email : yusuf.elsheikh01@gmail.com

//Assignment #1

//part #1

// problem - 1

function p1() {
  let s = "123";

  s = Number(s) + 7;

  return s;
}

//console.log(p1());

// problem - 2

function p2(value) {
  return value || "invalid";
}

/* test cases :D
console.log(p2(0));
console.log(p2(-0));
console.log(p2(""));
console.log(p2(null));
console.log(p2(undefined));

console.log(p2(100));
*/

// problem - 3

function p3() {
  let result = [];

  for (let i = 0; i < 11; i++) {
    if (i % 2 == 0) {
      continue;
    }
    result.push(i);
  }

  return result;
}

//console.log(p3()); // [1, 3, 5, 7, 9]

// problem - 4

function p4() {
  let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];

  arr = arr.filter(function(num) { return num % 2 == 0 });

  return arr;
}

//console.log(p4());

// problem - 5

function p5() {
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];

  let arr3 = [...arr1, ...arr2];

  return arr3;
}

//console.log(p5());

// problem - 6

function p6(value) {
  switch
  (value) {
    case 1:
      {
        return "sunday";
      }

    case 2:
      {
        return "monday";
      }

    case 3:
      {
        return "tuesday";
      }

    case 4:
      {
        return "wednesday";
      }

    case 5:
      {
        return "thursday";
      }

    case 6:
      {
        return "friday";
      }

    case 7:
      {
        return "saturday";
      }
  }
}

/* test cases again :D
console.log(p6(1));
console.log(p6(2));
console.log(p6(3));
console.log(p6(4));
console.log(p6(5));
console.log(p6(6));
console.log(p6(7));
*/

// problem - 7

function p7()
{
  let arr = ["a", "ab", "abc", "abcdefg"]
  
  let len_arr = arr.map(function len(str) {return str.length ;});
  
  return len_arr;
}

//console.log(p7());

// problem - 8

function p8(value)
{
  if( (value % 3 == 0) && (value % 5 == 0) )
  {
    return "divisible by both";
  }

  return "not divisible by both";
}

/* test cases :D
console.log(p8(3));
console.log(p8(5));
console.log(p8(30));
console.log(p8(31));
*/

// problem - 9

const p9 = (val) => {return  val * val;};

//console.log(p9(2));

// problem - 10

let person = {
  name : "john",
  age : "30"
};

function p10(obj)
{
  return obj.name + " is " + obj.age + " years old";
}

//console.log(p10(person));

// problem - 11

function p11(...values)
{
  let sum = 0;

  for(let value of values)
  {
    sum += value;
  }

  return sum;
}

//console.log(p11(1,2,3,4,5));

// problem - 12

function p12()
{
  return new Promise((resolve) => {
    setTimeout(() =>   
    {
      resolve("success");
    },3000);
  });
}

//p12().then((message) => {console.log(message);}) // i did NOT like this part (promises syntax wise)

// problem - 13

function p13(arr)
{
  let max = arr[0];

  for(let i = 0 ; i < arr.length ; i++)
  {
    if(arr[i] > max)
      {
        max = arr[i] ;
      }
  }

  return max;
}

//console.log(p13());

// problem - 14

function p14(obj)
{
  let arr = [];

  for(let key in obj)
  {
    arr.push(key)
  }

  return arr;
}

//console.log(p14({name: "John", age: 30}));

// problem - 15

function p15(string)
{
  let arr = string.split(" ");

  return arr;
}

function anotherSol(string)
{
  let temp = "";
  let arr = [];
  
  for(let i = 0 ; i < string.length ; i++)
  {
    if(string[i] != " ")
    {
      temp += string[i];
    }

    else
    {
      arr.push(temp);
      temp = "";
    }
  }

  arr.push(temp);

  return arr;
}
//console.log(p15("The quick brown fox"));
//console.log(anotherSol("The quick brown fox"));