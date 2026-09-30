let nums =[1,2,3,1];
// let values = false;
// for (let i = 0; i < nums.length; i++) {
//     for (let j = i+1; j < nums.length; j++) {
//         if(nums[i]===nums[j]){
//             values = true;
//         }

//     }    
// }

// error for this code 

// for (let i = 0; i < nums.length-1; i++) {
//     let up = i+1
//     console.log(nums[i],nums[up])
//         if(nums[i]===nums[up]){
//             values = true;
//         }
// }

// nums.map(e=>{
//     if(nums.indexOf(e)===nums.lastIndexOf(e)){
//         values = true;
//     }
// })

// console.log(values);

let newvalues = new Set(nums).size !== nums.length;
console.log(newvalues)