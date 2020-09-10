//also called carried funtions

function trippleAdd(num1){
return function(num2){
    return function(num3){
        return num1+num2+num3
    }
}
}
trippleAdd(10)(20)(30);



function quadrupleAdd(nu1){
  return  function(nu2,nu3){
    return    function(nu4){
        return nu1+nu2+nu3+nu4;
}
    }
}
quadrupleAdd(5)(30,17)(8);