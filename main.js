//Removes & Adds the class of active to selected nav menu link
$(document).ready(function(){
  $('a').click(function(){
    var selected = $(this);
    $('a').removeClass('active');
    $(selected).addClass('active');
  });

  var $a = $('.a'),
      $b = $('.b'),
      $c = $('.c'),
      $d = $('.d'),
      $e = $('.e'),
      $f = $('.f'),
      $home = $('.home'),
      $aboutme = $('.aboutme'),
      $gallery = $('.gallery'),
      $gallery2 = $('.gallery2'),
      $music = $('.music'),
      $contact = $('.contact');

      $a.click(function(){
        $home.fadeIn();
        $aboutme.fadeOut();
        $gallery.fadeOut();
        $contact.fadeOut();
        $gallery2.fadeOut();
      });
      $b.click(function(){
        $aboutme.fadeIn();
        $home.fadeOut();
        $gallery.fadeOut();
        $gallery2.fadeOut();
        $contact.fadeOut();
      });
      $c.click(function(){
        $gallery.fadeIn();
        $gallery2.fadeOut();
        $home.fadeOut();
        $aboutme.fadeOut();
        $contact.fadeOut();
      });
      $d.click(function(){
        $gallery.fadeOut();
        $gallery2.fadeIn();
        $home.fadeOut();
        $aboutme.fadeOut();
        $contact.fadeOut();
      });
      $e.click(function(){
        $gallery.fadeOut();
        $gallery2.fadeOut();
        $home.fadeOut();
        $aboutme.fadeOut();
        $contact.fadeOut();
      });
      $f.click(function(){
        $contact.fadeIn();
        $home.fadeOut();
        $gallery.fadeOut();
        $gallery2.fadeOut();
        $aboutme.fadeOut();
      });
});



// Wrap every letter in a span for text Animation
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  // ml4 (Videos Heading)
  var textWrapper = document.querySelector('.ml4');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: true})
    .add({
      targets: '.ml4 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 150 * (i+1)
    }).add({
      targets: '.ml4',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
