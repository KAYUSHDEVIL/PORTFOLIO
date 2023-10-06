
function Background() {
    var backgrounds = [
        'url(images/ANONYMUS%201.jpg)',
        'url(images/ANONYMUS%202.jpg)',
        'url(images/ANONYMUS%203.jpg)',
        'url(images/ANONYMUS%204.jpg)',
        'url(images/ANONYMUS%205.jpg)'
    ];

    var i = 0;
    setInterval(function() {
        document.body.style.backgroundImage = backgrounds[i % backgrounds.length];
        i++;
    }, 3000); // Change background every 3 seconds (adjust the duration as needed)
}
'use strict';

function progressBarAndCountNumber () {
    const progress = document.querySelectorAll('.progress');
    let count = 0;
    // You must put the maximum number in the MAX variable.
    let MAX = 95;

    let run = setInterval(() => {
        count++;
        progress.forEach(element => {
            if (count <= element.dataset.progress) {
                element.parentElement.style.background = `conic-gradient(#f9004d ${count}%, #212428 0)`;
                element.firstElementChild.textContent = `${count}%`;
            };
            if (count == MAX) {
                clearInterval(run);
            };
        });
    }, 20);
}

progressBarAndCountNumber();
Background();
  



