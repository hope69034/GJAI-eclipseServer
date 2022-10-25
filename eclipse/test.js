
// let count = 0;

// for(let number=0; number<86400; number++) {

//   let second = number % 60;
//   let minute = Math.floor(number / 60) % 60;
//   let hour = Math.floor(number / 3600) % 24;

//   let digitalTime = `${hour}:${minute}`

//   if(digitalTime.indexOf('3') >=0) {
//     count+=1;
//   }
// }

// console.log(`count 개수는 ${count}개 입니다.`)



const array = [3, 98, 27, 51, 46];
let max = 0;
let maxIdx = 0;
for(let i in array) {
  if(array[i] > max) {
    max=array[i]
    maxIdx = i;
  }
}


console.log(max, maxIdx);

