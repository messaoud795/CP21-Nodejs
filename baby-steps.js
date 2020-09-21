var numbers=process.argv.splice(2,process.argv.length-2).map(number=>Number(number));
console.log(numbers.reduce((accumulator,currentvalue)=>accumulator+(currentvalue)));
      

