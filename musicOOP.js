function Library (name,creator) {
	this.name = name;
	this.creator = creator;
	this.playlists = [];
	this.addPlaylist = function(name){
		this.playlists.push(name);
	}
}



function Playlist (name){
	this.name = name;
	this.tracks = [];
	this.addTrack= function(name){
		this.tracks.push(name);
	}
}

function Tracks (title,rating,length) {
	this.title = title;
	this.rating = rating;
	this.length = length;
}



Playlist.prototype.overallRating = function() {
	let rating = null
  for (let track of this.tracks){
  		rating += track.rating;
  }
  rating = rating / this.tracks.length;
  return rating;
}

Playlist.prototype.totalDuration = function(){
	let time =null;
	for (let track of this.tracks){
		time += this.length;
		return time;
	}
}


let omg = new Library('omg','luke')

let dorito = new Playlist('dorito');
let desoto = new Playlist('FriendsofDesoto');

let frogger = new Tracks('frogger',3,400)
let cdman = new Tracks('cdman',4,500)
let beanieman = new Tracks('beanieman',1,3000)
let omahaBeach = new Tracks('omahaBeach',3,2000)
let drunkshimoda = new Tracks('drunkshimoda',5,2000)
let crazyhorse = new Tracks('crazyhorse',2,4000)
let elephantDung = new Tracks('elephantDung',3,2000)
let yommato = new Tracks('yommato',5,4000)

omg.addPlaylist(dorito);
omg.addPlaylist(desoto);
 

dorito.addTrack(frogger);
dorito.addTrack(cdman);
dorito.addTrack(beanieman);
dorito.addTrack(omahaBeach);

desoto.addTrack(drunkshimoda);
desoto.addTrack(crazyhorse);
desoto.addTrack(elephantDung);
desoto.addTrack(yommato);
console.log(dorito.tracks);




