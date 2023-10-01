dark = document.querySelector('#dark');
light = document.querySelector('#light');

dark.onclick = function() {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
}

light.onclick = function() {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
}