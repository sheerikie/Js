function MeanMedianMode(array){
    this.array=array;
    
    }
    function mean(){
     let values=m.array;
     total=0;
     values.forEach(values=>{total+=values });
     return total/2;
    
    
    }
    function median(){
      let values=m.array;
      let sortedValues=values.sort((a,b)=>a-b);
      if(values.length%2==0){
        let index=values.length/2;
        return sortedValues[index];
      }else{
    let index=values.length/2 +1;
    return sortedValues[index];
      }
    
    }
    function mode(){
    let values=m.array;
    let modeObj={};
    let ans=[];
    let totalAppearance=0;
    values.forEach(values=>{
      if(!modeObj[values])  modeObj[values]=0;
      modeObj[values]++;
    });
    for(let values in  modeObj ){
      if(modeObj[values]>totalAppearance){
        ans.push(values);
        totalAppearance=modeObj[values];
      } 
    }
    
    let me=Math.max(...ans);
    console.log(me); 
    
    }
    

    ///perfect mode
    function getMode(array) {
        var modeObj = {};
        
        // create modeObj
        array.forEach(num => {
          if (!modeObj[num]) modeObj[num] = 0;
          modeObj[num]++;
        });
        
        // create array of mode/s 
        var maxFrequency = 0;
        var modes = [];
        for (var num in modeObj) {
          if (modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
          }
          else if (modeObj[num] === maxFrequency) modes.push(num);
        }
        // if every value appears same amount of times 
        if (modes.length === Object.keys(modeObj).length) modes = [];
        return modes;
      }

      
    let m=new MeanMedianMode([1,2,3,5,5,5,6,6,6,7,8,9,9,9,9,9]);
    mean();
    median();
    mode();
    
    
    
    