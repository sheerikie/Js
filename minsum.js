function minsum(num,k){

     let min=[]; 
     let largest=Math.ceil(num[0]/2);
    
     for(let i=0;i<k;i++){
        let new_num=Math.ceil(num[i]/2);
           min.push(new_num)
           console.log('min',min);
     
        if(new_num>largest){
        min.push(new_num);
        new_num=num[i];
        }
        let answ=min.reduce((a,b)=>a+b,0);
      
        console.log('ans',answ);
        }
    }