
  document.addEventListener("DOMContentLoaded", () => {
    let active, leftArrow, rightArrow;
    const slidesArray = Array.from(document.querySelectorAll(".slide__main-page"));
    const sliderMainPage = document.querySelector(".slider__main-page");
    const imageWidth = document.querySelectorAll(".slide__main-page img")[1].width;
    const deltaImage = imageWidth + 90;

    sliderMainPage.classList.add("skip");
    sliderMainPage.scrollLeft = imageWidth - (sliderMainPage.clientWidth - (imageWidth + 90 * 2)) / 2;
    sliderMainPage.classList.remove("skip");
    let addRight = 0;
    let addLeft = 998;

    function handleClick(event) {
      if (event.target.classList.contains("right__main-page")) {
        if (sliderMainPage.scrollWidth < sliderMainPage.scrollLeft + deltaImage * 3) {
          sliderMainPage.appendChild(slidesArray[addRight % 3].cloneNode(true));
          addRight++;
        }

        sliderMainPage.scrollLeft += deltaImage;

        document.querySelector(".right__main-page").classList.add("disabled");
        setTimeout(() => {
          document.querySelector(".right__main-page").classList.remove("disabled");
        }, 800)

      } else if (event.target.classList.contains("left__main-page")) {
        if (0 > sliderMainPage.scrollLeft - deltaImage * 2) {
          sliderMainPage.classList.add("skip");
          sliderMainPage.insertBefore(slidesArray[addLeft % 3].cloneNode(true), sliderMainPage.firstElementChild);
          addLeft--;
          sliderMainPage.scrollLeft += deltaImage;
          sliderMainPage.classList.remove("skip");
        }

        sliderMainPage.scrollLeft -= deltaImage;

        document.querySelector(".left__main-page").classList.add("disabled");
        setTimeout(() => {
          document.querySelector(".left__main-page").classList.remove("disabled");
        }, 800)
      }
    }

    document.querySelector(".slider__main-page").addEventListener("click", handleClick);
  });
