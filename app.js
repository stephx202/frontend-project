$(document).ready(function(){




//want to append to the productsList. This is going to be the results.
//event listener for brand form submit and to stop prior to submission.
// $("#brandForm").on("submit",function(e){
//     e.preventDefault()
//     let brandInput = $("#brandInput").val();
//     let brandInputURI = encodeURI(brandInput);
// })
// //create brandName with value of user's input (brandInput).
// $.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline", (data) => {
// console.log(data);
// });
//debugger;
const button= $("#buttonID")
button.on("click",function(e){
    console.log("hit")
     e.preventDefault()
//     let brandInput = $("#brandInput").val();
//     let brandInputURI = encodeURI(brandInput);
//     //debugger;
//     $.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandInputURI}`,(data) => {
// console.log(data);
// })
// //create brandName with value of user's input (brandInput).
 });
})

