import axios from "axios";

export default {
    // Gets all posts
    getHeroes: function() {
      return axios.get("https://gateway.marvel.com:443/v1/public/characters?apikey=6d6baa181e94c8d024bbe773d573a000")
    //   .then(res => {
    //       console.log(res)
    //   })
      ;
    }
}



// you will also have to setup the referring domains on your marvel developer portal
var PRIV_KEY = "6c4a21867e8c29ab70e83a75acf55a3fc4fb32f7";
var PUBLIC_KEY = "af4d5095c082c430b6d9efa8604ba06f";

function getMarvelResponse() {

  // you need a new ts every request                                                                                    
  var ts = new Date().getTime();
  var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
  
  // the api deals a lot in ids rather than just the strings you want to use
  var characterId = '1009718'; // wolverine                                                                             


  var url = 'http://gateway.marvel.com:80/v1/public/comics';

  console.log(url);
  $.getJSON(url, {
    ts: ts,
    apikey: PUBLIC_KEY,
    hash: hash,
    characters: characterId
    })
    .done(function(data) {
      // sort of a long dump you will need to sort through
      console.log(data);
    })
    .fail(function(err){
      // the error codes are listed on the dev site
      console.log(err);
    });
};

getMarvelResponse();