//**ふわっと表示させる**//
window.addEventListener("scroll", function () {
    const scrollAnimationElm = document.querySelectorAll(".scroll_up");
    const scrollAnimationFunc = function () {
        for (let i = 0; i < scrollAnimationElm.length; i++) {
            const triggerMargin = 100;
            if (
                window.innerHeight >
                scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
            ) {
                scrollAnimationElm[i].classList.add("on");
            }
        }
    };
    window.addEventListener("load", scrollAnimationFunc);
    window.addEventListener("scroll", scrollAnimationFunc);
});

//**pageTOPボタン**//
const pagetop_btn = document.querySelector(".pagetop");

pagetop_btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

//**ハンバーガーメニュー**//
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger-menu");
    const nav = document.querySelector(".p-header_nav");
    const links = document.querySelectorAll(".p-header_nav a"); // すべてのナビゲーションリンクを取得

    // ハンバーガーメニューをクリックしたときの開閉処理
    hamburger.addEventListener("click", () => {
        if (hamburger.classList.contains("is-active")) {
            hamburger.classList.remove("is-active");
            nav.classList.remove("is-active");
        } else {
            hamburger.classList.add("is-active");
            nav.classList.add("is-active");
        }
    });

    // ナビゲーションリンクをクリックしたときにメニューを閉じる
    links.forEach(function(link) {
        link.addEventListener("click", () => {
            hamburger.classList.remove("is-active");
            nav.classList.remove("is-active");
        });
    });
});



//**スライダー**//
const sliderContainer = document.querySelector(".slider_outer");
const nextBtn = document.querySelector(".back-btn");
const backBtn = document.querySelector(".next-btn");
const menuClickPic = document.querySelectorAll(".menu-click-pic");
const menuTexts = document.querySelectorAll(".menu-texts");

let sliderStatus = 1;

//進むボタンが押された時//
nextBtn.addEventListener("click", () => {
    switch (sliderStatus) {
        case 1: //(1)の時の処理
            sliderStatus = 2;
            sliderContainer.style.transform = `translateX(-${112 * 1}%)`;
            menuClickPic[1].style.opacity = "1";
            menuClickPic[2].style.opacity = "0.3";
            menuClickPic[0].style.opacity = "0.3";
            menuTexts[1].style.display = "block";
            menuTexts[0].style.display = "none";
            break;
        case 2: //(2)の時の処理
            sliderStatus = 3;
            sliderContainer.style.transform = `translateX(-${112 * 2}%)`;
            menuClickPic[2].style.opacity = "1";
            menuClickPic[1].style.opacity = "0.3";
            menuClickPic[0].style.opacity = "0.3";
            menuTexts[2].style.display = "block";
            menuTexts[1].style.display = "none";
            break;
        case 3: //(3)の時の処理
            sliderStatus = 4;
            sliderContainer.style.transform = `translateX(-${110 * 3}%)`;
            menuClickPic[3].style.opacity = "1";
            menuClickPic[2].style.opacity = "0.3";
            menuClickPic[1].style.opacity = "0.3";
            menuTexts[3].style.display = "block";
            menuTexts[2].style.display = "none";
            break;
        case 4: //(4)の時の処理
            break;
    }
});

//戻るボタンが押された時//
backBtn.addEventListener("click", () => {
    switch (sliderStatus) {
        case 1: //(1)の時の処理
            break;
        case 2: //(2)の時の処理
            sliderStatus = 1;
            sliderContainer.style.transform = `translateX(${0* 1}%)`;
            menuClickPic[1].style.opacity = "0.3";
            menuClickPic[0].style.opacity = "1";
            menuTexts[0].style.display = "block";
            menuTexts[1].style.display = "none";
            break;
        case 3: //(3)の時の処理
            sliderStatus = 2;
            sliderContainer.style.transform = `translateX(-${110* 1}%)`;
            menuClickPic[2].style.opacity = "0.3";
            menuClickPic[1].style.opacity = "1";
            menuTexts[1].style.display = "block";
            menuTexts[2].style.display = "none";
            break;
        case 4: //(4)の時の処理
            sliderStatus = 3;
            sliderContainer.style.transform = `translateX(-${110*2}%)`;
            menuClickPic[3].style.opacity = "0.3";
            menuClickPic[2].style.opacity = "1";
            menuTexts[2].style.display = "block";
            menuTexts[3].style.display = "none";
            break;
    }
});





window.addEventListener("load", () => {
    const mediaQuery = window.matchMedia("(min-width: 701px)");

    function handleSlider() {
        if (mediaQuery.matches) {
            const sliderContainer = document.querySelector(".slider_outer");
            const nextBtn = document.querySelector(".menu-pic-arrow2");
            let sliderStatus = 1;

            nextBtn.addEventListener("click", () => {
                switch (sliderStatus) {
                    case 1:
                        sliderStatus = 2;
                        sliderContainer.style.transform = `translateX(-${0 * 1}%)`;
                        break;
                    case 2:
                        sliderStatus = 3;
                        sliderContainer.style.transform = `translateX(-${0 * 2}%)`;
                        break;
                    case 3:
                        sliderStatus = 4;
                        sliderContainer.style.transform = `translateX(-${0 * 3}%)`;
                        break;
                }
            });
        }
    }

    // 初期処理
    handleSlider();

    // ウィンドウサイズ変更時にも対応
    mediaQuery.addEventListener("change", handleSlider);
});
