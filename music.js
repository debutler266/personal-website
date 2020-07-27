  //Click on album poster to get songs ID
$(".album-poster").on('click', function(e){
  var dataSwitchId = $(this).attr('data-switch');
  //console.log(dataSwitchId);

  //APlayer switch function
  ap.list.switch(dataSwitchId);

  //click on songs to play
  ap.play();
  $("#aplayer").addClass('showPlayer');
});


const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
      {
        name: 'Creative Minds',
        artist: 'Artist Name',
        url: 'audio1.mp3',
        cover: 'ac1.jpg'
    },
    {
      name: 'Summer',
      artist: 'Artist Name',
      url: 'audio2.mp3',
      cover: 'cs1.jpg'
  },
  {
      name: 'Happy Rock',
      artist: 'Artist Name',
      url: 'audio3.mp3',
      cover: 'ac1.jpg'
},
{
    name: 'Memories',
    artist: 'Artist Name',
    url: 'audio4.mp3',
    cover: 'cs1.jpg'
},

{
  name: 'Going Higher',
  artist: 'Artist Name',
  url: 'audio5.mp3',
  cover: 'ac1.jpg'
},

{
  name: 'Acoustic Breeze',
  artist: 'Artist Name',
  url: 'audio6.mp3',
  cover: 'cs1.jpg'
},

{
  name: 'Tomorrow',
  artist: 'Artist Name',
  url: 'audio7.mp3',
  cover: 'ac1.jpg'
},

{
  name: 'Slow Motion',
  artist: 'Artist Name',
  url: 'audio8.mp3',
  cover: 'cs1.jpg'
},

  ]
});
