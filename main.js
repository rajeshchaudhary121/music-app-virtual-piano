
		<!------------------------------VARIABLES decleration ---------------------------------->

		//var songName1 = 'Badri Ki Dulhania (Title Track)';
		//var songName2 = 'Humma Song';
		//var songName3 = 'Nashe Si Chadh Gayi';
		//var songName4 = 'The Breakup Song';

		// or hum iske jagah ye use karege

		//var songName = ['Badri Ki Dulhania (Title Track)','Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song'];

		//var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];

		//var artistList = ['Artist #1', 'Artist #2', 'Artist #3', 'Artist #4']; 

		//var artistList = [' Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi'];
		//var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
		//var durationList = ['2:56','3:15','2:34','2:29'];
 
  var songs = [{
        'name': '3-Peg',
        'artist': 'Sharry Maan',
        'album': '3-peg',
        'duration': '4:38',
       'fileName': 'song1.mp3',
	   'image' : 'song1.jpg'
	   
    },
    {
        'name': 'Gang-Land',
        'artist': 'Mankirt Aulukh Ft. Deep Kahlon',
        'album': 'Gang-land',
        'duration': '3:15',
        'fileName': 'song2.mp3',
		'image' : 'song2.jpg'
    },
    {
        'name': 'Ho Gya Talli',
        'artist': 'Diljit Singh',
        'album': 'Super Singh',
        'duration': '2:18',
        'fileName': 'song3.mp3',
		'image' : 'song3.jpg'
    },
    {
        'name': 'Hostel',
        'artist': 'Sharry Maan',
        'album': 'Hostel',
        'duration': '5:34',
        'fileName': 'song4.mp3',
		'image' : 'song4.jpg'
    }]

		<!---------------------------------Welcome Screen--------------------------------->

		$('.welcome-screen button').on('click', function() {
		var name = $('#name-input').val();
		if (name.length > 2) {
		var message = "Welcome, " + name;
		$('.main .user-name').text(message);
		$('.welcome-screen').addClass('hidden');
		$('.menu').removeClass('hidden');
		} else {
		$('#name-input').addClass('error');
		}
		});

		<!--------------------------------2nd Screen Song wala part------------------->
	      $('.player-list-img-one').on('click', function() {
		  $('.menu').addClass('hidden');
		  $('.main').removeClass('hidden');
				});
		<!---------------------Function created for songs -------------->
		
		
		

		function toggleSong() {
		var song = document.querySelector('audio');
		if(song.paused == true) {
		console.log('Playing');
		$('.play-icon').removeClass('fa-play').addClass('fa-pause');
		song.play();
		}
		else {
		console.log('Pausing');
		$('.play-icon').removeClass('fa-pause').addClass('fa-play');
		song.pause();
		}
		}
		<!-----------------FUnction ended------------->
		
		//Function created for images change

		function changeCurrentSongDetails(songObj) {
		$('.current-song-image').attr('src','img/' + songObj.image)
		$('.current-song-name').text(songObj.name)
		$('.current-song-album').text(songObj.album)
		}
		//Function end
		
		function fancyTimeFormat(time)
		{
		// Hours, minutes and seconds
		var hrs = ~~(time / 3600);
		var mins = ~~((time % 3600) / 60);
		var secs = time % 60;

		// Output like "1:01" or "4:03:59" or "123:03:59"
		var ret = "";

		if (hrs > 0) {
		ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
		}

		ret += "" + mins + ":" + (secs < 10 ? "0" : "");
		ret += "" + secs;
		return ret;
		}

		<!----------------------function Time show--------------------->
		function updateCurrentTime() {
		var song = document.querySelector('audio');
		var currentTime = Math.floor(song.currentTime);
		currentTime = fancyTimeFormat(currentTime);
		var duration = Math.floor(song.duration);
		duration = fancyTimeFormat(duration)
		$('.time-elapsed').text(currentTime);
		$('.song-duration').text(duration);
		}

        <!-----------------------Function create addSongNameClickEvent------------->

		function addSongNameClickEvent(songObj,position) {
		var songName = songObj.fileName; // New Variable 
		var id = '#song' + position;
		$(id).click(function() {
		var audio = document.querySelector('audio');
		var currentSong = audio.src;
		if(currentSong.search(songName) != -1)
		{
		toggleSong();
		}
		else {
		audio.src = songName;
		toggleSong();
		changeCurrentSongDetails(songObj); // Function Call
		}
		});
		}
		
		
