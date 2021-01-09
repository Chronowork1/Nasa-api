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

require('dotenv').config()
console.log(process.env.API_KEY)

let API_KEY = process.env.API_KEY
let url =  "https://api.nasa.gov/planetary/apod?api_key=" + API_KEY;
let inputVal;
$(document).ready(function(){
    $("#searchButton").click(function(){
        function getAPI(){ 
            inputVal = $("#searchInput").val();
            console.log(inputVal)
            $.ajax({
                url:url,
                method:"GET",
                success: function(){
                
                }
            })

        } 
    })

})