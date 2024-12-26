const Button = document.querySelector(".Slidebar_SLdieIcon");
const Slidebar = document.querySelector(".Slidebar");

const LeftButton = document.querySelector(".Left");


Button.addEventListener('click', () => {
    Slidebar.style.left = "0px";
 Button.style.display = "none";
      LeftButton.style.display = "block";
}
);
LeftButton.addEventListener("click", () => {
    Slidebar.style.left = "-252px";
    Button.style.display = "block";
     LeftButton.style.display = "none";
});



// mode Script is here

const ModeButton = document.querySelector(".ModeButton");
const NightModeIcon = document.querySelector(".NightModeIcon");
const DayMode = document.querySelector(".Sun");


ModeButton.addEventListener("click", () => {
    document.body.classList.toggle("body_color");
    if (document.body.classList.contains("body_color")) {
        NightModeIcon.style.display= "none" ;
        DayMode.style.display = "block";
        DayMode.style.color = "white";
    } else {
         NightModeIcon.style.display = "block";
         DayMode.style.display = "none";
    }
});


// modal js script

const contactModal = document.querySelector(".contactModal");
const NavbarOverLayModal = document.querySelector(".NavbarOverLayModal");
const NavbarOverLayModalclose = document.querySelector(
    ".NavbarOverLayModalclose");
 

contactModal.addEventListener('click', () => {
    NavbarOverLayModal.style.display = "flex";
});
NavbarOverLayModalclose.addEventListener('click', () => {
    NavbarOverLayModal.style.display = "none";
});

// imageSLider js

const Next = document.querySelector(".ImageSLider__next");
const Prev = document.querySelector(".ImageSLider__prev");
const ImageHolder = document.querySelectorAll(".ImageSlideImgHolder__pic");

let counter = 0;

ImageHolder.forEach((value, index) => {
     value.style.left = `${index * 100}%`;
});
const imageSlide = () => {
    ImageHolder.forEach((value) => {
        value.style.transform = `translateX(-${counter * 100}%)`;
    });
}

Next.addEventListener("click", () => {
    counter++;
    imageSlide();
});
Prev.addEventListener("click", () => {
  counter--;
  imageSlide();
});