/* This function is counting how many different duplicates are in an given array */ 


function duplicates(arr) {
    var countElements = []
    for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
        if (arr[i] === arr[j]){
         countElements.push(arr[i])
        }
      }
    } 
    return countElements.length
}

duplicates([1,2,3,4,1,5,6,7,8,2]);
