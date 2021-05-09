// Check Valid by website
// https://codebeautify.org/jsonviewer

// {"friends":[{"name":"Abdul Halim","age":23},{"name":"HS Shanto","age":24}]}


const data = require("./friends_data.json");

// Access
// console.log(data.friends[1]);
// console.log(data.friends[1].name);

//Modify
// data.friends[0].name = "Halim";
// console.log(data.friends[0].name);

//Delete
// delete data.friends[0].name;
// console.log(data.friends[0]);


//Access for easy by website
// https://jsonpathfinder.com/


// const data = require("./students_data.json");
// console.log(data.students[1].language[0]);


// for(x in data){
//    // console.log(x);
//     console.log(data[x]);
    
// }


// JS to JSON
// const data2 = {
//     name : "Halim",
//     age : 23,
// };
// console.log(JSON.stringify(data2));


//JSON to JS
console.log(JSON.parse('{"name" : "Halim"}'));



//json schema
// json data to schema converter website - https://www.liquid-technologies.com/o...​
// json schema validator - https://www.jsonschemavalidator.net/