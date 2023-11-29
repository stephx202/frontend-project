//want to append to the productsList. This is going to be the results.
//event listener for brand form submit and to stop prior to submission.
$("#brandForm").on("submit",function(e){
    e.preventDefault()
})
//create brandName with value of user's input (brandInput).
let brandInput = $("#brandInput").val();
$.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline", (data) => {
console.log(data);
});
