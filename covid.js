const request = require('request')
   
// Request URL
var url = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all';
  
request(url, (error, response, body)=>{
     
    // Printing the error if occurred
    if(error) console.log(error)
    
    // Printing status code
    console.log(response.statusCode);
    console.log("ติดเชื้อใหม่วันนี้ :  " +user.new_case);
      
    // Printing body
    console.log(body);
}); 
