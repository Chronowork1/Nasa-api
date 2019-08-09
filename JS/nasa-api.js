
/*let searchInput = document.getElementById("searchInput")
let searchButton = document.getElementById("searchButton")
let searchResult = document.getElementById("searchResult")

function inputClick(){
    console.log(searchButton)
    searchButton.onClick = function(){
        console.log("true")
    }
}*/
let url =  "https://api.nasa.gov/planetary/apod?api_key=zbSs6K5WiNMfDe3PWJb2m4RV92LGgykgYGyaTwl1";

$(document).ready(function(){
    function getAPI(){ 
        $.ajax({
            url:url,
            method:"GET",
            success: function(){
                
            }
        })

    }

    $("#searchButton").click(function(){
        
    })

})