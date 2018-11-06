// READ the giphy API docs: https://developers.giphy.com/
const giphy_endpoint = 'http://api.giphy.com/v1/gifs/search'
var API_KEY = "VP5OTA9IH52Sk9w5hR8Bff99vkjgydaS";
var searchForm = document.querySelector("#search-form");
var searchInput = searchForm.querySelector("input");
var results = document.querySelector(".results");


// define our functions
// parameters are variables that are used within a function and map out how the information
// y(x) = mx + b
// searchInput.value is my search var value
// console.log(searchInput.value);
console.log("Running get Gifs");
console.log(searchInput.value);

function getGifs() {
    results.innerHTML = "";
    fetch(`${giphy_endpoint}?api_key=${API_KEY}&q=${searchInput.value}`)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            // data.data[0].images.preview_gif.url
            console.log(data);
            //iterating over an array
            for (var i = 0; i < data.data.length; i++) {
                results.innerHTML += `
        <img class="image" src="${data.data[i].images.preview_gif.url}">
        `
            }
        })
        .catch(function(error){
            console.log("there was an error!");
        }
        ))
}



// add event listeners and call functions

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    getGifs();

})