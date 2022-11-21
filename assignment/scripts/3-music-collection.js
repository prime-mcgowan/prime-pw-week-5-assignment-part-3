console.log('***** Music Collection *****')

//test
console.log('js');


//Create collection variable as an empty array
collection = [ ];
console.log('collection variable set to an empty array:', collection);

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

let albumInfo = {
    title: '',
    artist: '',
    yearPublished: []
}

collection.push(albumInfo);
console.log('newly created object =',collection);
console.log(collection);

let albumOne = {
    title: 'Bad Blood',
    artist: 'Bastille',
    yearPublished: 2012
}

function addToCollection (title, artist, yearPublished) {
    collection.title = 'Bad Blood';
    collection.artist = 'Bastille';
    collection.yearPublished = [2012];
    collection.push(albumOne);
    
}
console.log(addToCollection());






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





//addToCollection Function//
function addToCollection (title, artist, yearPublished) {
    collection.push(title, artist, yearPublished);
    return true;
}

console.log('Adding first album:', addToCollection('Bad Blood', 'Bastille', 2013));

console.log('Adding second album:', addToCollection('White Album', 'Beatles', 1968));

console.log('Adding third album:', addToCollection('Country Grammar', 'Nelly', 2000));

console.log('Adding fourth album:', addToCollection('Changes', 'Justin Bieber', 2020));

console.log('Adding fifth album:', addToCollection('22 Make', 'Oh Wonder', 2022));

console.log('Adding sixth album:', addToCollection('Wild World', 'Bastille', 2020));

console.log(collection);


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


/*
function showCollection ([]) {
    for (let i=0; i<collection.length; i++)
    console.log('looping through collection:', collection[i]);
    return index;
}
console.log(showCollection(collection));
*/

/*

collection = {
    title: '',
    artist: '',
    yearPublished:[]
}


function showCollection (title, artist) {
    for (let i=0; i<collection.length; i++){
        console.log(collection[i]);
        
        return collection.title + 'by' + collection.artist;
}
}

console.log(showCollection( ));


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