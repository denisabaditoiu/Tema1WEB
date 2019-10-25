function distance(first, second){
	
	
	if(first!=null && second!=null){
var armixed = first.map(function (x, i) { 
                          return [x, second[i]] 
                      });
		
	}
	else{
		return 0;
	}
	
	
return first+second;

}


module.exports.distance = distance