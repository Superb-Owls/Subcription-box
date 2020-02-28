// const request = require('request');
// const util = require('util');
// const getApiHash = require('marvel-api-hash-generator').getApiHash;
import request from 'request'
import util from 'util'
import {getApiHash} from 'marvel-api-hash-generator'; 

export const marvelHeroes = async (hero) => {
    const timeStamp = 1;
    const privateKey = '6c4a21867e8c29ab70e83a75acf55a3fc4fb32f7';
    const publicKey = 'af4d5095c082c430b6d9efa8604ba06f';
    const hashValue = getApiHash(timeStamp, privateKey, publicKey);

    const getResult = util.promisify(request)
    console.log(getResult)
    const requestConstantCharacters = 'https://gateway.marvel.com/v1/public/characters/' + hero + '/comics?limit=100&';
    const exampleUrl = `${requestConstantCharacters}ts=${timeStamp}&orderBy=-modified&apikey=${publicKey}&hash=${hashValue}`;
    var characters = {}
    return await getResult(exampleUrl).then(res => {
        let thing = JSON.parse(res.body)
        let obj = thing.data.results;
        var images = []
        var title = []
        var dates = []
        var description = []
        for (let i = 0; i < obj.length; i++) {

            if (obj[i].images.length > 0 && obj[i].description != null) {

                if (title.length < 5) {
                    title.push(obj[i].title)
                }
                if (images.length < 5) {
                    images.push(obj[i].images[0])
                }
                if (dates.length < 5) {
                    dates.push(obj[i].dates[0])
                }
                if (description.length < 5) {
                    description.push(obj[i].description)
                }
            }
        }
        characters["title"] = title
        characters["images"] = images
        characters["dates"] = dates
        characters["description"] = description
        return characters
    })
}


// var hulk = 1016823
// var captainAmerica = 1009220
// var spiderMan = 1009610
// var thor = 1009664
// var wolverine = 1009718
// var ironman = 1009368
// export default marvelHeroes;