// sayfa kaydırılınca header renk değişimi için
window.addEventListener('scroll', function() { 
    let header = document.querySelector('header');
    let show = document.querySelector("#navbar");
    let scrollPosition = window.scrollY;
    if (scrollPosition > 20) {
        header.style.backgroundColor = '#325492'; 
        show.style.backgroundColor ='#325492';
    }else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0)'
        show.style.backgroundColor = 'rgba(255, 255, 255, 0)'

    }
});

// our classes section

const classesBtnH = document.querySelector(".classes-text h3");
const classesBtnP = document.querySelector(".second-p");
const classesBtnImg = document.querySelector(".classes-img img");
let btns = document.querySelector("#btns");
let reverseDiv = document.querySelector(".text-img");

const yogaFunct = () => {
    classesBtnH.textContent = "Why Should You Do Yoga?";
    classesBtnImg.src = "img/yoga.jpg";
    classesBtnP.innerHTML = "Saturday-Sunday: 8.00am - 10.00am <br>Monday-Tuesday: 10.00am - 12.00pm<br>Wednesday-Friday: 3.00pm - 6.00pm"
    
    if(reverseDiv.style.flexDirection == "row-reverse"){ //resim ve yazıların yerini değiştirdim
        reverseDiv.style.flexDirection = "row"
    }else {
    reverseDiv.style.flexDirection = "row-reverse";
    }
}
const groupFunct = () => {
    classesBtnH.textContent = "Why Should You Do Group?";
    classesBtnImg.src = "img/group.webp";
    classesBtnP.innerHTML = "Monday-Tuesday: 9.00am - 11.00am <br>Thursday-Friday: 11.00am - 1.00pm<br>Friday-Saturday: 4.00pm - 7.00pm"
}
const soloFunct = () => {
    classesBtnH.textContent = "Why Should You Do Solo?";
    classesBtnImg.src ="img/solo.jpg";
    classesBtnP.innerHTML = "Tuesday-Wednesday: 7.00am - 9.00am <br>Thursday-Friday: 10.00am - 12.00pm<br>Saturday-Sunday: 4.00pm - 7.00pm"
   
    if(reverseDiv.style.flexDirection == "row-reverse"){
        reverseDiv.style.flexDirection = "row"
    }else {
        reverseDiv.style.flexDirection = "row-reverse";
    }
}
const stretchFunct = () => {
    classesBtnH.textContent = "Why Should You Do Stretch?";
    classesBtnImg.src = "img/stret.webp";
    classesBtnP.innerHTML = "Monday-Wednesday: 8.00am - 10.00am <br>Thursday-Friday: 10.00am- 12.00pm"
}

btns.addEventListener("click", (event) => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        buttons.forEach(btn => {
          btn.classList.remove('selected');
        });
        this.classList.add('selected');
      });
    });
    const btnId = event.target.id;
    switch (btnId) {
        case "yoga-btn" :
            yogaFunct();
            break;
        case "group-btn" :
            groupFunct();
            break;
        case "solo-btn" :
            soloFunct();
            break;
        case "stretch-btn":
            stretchFunct();
            break;
        default:
        return;
    }
})

/* BMI hesaplama */ 

document.getElementById("weight").addEventListener("input", calculator);
document.getElementById("height").addEventListener("input", calculator);

function calculator() {
    let heightInput = document.getElementById("height").value;
    let weightInput = document.getElementById("weight").value;

    let height = parseInt(heightInput);
    let weight = parseInt(weightInput);
    let result = weight / ((height / 100) ** 2);

    let roundedResult = result.toFixed(1); /* virgülden sonra 1 sayı olsun */ 
    if (!isNaN(result)) {
        let resultInput = document.getElementById("result");
        resultInput.textContent = roundedResult;

        var inputValue = parseFloat(resultInput.textContent); 
        var element = document.querySelector(".after"); 

        // Input değerine göre belirledim
        if (inputValue < 18.5 ) {
            element.style.setProperty('--after-left', '10%');
        } else if (inputValue < 25) {
            element.style.setProperty('--after-left', '30%');
        } else if (inputValue < 30){
            element.style.setProperty('--after-left', '45%');
        } else if (inputValue < 35) {
            element.style.setProperty('--after-left', '60%');
        } else  {
            element.style.setProperty('--after-left', '80%');
        }
    }
}

// contact-us harita için
let map; 
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
    });
}

// hamburger menü açılışı ve kapanışı

document.querySelector('.hamburger-menu').addEventListener('click', function () {
    document.querySelector('#navbar').classList.toggle('show-menu');
});
const menu = document.querySelector('.show-menu');
menu.classList.add('hidden');