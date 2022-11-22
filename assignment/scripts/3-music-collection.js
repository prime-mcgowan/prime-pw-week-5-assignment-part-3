console.log('***** Music Collection *****')

//test
console.log('js');


//Create collection variable as an empty array
let collection = [ ];
console.log('collection variable set to an empty array:', collection);


albumOne = {
    title:'Bad Blood',
    artist:'Bastille',
    yearPublished: 2012
}

albumTwo = {
    title:'White Album',
    artist:'Beatles',
    yearPublished: 1968 
}

albumThree = {
    title:'Country Grammar',
    artist:'Nelly',
    yearPublished: 2000 
}

albumFour = {
    title:'Changes',
    artist:'Justin Bieber',
    yearPublished: 2020 
}

albumFive = {
    title:'22 Make',
    artist:'Oh Wonder',
    yearPublished: 2022
}

albumSix= {
    title:'Wild World',
    artist:'Bastille',
    yearPublished: 2020
}

function addToCollection (...a) {
    collection.push(...a);
    return collection;
    }
    console.log(addToCollection (albumOne, albumTwo, albumThree, albumFour, albumFive, albumSix));
    console.log(collection);




/*
console.log('Adding first album:', addToCollection('Bad Blood', 'Bastille', 2013));

console.log('Adding second album:', addToCollection('White Album', 'Beatles', 1968));

console.log('Adding third album:', addToCollection('Country Grammar', 'Nelly', 2000));

console.log('Adding fourth album:', addToCollection('Changes', 'Justin Bieber', 2020));

console.log('Adding fifth album:', addToCollection('22 Make', 'Oh Wonder', 2022));

console.log('Adding sixth album:', addToCollection('Wild World', 'Bastille', 2020));

console.log(collection);
*/










/*
function addToCollection (title, artist, yearPublished) {
    this.title = title;
    this.artist = artist;
    this.yearPublished = yearPublished;
}

collection.push(addToCollection);
console.log(collection);

function addToCollection (title, artist, yearPublished) {
    collection.title = 'Bad Blood';
    collection.artist = 'Bastille';
    collection.yearPublished = [2012];
}
*/

/*
//New object
collection.album = { 
title: '',
artist: '',
yearPublished: []
}
console.log(collection.album);
*/

/*
collection = {
    title: '',
    artist: '',
    yearPublished:[]
}
console.log(collection);
*/

/*
let albumInfo = {
    title: '',
    artist: '',
    yearPublished: []
}

collection.push(albumInfo);
console.log('newly created object =',collection);
console.log(collection);
*/

/*
let albumOne = {
    title: 'Bad Blood',
    artist: 'Bastille',
    yearPublished: 2012
}

collection.push(albumOne);
console.log('albumOne added', collection);
console.log(collection);

/*
function addToCollection (title, artist, yearPublished) {
    collection.title = 'Bad Blood';
    collection.artist = 'Bastille';
    collection.yearPublished = [2012];
    collection.push(albumOne);
    
}
console.log(addToCollection());
*/





/*
function addToCollection (title, artist, yearPublished) {
    collection.title= 'Bad Blood';
    collection.artist = 'Bastille';
    collection.yearPublished = [2012];
    collection.push(title, artist, yearPublished);
}

console.log('First album:', addToCollection('Bad Blood', 'Bastille', [2012]));
console.log(collection);







function addToCollection (title, artist, yearPublished) {
    return collection;
}

console.log(addToCollection(collection));

function addToCollection (title, artist, yearPublished) {
    collection.push('Bad Blood', 'Bastille', [2012]);
    return true;
}
 
console.log(addToCollection(collection));




function addToCollection(title, artist, yearPublished) {
    collection.title= title;
    collection.artist = artist;
    collection.yearPublished = yearPublished;
    
}
*/




//addToCollection Function//
/*
function addToCollection (title, artist, yearPublished) {
    collection.push(title, artist, yearPublished);
    return true;
}

/*
console.log('Adding first album:', addToCollection('Bad Blood', 'Bastille', 2013));

console.log('Adding second album:', addToCollection('White Album', 'Beatles', 1968));

console.log('Adding third album:', addToCollection('Country Grammar', 'Nelly', 2000));

console.log('Adding fourth album:', addToCollection('Changes', 'Justin Bieber', 2020));

console.log('Adding fifth album:', addToCollection('22 Make', 'Oh Wonder', 2022));

console.log('Adding sixth album:', addToCollection('Wild World', 'Bastille', 2020));

console.log(collection);
*/


/*
let total = collection.length;
console.log(total);

total = 0;

for(let i = 0; i<collection.length; i++){
    total++;
}
console.log(total);

function showCollection ([]) {
   for(let i=0; i<collection.length; i++) {
    total++;
   }
}
console.log(total);
*/
/*
function showCollection ([]) {
    for(let i=0; i<collection.length; i++) {
     total++;
    }
    return total;
 }
 console.log(total);
 */

console.log('*****showCollection Function*****');

function showCollection (collection) {
    for (let i=0; i<collection.length; i++)
    console.log(collection[i].title + ' by ' + collection[i].artist + ' published in ' + collection[i].yearPublished);
    return collection.length  
}

console.log('number of items in collection array:', showCollection (collection));
console.log(collection);


console.log('*****findByArtist Function*****');

let artistResults = [];

function findByArtist (artist) {
   for(let i=0; i<collection.length; i++)
   if( artist === collection[i].artist) {
    artistResults.push(artist)
    console.log(collection[i].title, collection[i].artist, collection[i].yearPublished)
   }   
}


console.log(findByArtist('Oh Wonder'));
//console.log(artistResults);

console.log(findByArtist('Beck'));

console.log(findByArtist('Beatles'));
console.log(artistResults)

console.log(findByArtist('Bastille'));




/*
console.log(findByArtist('Bastille'));
console.log(artistResults);


console.log(findByArtist('Beck'));

console.log(findByArtist('Semisonic'));
 */  



/*
console.log('*****showCollection Function*****');

function showCollection ([]) {
    for (let i=0; i<collection.length; i++)
    console.log('looping through collection:', collection[i]);
    return collection.title + 'by' + collection.artist + 'published in' + collection.yearPublished;
}

console.log(collection.length);
console.log(showCollection(collection));
*/

/*
function showCollection (title, artist) {
    for (let i=0; i<collection.length; i++){
        console.log(collection[i]);
        
        return collection.title + 'by' + collection.artist;
}
}

console.log(showCollection( ));
*/

/*
function showCollection (title, artist) {
    for(let i=0; i<collection.length; i++){
        console.log(collection[i]);
        collection.title = title;
        collection.artist = artist;
    return collection.title + 'by' + collection.artist;
    
}
}
console.log(showCollection(title,artist));
*/


