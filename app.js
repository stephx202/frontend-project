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
        //if input brand  is unavailable, return a text
        if(products.length===0){
            $productsList.text("We are currently out of stock. Please try again later :(")
        //otherwise, append to the products list. attach
        }else{
            products.forEach((product) =>{
                let $productContainer = $("<div></div>").addClass("productInfo")
                let $productImage = $("<img></img>").attr("src", product.api_featured_image);
                let $productBrand = $("<div></div>").text(product.brand)
                let $productCategory = $("<div></div>").text(product.category);
                let $productName = $("<div></div>").text(product.name);
                let $productPrice = $("<div></div>").text("$" + product.price);
                let $productType = $("<div></div>").text(product.product_type)
                $productContainer.append($productBrand);
                $productContainer.append($productCategory);
                $productContainer.append($productName);
                $productContainer.append($productPrice);
                $productContainer.append($productType);
                $productContainer.append($productImage)
                $productsList.append($productContainer)
                
            });
        }
    }







//last bracket
});

