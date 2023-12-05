var bannerHomeSwiper = new Swiper(".homepageBannerSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true
  });

var topheader = new Swiper(".topheader", {
    loop: true,
    allowTouchMove: false,
    slidesPerView: 2,
    speed: 8000,
    autoplay: {
        delay: 0,
    },
    });

var aboutTextInfinite = new Swiper(".aboutTextInfinite", {
    loop: true,
    allowTouchMove: false,
    speed: 12000,
    autoplay: {
        delay: 0,
    },
    breakpoints: {
        240: {
            slidesPerView: 0.7,
        },
        768: {
            slidesPerView: 1.2,
        }
    }
    });

let selectArr = []
const searchTourUl = document.querySelectorAll('.banner-search-tour-input-choose')
const searchTourSelect = document.querySelectorAll('.banner-search-tour-input-label svg')
searchTourSelect.forEach((item, index) => {
    selectArr[index] = false
    item.addEventListener('click', () => {
        if(!selectArr[index]){
            searchTourUl[index].style.visibility = 'visible'
            searchTourUl[index].style.opacity = '1'
            selectArr[index] = true
        }
        else{
            searchTourUl[index].style.visibility = 'hidden'
            searchTourUl[index].style.opacity = '0'
            selectArr[index] = false
        }
    })
})

var popularTourSwiper = new Swiper(".popularTours", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true
  });

const popularTourSlide = document.querySelectorAll('.popularTours .swiper-slide')
popularTourSlide.forEach((itm,indx) => {
    const tourThumbs = itm.querySelectorAll('.tour-info-thumbs>div')
    const mainPicture = itm.querySelectorAll('.main-picture>img')
    if(tourThumbs[0]){
        tourThumbs[0].classList.add('active')
    }
    if(mainPicture[0]){
        mainPicture[0].classList.add('active')
    }
    tourThumbs.forEach((item,index) => {
        item.addEventListener('click', () => {
            for(i=0; i<tourThumbs.length; i++){
                if(i===index){
                    tourThumbs[i].classList.add('active')
                    mainPicture[i].classList.add('active')
                }
                else{
                    tourThumbs[i].classList.remove('active')
                    mainPicture[i].classList.remove('active')
                }
            }
        })
    })
})

const destinationBtn = document.querySelectorAll(".tour-info-detail>.tour-info-detail-item:nth-child(3) button")
const destinationPopup = document.querySelectorAll(".tour-destination-popup")

let destinationPopupOpen = []
destinationBtn.forEach((item, index) => {
    destinationPopupOpen[index] = false
    item.addEventListener('click', () => {
        if(!destinationPopupOpen[index]){
            destinationPopup[index].classList.add("active")
            destinationPopupOpen[index] = true
        }
        else{
            destinationPopup[index].classList.remove("active")
            destinationPopupOpen[index] = false
        }
    })
})

const tourListSwiper = document.querySelectorAll(".tourListSwiper")
tourListSwiper.forEach((item,index) => {
    var tourItemSwiper = new Swiper(item, {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            240: {
                slidesPerView: 1.15,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        }
      });
})

const amazingDestinationSelect = document.querySelectorAll('.amazing-destinations-input')
let amazingDestinationUlOPen = []
amazingDestinationSelect.forEach((item, index) => {
    amazingDestinationUlOPen[index] = false
    const listSelect = item.querySelectorAll("ul li")
    const btnDropdown = item.querySelector(".amazing-destinations-input-selected svg")
    btnDropdown.addEventListener('click', () => {
        if(!amazingDestinationUlOPen[index]){
            item.querySelector('ul').style.opacity = '1'
            amazingDestinationUlOPen[index] = true
        }
        else{
            item.querySelector('ul').style.opacity = '0'
            amazingDestinationUlOPen[index] = false
        }
    })
    item.querySelector('.amazing-destinations-input-selected span').innerText = listSelect[0].innerText
    listSelect.forEach((itm, indx) => {
        itm.addEventListener('click', () => {
            item.querySelector('.amazing-destinations-input-selected span').innerText = itm.innerText
        })
    })
})

