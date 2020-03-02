export default function Comics (res) {
    var comics =[
    ]
    for ( let i=0 ; i<5; i++) {
        let comicObject = {
            image: res.images[i],
            title: res.title[i],
            gridSpot: `comic${i+1}` 
        }
        comics.push(comicObject)
    }
    return comics;
}