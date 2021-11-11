//Event necessary for script.js to work properly if <script> is placed in <meta>
window.addEventListener("DOMContentLoaded", (event) => {
  const videoElement = document.getElementById("video");
  const button = document.getElementById("button");

  //Prompt for media source => pass it to video element => play
  const selectMediaStream = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
        videoElement.play();
      }
    } catch (error) {
      console.log(error);
    }
  };

  button.addEventListener('click', async() => {
    button.disabled = true;
    await videoElement.requestPictureInPicture(); //Start picture in picture
    button.disabled = false;
  })

  selectMediaStream();
});
