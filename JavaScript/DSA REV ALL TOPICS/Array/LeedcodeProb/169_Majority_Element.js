let nums = [2,2,1,1,1,2,2];

let can = null;
let count = 0;

// Boyer–Moore Voting Algorithm it is 

nums.forEach((e,i)=>{
    if(count===0){
        can = e;
    }
    if(e===can){
        count++;
    }else{
        count--;
    }
})

console.log(can);