$('#maaa').on('click',function(){
   
    
    $('.menu').addClass('hidden');
    $('.content').removeClass('hidden');

});



      
	  $('#hup').on('click',function(){

    $('.content').addClass('hidden');
    $('.menu').removeClass('hidden');
    
    $('.main').addClass('hidden');

    song = document.querySelector('audio');
          song.pause();

  })
	  
	  <!--------------function ended----------------->

      //for volume 
	  
	  function setvolume(){
		  var song =document.querySelector('audio');
		  song.volume=slider.value/100;
		  
	  }
	  
	  $('#slider').on('click' ,function(){
		   setvolume();
		   
		  
	  });
	  $('#slider').on('mousemove', function(){
		   setvolume();
		   
		  
	  });
	  
	  
	  
	  
	  
		window.onload = function() {

		changeCurrentSongDetails(songs[0]);
		for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1)
    }
		$('#songs').DataTable({
        paging: false
    });	
   }
			
   
		//$('#song1 .song-name').text(songName[0]);
		//$('#song2 .song-name').text(songName[1]);
		//$('#song3 .song-name').text(songName[2]);
		//$('#song4 .song-name').text(songName[3]);

		<!--------------- Artist name---------->
		
		//$('#song1 .song-artist').text(artistList[0]);
        //$('#song2 .song-artist').text(artistList[1]);
		//$('#song3 .song-artist').text(artistList[2]);
		//$('#song4 .song-artist').text(artistList[3]);
		
		
		
		<!-----------Making click event on songs names---------->

		//1st
		//$('#song1').click(function() {
		//var audio = document.querySelector('audio');
		//var currentSong = audio.src;
		//if(currentSong.search(fileNames[0]) != -1)
		//{
		//toggleSong();
		//}
		//else {
		//audio.src = fileNames[0];
		//toggleSong();
		//}
		//});
		//2nd
		//$('#song2').click(function() {
		//var audio = document.querySelector('audio');
		//var currentSong = audio.src;
		//if(currentSong.search(fileNames[1]) != -1)
		//{
		//toggleSong();
		//}
		//else {
		//audio.src = fileNames[1];
		//toggleSong();
		//}
		//});
		//3rd
		//$('#song3').click(function() {
		//var audio = document.querySelector('audio');
		//var currentSong = audio.src;
		//if(currentSong.search(fileNames[2]) != -1)
		//{
		//toggleSong();
		//}
		//else {
		//audio.src = fileNames[2];
		//toggleSong();
		//}
		//});
		//4th
		//$('#song4').click(function() {
		//var audio = document.querySelector('audio');
		//var currentSong = audio.src;
		//if(currentSong.search(fileNames[3]) != -1)
		//{
		//toggleSong();
		//}
		//else {
		//audio.src = fileNames[3];
		//toggleSong();
		//}
		//});

		//addSongNameClickEvent(fileNames[0],1);
		//addSongNameClickEvent(fileNames[1],2);
		//addSongNameClickEvent(fileNames[2],3);
		//addSongNameClickEvent(fileNames[3],4);
		
		//for (var i = 0; i < fileNames.length ; i++) {
		//addSongNameClickEvent(fileNames[i],i)
		//}
		
		//for (var i = 0; i <= fileNames.length ; i++) {
		//addSongNameClickEvent(fileNames[i],i+1)
		//} 		

		updateCurrentTime();
		setInterval(function() {
		updateCurrentTime();
		},1000);
		



		<!-------------------Ganne vagera ka code----------->

		$('.play-icon').on('click', function() {
		toggleSong();  <!--------------Function calling--------------->
		});

		//$('body').on('keypress',function(event) {
		//if (event.keyCode == 32)
		//{
		//toggleSong();  <!--------------Function calling--------------->
		//}
		//});
   $('body').on('keypress',function(event) {
    var target = event.target;
    if (event.keyCode == 32 && target.tagName !='INPUT')
    {
        toggleSong();
    }
});


var Playingnumber = 0  ;
var shuffle=0;
var equal = 0;




function changeSong() 
{
var music =  songs[Playingnumber].fileName;
var song = document.querySelector("audio");
song.src = music;
toggleSong();
changeCurrentSongDetails(songs[Playingnumber])
}






$(".fa-step-forward").click(function(){

if(shuffle==1)
{
var audio = document.querySelector('audio');
var nextSongNumber = randomExcluded(0,3,Playingnumber); // Calling our function from Stackoverflow

var nextSongObj = songs[nextSongNumber];
audio.src = nextSongobj.fileName;
toggleSong();
changeCurrentSongDetails(nextSongobj);
Playingnumber = nextSongNumber;


}


else {

if(Playingnumber == songs.length-1){
Playingnumber = 0;
changeSong();
}

else {
console.log("two");
console.log(Playingnumber);
Playingnumber++;
changeSong();
}

}

})




$(".fa-step-backward").click(function(){

if(Playingnumber == 0){
console.log("one");
Playingnumber = (songs.length-1);
changeSong();

}

else {
console.log("two");
console.log(Playingnumber);
Playingnumber--;
changeSong();
}

})