var aDestinationSwiper = new Swiper(".amazingDestinationSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        240: {
            slidesPerView: 1.1,
            spaceBetween: 16
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
  });

  const amazingTourSlide = document.querySelectorAll('.amazingDestinationSwiper .swiper-slide')
  amazingTourSlide.forEach((itm,indx) => {
      const tourThumbs = itm.querySelectorAll('.tour-info-thumbs>div')
      const mainPicture = itm.querySelectorAll('.amazing-destination-item-picture>img')
      if(tourThumbs[0]){
          tourThumbs[0].classList.add('active')
      }
      if(mainPicture[0]){
          mainPicture[0].classList.add('active')
      }
      tourThumbs.forEach((item,index) => {
          item.addEventListener('click', () => {
              for(i=0; i<tourThumbs.length; i++){
                  if(i===index){
                      tourThumbs[i].classList.add('active')
                      mainPicture[i].classList.add('active')
                  }
                  else{
                      tourThumbs[i].classList.remove('active')
                      mainPicture[i].classList.remove('active')
                  }
              }
          })
      })
  })

  var tourGuideSwiper = new Swiper(".tourGuideSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        240: {
            slidesPerView: 1.4,
            spaceBetween: 16
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 24
        }
    }
  });

  var ourMotorbikeSwiper = new Swiper(".ourMotobikeSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        240: {
            slidesPerView: 1.1,
            spaceBetween: 16
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24
        }
    }
  });

  var maybeYdkSwiper = new Swiper(".maybeYdkSwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const faqList = document.querySelectorAll(".faq-item")
  const faqListDes = document.querySelectorAll(".faq-item p")
  const faqBtn = document.querySelectorAll(".faq-item-btn>svg:nth-child(2)")
  const faqBtnMinus = document.querySelectorAll(".faq-item-btn>svg:nth-child(1)")

  const bestVietNamBtn = document.querySelector(".best-vietname-mb button")
  bestVietNamBtn.addEventListener('click', () => {
    bestVietNamBtn.style.display = 'none'
    document.querySelector(".best-vietname-mb p").classList.add("active")
  })

  var tourToJoinSwiper = new Swiper('.tourToJoinSwiper', {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        240: {
            slidesPerView: 1.15,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    }
  });

  const availableJoinItem = document.querySelectorAll(".available-join-time-item")
  availableJoinItem[10].classList.add("active")

  document.querySelector(".about-mte-description-button-mb").addEventListener('click', () => {
    document.querySelector(".about-mte-description").style.height = 'fit-content'
    document.querySelector(".about-mte-description-button-mb").style.display = 'none'
  })

  const tourCategory = document.querySelectorAll(".tourList-category")
  const tourListFilter = document.querySelectorAll(".tourList-filter-category-item")
  function myFunction(x) {
    if (x.matches) { // If media query matches
        if(faqList[0] && faqListDes[0]){
            faqList[0].style.paddingBottom = `${faqListDes[0].offsetHeight}px`
            faqList[0].classList.add("active")
        }
        faqBtn.forEach((item, index) => {
            item.addEventListener('click', () => {
                faqList[index].style.paddingBottom = `${faqListDes[index].offsetHeight}px`
                faqList[index].classList.add("active")
                for(let i=0; i<faqBtn.length; i++) {
                    if(i!=index){
                        faqList[i].style.paddingBottom = '0px'
                        faqList[i].classList.remove("active")
                    }
                }
            })
        })
        if(tourCategory[0]){
            tourCategory[0].classList.add('active')
            tourListFilter[0].classList.add('active')
        }
        tourListFilter.forEach((item, index) => {
            item.addEventListener('click', () => {
                item.classList.add("active")
                tourCategory[index].classList.add("active")
                for(let i=0; i<tourListFilter.length; i++){
                    if(i!=index){
                        tourListFilter[i].classList.remove("active")
                        tourCategory[i].classList.remove("active")
                    }  
                }
            })
        })
    } else {
        if(faqList[0] && faqListDes[0]){
            faqList[0].style.paddingBottom = `${faqListDes[0].offsetHeight}px`
            faqList[0].classList.add("active")
          }
          if(faqList[1] && faqListDes[1]){
            faqList[1].style.paddingBottom = `${faqListDes[1].offsetHeight}px`
            faqList[1].classList.add("active")
          }
          faqBtn.forEach((item, index) => {
            item.addEventListener('click', () => {
                if(index%2==0){
                    if(faqBtn[index+1]){
                        faqList[index+1].style.paddingBottom = `${faqListDes[index+1].offsetHeight}px`
                        faqList[index+1].classList.add("active")
                    }
                }
                else{
                    if(faqBtn[index-1]){
                        faqList[index-1].style.paddingBottom = `${faqListDes[index-1].offsetHeight}px`
                        faqList[index-1].classList.add("active")
                    }
                }
                faqList[index].style.paddingBottom = `${faqListDes[index].offsetHeight}px`
                faqList[index].classList.add("active")
                for(let i=0; i<faqBtn.length; i++) {
                    if(index%2==0){
                        if(i!=index && i!=index+1){
                            faqList[i].style.paddingBottom = '0px'
                            faqList[i].classList.remove("active")
                        }
                    }
                    else{
                        if(i!=index && i!=index-1){
                            faqList[i].style.paddingBottom = '0px'
                            faqList[i].classList.remove("active")
                        }
                    }
                }
            })
          })
    //   document.body.style.backgroundColor = "pink";
    }
  }
  
  // Create a MediaQueryList object
  var mediaScreen = window.matchMedia("(max-width: 767px)")
  
  // Call listener function at run time
  myFunction(mediaScreen);
  
  // Attach listener function on state changes
  mediaScreen.addEventListener("change", function() {
    myFunction(mediaScreen);
  });

//  
let isOpenDropdownInfo = false;
let isOpenDropdownTour = false;

function showDropdownFooter(){
    let labelInfoDropdown = document.getElementById("inforFooterDropdown");
    let dropdownInfor = document.getElementById("dropdownInfoFooter");

    if(isOpenDropdownInfo) {
        isOpenDropdownInfo = false;
        labelInfoDropdown.style.paddingBottom = "0px";
    }
    else {
        isOpenDropdownInfo = true;
        labelInfoDropdown.style.paddingBottom = `${dropdownInfor.offsetHeight}px`;
    }
}

function showDropdownTourFooter(){
    let labelInfoDropdown = document.getElementById("labelTourDropdownFooter");
    let dropdownInfor = document.getElementById("dropdownTourFooter");

    if(isOpenDropdownTour) {
        isOpenDropdownTour = false;
        labelInfoDropdown.style.paddingBottom = "0px";
    }
    else {
        isOpenDropdownTour = true;
        labelInfoDropdown.style.paddingBottom = `${dropdownInfor.offsetHeight}px`;
    }
}

document.querySelector(".menu-trigger").addEventListener('click', () => {
    document.querySelector(".tab-menu").style.transform = 'translateX(0)'
})
document.querySelector(".tab-menu .header-logo svg").addEventListener('click', () => {
    document.querySelector(".tab-menu").style.transform = 'translateX(-100%)'
})

const tourInfoPopup = document.querySelectorAll(".tourList-slide-info-img-hover")
const seeDetailBtn = document.querySelectorAll(".tour-item-btn>div")
let tourInfoPopupOpen = []
seeDetailBtn.forEach((item, index) => {
    tourInfoPopupOpen[index] = false
    item.addEventListener('click', () => {
        if(!tourInfoPopupOpen[index]){
            console.log(tourInfoPopup[index])
            tourInfoPopup[index].style.opacity = '1'
            for(let i=0; i<seeDetailBtn.length; i++){
                if(i!=index){
                    tourInfoPopup[i].style.opacity = '0'
                }
            }
            tourInfoPopupOpen[index] = true
        }
        else{
            tourInfoPopup[index].style.opacity = '0'
            tourInfoPopupOpen[index] = false
        }
    })
})