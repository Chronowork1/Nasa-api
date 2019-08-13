/* global $ */
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
let inputVal;  
$(document).ready(function(){
    $("#searchButton").click(function(){
        function getAPI(){ 
            inputVal = $("#searchInput").val();
            let NasaImageAPI = "https://images-api.nasa.gov/search?q=" + inputVal
            $.ajax({
                url:NasaImageAPI,
                type:"GET",
                success: function(response){
                    for(let i =0; i < response.collection.items.length; i++){
                        $("#searchResult").append("<img src='" + response.collection.items[i].href + "'\></<img>")
                        console.log(response.collection.items[i].href)
                    }
                }
            })

        }
        getAPI();
    })
})