$(document).ready(function(){
    // Want to append to the productsList. This is going to be the results.
    let $productsList = $("#productsList");

    // Event listener for user's brand input when the button is clicked and to stop prior to submission.
    $("#buttonID").on("click", function(e){
        e.preventDefault();

        // Encode URI with the user's search input value. create variable with set value to search type.
        let searchType = $("#searchType").val();
        let searchInput = $("#searchInput").val();
        let searchInputURI = encodeURI(searchInput);

        // Get API and attach brandInputURI at the end to retrieve data for a specific brand.
        //create api's url variable to reassign later. (when appending searchInputURI)
        let url = "";

        //if the search type value is what user selected, then reassign api's url to that specific one
        //and add the search input URI at the end of the value for new url.
        if (searchType === "brand") {
            url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${searchInputURI}`;
        } else if (searchType === "product_type") {
            url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${searchInputURI}`;
        }
        //////////////////******ADD MORE URLS LIKE WHATS ABOVE************* *////////////////////////
        
        //use $.get and attach url for search type with search input, and display data (console.log(data)).
        $.get(url, (data) => {
            console.log(data);
            // Call function for when the user clicks search button. display elements on each product. 
            displayProducts(data);
        });
    });

    // Function to call inside the event listener when click search button. displays each product with its elements
    function displayProducts(products) {
        // Clear the products that were already displayed
        $productsList.empty();

        // If input is unavailable, return "currently out of stock".
        if (products.length === 0) {
            $productsList.text("We are currently out of stock. Please try again later :(");
        // Otherwise, append each element to the products list.
        } else {
            products.forEach((product) => {
                let productContainer = $("<div></div>").addClass("productInfoCard");
                let productImage = $("<img></img>").attr("src", product.api_featured_image).css("width","150px").css("height","auto");
                let productRating = $("<img></img>").attr("src", "https://img.freepik.com/premium-vector/vector-black-isolated-five-stars-customer-feedback-concept_189959-1082.jpg?w=1800").attr("id","productRating");
                let productBrand = $("<div></div>").text(product.brand);
                let productCategory = $("<div></div>").text(product.category);
                let productName = $("<div></div>").text(product.name);
                let productPrice = $("<div></div>").text("$" + product.price);
                let productType = $("<div></div>").text(product.product_type);
                productContainer.append(productImage);
                productContainer.append(productRating);
                productContainer.append(productBrand);
                productContainer.append(productCategory);
                productContainer.append(productName);
                productContainer.append(productType);
                productContainer.append(productPrice);
                $productsList.append(productContainer);
            });
        }
    }
});


//attr("src", "https://img.freepik.com/premium-vector/vector-black-isolated-five-stars-customer-feedback-concept_189959-1082.jpg?w=1800").css("width","50").css("height","auto");