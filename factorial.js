function processData(input) {

if(input==0 || input == 1){
   console.log('1');
    
}
else{
   let newC=[];
   
   while(input>0){
     let answ=input --;
     newC.push(answ);
   }
    let answer=newC.filter(a=>a>0).reduce((a,b)=> a*b);
    console.log(answer);
}
processData(3)