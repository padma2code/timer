

  
    
  

let finArr = []

if (process.argv.slice(2) === '')
{
    return
}
else
{
    
    for (let j = 2; j < process.argv.length; j++) {
    
    if((isNaN(process.argv[j] !== true ) ) || (process.argv[j] > 0))
    {
    finArr.push(process.argv[j])
    finArr.sort((a, b) => a - b);
    }
  
}

}
console.log(finArr)

for (let i = 0; i < finArr.length; i++) 
{
setTimeout(()=>{process.stdout.write('\x07');},(finArr[i])*1000); 
}