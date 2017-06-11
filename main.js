window.onload = function(){


  navigator.getUserMedia =(navigator.geUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

   // check the browser supports getUserMedia
   if(navigator.getUserMedia)
   {

    // request the camera
    navigator.getUserMedia(
    // constraints
    {
      video:true,
      audio:true

    }, 
     // success Callback
     function(localMediaStream)
     {
       
       var vid = document.getElementById('camera-stream');
       var videoTracks = localMediaStream.getVideoTracks();
       var audio = document.getElementById('gum-local');
       var audioTracks = localMediaStream.getAudioTracks();
      localMediaStream.oninactive =function()
      {
        console.log('Stream inactive');
      }
      window.localMediaStream = localMediaStream;
      vid.srcObject =localMediaStream;
      audio.srcObject=localMediaStream;
     },
     // Error Callback
     function(err)
     {
       console.log("error : " +err);
     });
   } else{
      alert('Sorry, Your browser does not support getUserMedia');
   }


    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('camera-stream');
    var effects = document.getElementById('effects');

    effects.onclick = function(event){
     
      video.style.webkitFilter =event.target.getAttribute('data-effect');
      canvas.style.webkitFilter =video.style.webkitFilter;
    };
    // Trigger photo take
    document.getElementById("snapshot").addEventListener("click",function (event) {
        // context.drawImage(video, 0, 0, 640, 480);
        context.drawImage(video, 0, 0, 360, 270).style.webkitFilter =event.target.getAttribute('data-effect');
        var list = document.getElementById('my-photos');


    });

   }

