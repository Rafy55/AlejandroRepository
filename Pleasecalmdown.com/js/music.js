// .on('click', function (e) {
//
//   /*
//   When .AR element is clicked, iterate all .AR
//   elements, and pause/reset the associated audio
//   instances (if audio has src attribute).
//   This has the effect of "stopping all audio" for
//   .AR elements on the page
//   */
//   $('.audioID1').each(function() {
//     var audio = $(this).data('audio-object');
//
//     if(audio.src) {
//       audio.pause();
//       audio.currentTime = 0;
//     }
//   });
//
//   /*
//   Now that all audio objects for .AR elements
//   have stopped playing, start playing the actual
//   audio object for the .AR element that was clicked.
//
//   If the audio object has no src attribute, assign
//   to load this audio object instance.
//
//   */
//   var clickedAudio = $(this).data('audio-object');
//
//   if(!clickedAudio.src) {
//     clickedAudio.src = $(this).data('audio');
//   }
//
//   clickedAudio.play();
// });
