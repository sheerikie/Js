function migratoryBirds(arr) {

    var o = {}, mC = 0, mV, m;
       for (var i=0, iL=arr.length; i<iL; i++) {
           m = arr[i];
           o.hasOwnProperty(m)? ++o[m] : o[m] = 1;
           if (o[m] > mC) mC = o[m], mV = m;
       }
       return mV;
   }
   migratoryBirds([1, 4, 4, 4, 5, 3])

   function migratoryBirds(arr) {
   var mf = 1;
    var m = 0;
    var item;
    for (var i=0; i<arr.length; i++)
    {
            for (var j=i; j<arr.length; j++)
            {
                    if (arr[i] == arr[j])
                    m++;
                    if (mf<m)
                    {
                    mf=m; 
                    item = arr[i];
                    }
            }
            m=0;
    }
    console.log(item+" ( " +mf +" times ) ") ;
   }
migratoryBirds([1, 4, 4, 4, 5, 3])
