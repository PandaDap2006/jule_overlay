var video = document.getElementById("video");

function onClick(text) {
    video.play();
    if(
        document.pictureInPictureEnabled && 
        !video.disablePictureInPicture
    ) {
        video.play();
        if(!document.pictureInPictureElement) {
            video.requestPictureInPicture();
        }
    }
}