let array = [6,3,8,5,1,7,4,9,10];

for (let lastindex = array.length-1 ; lastindex>0 ; lastindex--){
    
    for(let currentindex = 0 ; currentindex<lastindex ; currentindex++){
        
        if(array[currentindex]>array[currentindex+1]){
            
            var temp = array[currentindex];
            array[currentindex] = array[currentindex+1];
            array[currentindex+1] = temp;
        }
    }
}
    
    for(let i = 0 ; i < array.length ; i++){
        
        console.log(array);
    }
      for(var i = 0 ; i < array.length ; i++){
        
        var b = array[i];
        var c = array[i+1];
        
        if(b+1 != c){
            
            console.log(b+1);
            break;
            
        }
    }