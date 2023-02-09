

function newimage(){
    var img = new Array();
img[0] = 'd.jpg';
img[1] = 'ele.jpg';
img[2] = 'h.jpg';
img[3] = 'hippo.jpg';
img[4] = 'lep.avif';
img[5] = 'm.avif';
img[6] =  'p.jpg';
img[7] =  'r.jpg';
img[8] =  'rat.jpg';
img[9] =  's.jpeg';
    var randomimage = Math.floor(Math.random()*img.length);
    return document.getElementById('img-conatiner').innerHTML =  '<img src="'+img[randomimage]+'"/>';
}