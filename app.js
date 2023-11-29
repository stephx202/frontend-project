$(document).ready(function(){
    //want to append to the productsList. This is going to be the results.
    let $productsList = $("#productsList");

    //event listener for user's brand input when button clicked and to stop prior to submission.
    $("#buttonID").on("click",function(e){
        e.preventDefault()
        //encodeURI
        let brandInput = $("#brandInput").val();
        let brandInputURI = encodeURI(brandInput);
        //get API and attach brandInputURI at the end to retrieve data for specific brand.
        $.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandInputURI}`,(data) => {
            console.log(data);
            //call function for when user searches another brand
            displayBrandProducts(data)

        })
    });
    //function to call inside the brandform event listener when called
    function displayBrandProducts(products){
        //clear the products that were already displayed
        $productsList.empty();
        //if brand's products is unavailable, return a text
        if(products.length===0){
            $productsList.text("We are currently out of stock for this brand. Please try again later :(")
        //otherwise, append to the products list
        }else{
            products.forEach((product) =>{
                
            })
        }
    }







//last bracket
});

