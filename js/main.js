const baseURL = "https://ci-swapi.herokuapp.com/api/";   //using a const so we can add a variable value to it later

function getData(type, cb) {                                         //cb paramater being used used for and is the function we pass in
    var xhr = new XMLHttpRequest();                           //standard coomand for json

    xhr.onreadystatechange = function() {                                 //standard for json   the cb value can nbe whatever
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");                        //standard for json command
    xhr.send();
}

function writeToDocument(type) {                    //this is what is in the HTML so type is writeToDocument('people') so type in this example is people  and "people" forms the api url
    var el = document.getElementById("data");       // creating el variable to hold the  data div - so we can set it to blank int he next line 
    el.innerHTML = "";                            //this clears the lsit everytime runs so not appending list , to a list

    getData(type, function(data) { //running GetData function above passing type as a parameter , with an anoymous function inside
        data = data.results;                       // 

        data.forEach(function(item) {                        //for each element in data run this function, take the item
            Object.keys(item).forEach(function(key){
                console.log(key);
            })
            el.innerHTML += "<p>" + item.name + "</p>";
        });
    });
}