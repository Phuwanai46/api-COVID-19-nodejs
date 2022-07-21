const request = require('request')
   
// Request URL
var url = 'https://lnwcodeapi.ml/latest';
  
request(url, (error, response, body)=>{
     
    // Printing the error if occurred
    if(error) console.log(error)
    
    // Printing status code
    console.log(response.statusCode);
      
    // Printing body
    console.log(body);
}); 
