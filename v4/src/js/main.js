const pan = document.querySelector('.pan');
const img = '../static/img/lifelikeui_fruit.jpg';

const panorama = new PANOLENS.ImagePanorama(img);
const viewer = new PANOLENS.Viewer({
    container: pan
});

viewer.add(panorama);