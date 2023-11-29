//want to append to the productsList. This is going to be the results.
//event listener for brand form submit and to stop prior to submission.
$("#brandForm").submit(function(e){
    e.preventDefault()
})
//create brandName with value of user's input (brandInput).
let brandName = $("#brandInput").val();
$.get("http://makeup-api.herokuapp.com/api/v1/products.json", {brand: brandName }, (data) => {
    console.log(data);
});