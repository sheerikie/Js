/**try each character is s1 and check if it resembles first index of s2 */
function twoStrings(s1, s2) {
	let shortStr;
	let longStr;
	
	if(s1.length < s2.length){
	  shortStr = s1;
	  longStr = s2;
	}else{
	  shortStr = s2;
	  longStr = s1;
	}
	
	for(let i = 0; i < shortStr.length; i++){
	  if(longStr.indexOf(shortStr[i]) !== -1){
		return "YES"
	  }
	}
	
	return "NO"
  }