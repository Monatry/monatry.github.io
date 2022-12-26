console.log("Hello, this is dog.")
var slideIndex = 1;

setTimeout(() => {
    init();
    showSlides(slideIndex);
}, 0.5)

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" current", "");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].className += " current";
    dots[slideIndex - 1].className += " active";
    
}

function init() {
    console.log("WOOF WOOF IM A BIG SCARY GAURD DOG");

    const template = `
    <div class="mySlides fade">
        <div class="numbertext">$NR / $MAX</div>
        <img src="images/$SRC">
        <div class="bg-wrapper">
            <div class="bg-overlay"></div>
            <img class="bg" src="images/$SRC">
        </div>
        <div class="text">$CAPTION</div>
    </div>
    `
    const dotsTemplate = `<span class="dot" onclick="currentSlide($NR)"></span>`;

    let images = [{
        src: "2.jpg",
        caption: "Gimme snacks"
    }, {
        src: "3.jpg",
        caption: "This isn't snacks"
    }, {
        src: "4.jpg",
        caption: "Sleep is just as good as snacks"
    }, {
        src: "5.jpg",
        caption: "This is now my bed"
    }, {
        src: "6.jpg",
        caption: "What u want?"
    }, {
        src: "7.jpg",
        caption: ""
    }, {
        src: "8.jpg",
        caption: "I KNOW this is where food is!!!"
    }, {
        src: "9.jpg",
        caption: "Damn dude ur so pro gamer"
    }, {
        src: "10.jpg",
        caption: "SEND HELP"
    }];

    var dots = document.getElementsByClassName("dots")[0];
    var slides = document.getElementsByClassName("slideshow-container")[0];

    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const myTemp = template
            .replace('$SRC', image.src)
            .replace('$SRC', image.src)
            .replace('$CAPTION', image.caption)
            .replace('$NR', i + 2)
            .replace('$MAX', images.length + 1)

        slides.innerHTML += myTemp;
        dots.innerHTML += dotsTemplate.replace('$NR', i + 2);
    }
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
       plusSlides(-1);
    }
    else if (e.keyCode == '39') {
       // right arrow
       plusSlides(1);
    }

}