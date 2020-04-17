$(document).ready(function(){
    var instance = M.Dropdown.init($(".dropdown-trigger"), {hover:true, coverTrigger:false});
    // Put in the text for the option that the user chose from the dropdown menu
    $('#dropdown1').on('click', 'li', function(){
        $('.dropdown-trigger').text($(this).text());
    });

    //queryUrlGp = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    // key = "AIzaSyCGNI5n1Simc244_UioA4k7loLg2-V8Usc"
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.717472,-117.831146&radius=1500&keyword=vegan&type=restaurant&key=AIzaSyCGNI5n1Simc244_UioA4k7loLg2-V8Usc",
        method: "GET"
    }).then(function(response) {
        console.log("google"); 
        console.log(response);
        console.log("--------------");
    });

    var queryURL = "https://developers.zomato.com/api/v2.1/";
    var apiKey = "2431f14dc42d9b24e352507314c14c7c";

    $.ajax({
        url: queryURL + "categories",
        method: "GET",
        headers: { "user-key": apiKey },
    }).then(function (returned) {
        console.log("zomato category"); 
        console.log(returned);
        console.log("--------------");
    });

    $.ajax({
        url: queryURL + "reviews",
        method: "GET",
        headers: { "user-key": apiKey },
    }).then(function (data) {
        console.log("zomato review");
        console.log(data);
        console.log("--------------");
    });

    $("button").on("click", function() {
        event.preventDefault();
        
        // get the user input for search terms
        var userZipCode = $(".user-zip").val().trim();
        var userDiet = $(".dropdown-trigger").text();

        var restaurantInfo = $(this);
        $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.717472,-117.831146&radius=1500&keyword=vegan&type=restaurant&key=AIzaSyCGNI5n1Simc244_UioA4k7loLg2-V8Usc",
        method: "GET"
        }).then(function(response) {
            console.log(response);
            var results = response
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                var restaurantDiv = $("<div>");
                var p = $("<p>");
                p.text("Name: " + results[i].name);
                p.append("Rating: " + results[i].rating);
                // var restaurantImage = $("<img>");
                // restaurantImage.attr("src", results[i].images.fixed_height.url);
                // restaurantDiv.append(p);
                // restaurantDiv.append(restaurantImage);
                // $("#results").prepend(restaurantDiv);
            }
        });
    });

});