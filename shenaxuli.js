document.addEventListener("DOMContentLoaded", function() {
  // Load header and footer HTML
  loadHTML('header.html', 'header');
  loadHTML('footer.html', 'footer');

  // Cart popup on mouseover
  document.querySelector('.cart-container').addEventListener('mouseover', function() {
    const cartPopup = document.querySelector('.cart-popup');

    if (!cartPopup.innerHTML.trim()) {
      fetch('cart.html')
        .then(response => response.text())
        .then(data => {
          cartPopup.innerHTML = data;
        })
        .catch(error => console.error('Error loading cart.html:', error));
    }
  });
});
document.addEventListener("click", function() {
  // Login pop-up functionality
  const loginButton = document.getElementById('header__log-in');
  const popUp = document.getElementById('log-in__pop-up-main-part');
  const closeButton = document.querySelector('.log-in-popup-close'); 

  // Show the pop-up when the login button is clicked
  if (loginButton) {
    loginButton.addEventListener('click', function() {
      popUp.style.display = 'block'; // Show the pop-up
    });
  }

  // Close the pop-up when the close button is clicked
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      popUp.style.display = 'none'; // Hide the pop-up
    });
  }
});



// Function to load HTML content
function loadHTML(zoomer, elementSelector) {
  fetch(zoomer)
    .then(response => response.text())
    .then(data => {
      document.querySelector(elementSelector).innerHTML = data;
    })
    .catch(error => console.log('Error loading file:', error));
}



  // Header scroll functionality
  const headerTopPart = document.querySelector(".header__top-part");
  const headerSecondLine = document.getElementById("header__second-line");

  window.onscroll = function() {
    if (window.pageYOffset > 50) {
      headerTopPart.style.display = "none"; 
      headerSecondLine.classList.add("scrolled"); 
    } else {
      headerTopPart.style.display = "flex"; 
      headerSecondLine.classList.remove("scrolled"); 
    }
  };


// Function to load HTML content into a specified element
function loadHTML(filename, elementSelector) {
  fetch(filename)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.querySelector(elementSelector).innerHTML = data;
    })
    .catch(error => console.log('Error loading file:', error));
}



document.addEventListener('DOMContentLoaded', () => {
  const allCategorySection = document.querySelector('.all-category__section-columns');

  // Fetch the JSON data from the file
  fetch('all-category.json')
      .then(response => response.json())
      .then(categories => {
          // Process and display the data
          categories.forEach(category => {
              const categoryDiv = document.createElement('div');
              categoryDiv.classList.add('category-item');
              
              const title = document.createElement('h3');
              title.textContent = category.name;
              
              const childList = document.createElement('ul');
              category.childCategories.forEach(child => {
                  const childItem = document.createElement('li');
                  childItem.textContent = child.name;
                  childList.appendChild(childItem);
              });
              
              categoryDiv.appendChild(title);
              categoryDiv.appendChild(childList);
              allCategorySection.appendChild(categoryDiv);
          });
      })
      .catch(error => {
          console.error('Error fetching the categories:', error);
      });


    });


// // // ------ Salomes part -----

let zoomerApiData = "";
let swiperObject = {
  swiper1: new Swiper(".mySwiper1", {
    slidesPerView: 6,
    direction: getDirection(),
    watchOverflow: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      resize: function () {
        this.changeDirection(getDirection());
      },
    },
  }),
  swiper2: new Swiper(".mySwiper2", {
    slidesPerView: 6,
    direction: getDirection(),

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    on: {
      resize: function () {
        this.changeDirection(getDirection());
      },
    },
  }),
  swiper3: new Swiper(".mySwiper3", {
    slidesPerView: 6,
    direction: getDirection(),

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    on: {
      resize: function () {
        this.changeDirection(getDirection());
      },
    },
  }),
  swiper4: new Swiper(".mySwiper4", {
    slidesPerView: 6,
    direction: getDirection(),
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    on: {
      resize: function () {
        this.changeDirection(getDirection());
      },
    },
  }),

  swiper5: new Swiper(".mySwiper5", {
    slidesPerView: 6,
    direction: getDirection(),
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    on: {
      resize: function () {
        this.changeDirection(getDirection());
      },
    },
  }),

  swiper6: new Swiper(".mySwiper6", {
    slidesPerView: 6,
    direction: getDirection(),
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    on: {
      resize: function () {
        this.changeDirection(getDirection());
      },
    },
  }),

  swiper7: new Swiper(".mySwiper7", {
    slidesPerView: 6,
    direction: getDirection(),
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    on: {
      resize: function () {
        this.changeDirection(getDirection());
      },
    },
  }),

  swiper8: new Swiper(".mySwiper8", {
    slidesPerView: 6,
    direction: getDirection(),
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    on: {
      resize: function () {
        this.changeDirection(getDirection());
      },
    },
  }),

  swiper9: new Swiper(".mySwiper9", {
    slidesPerView: 6,
    direction: getDirection(),
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    on: {
      resize: function () {
        this.changeDirection(getDirection());
      },
    },
  }),

  swiper10: new Swiper(".mySwiper10", {
    slidesPerView: 6,
    direction: getDirection(),
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    on: {
      resize: function () {
        this.changeDirection(getDirection());
      },
    },
  }),

  swiper11: new Swiper(".mySwiper11", {
    slidesPerView: 6,
    direction: getDirection(),
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    on: {
      resize: function () {
        this.changeDirection(getDirection());
      },
    },
  }),

  swiper12: new Swiper(".mySwiper12", {
    slidesPerView: 6,
    direction: getDirection(),
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    on: {
      resize: function () {
        this.changeDirection(getDirection());
      },
    },
  }),

  swiper13: new Swiper(".mySwiper13", {
    slidesPerView: 6,
    direction: getDirection(),
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    on: {
      resize: function () {
        this.changeDirection(getDirection());
      },
    },
  }),

  swiper14: new Swiper(".mySwiper14", {
    slidesPerView: 6,
    direction: getDirection(),
    navigation: {
      // nextEl: ".swiper-button-next",
      // prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    on: {
      resize: function () {
        this.changeDirection(getDirection());
      },
    },
  }),
};

function getDirection() {
  return window.innerWidth <= 760 ? "vertical" : "horizontal";
}

function itemHtmlGenerator(item, sectionId) {
  let itemHtml = "";
  const monthlyPrice = (item.price / 12).toFixed(2);

  let saleBadge = "";
  if (item.onSale && item.preSalePrice !== null) {
    saleBadge = `<div class="saleBadge">Sale</div>`;
  }

  let preSalePrice = "";
  if (item.hasDiscount && item.previousPrice !== null) {
    preSalePrice = `<h4 class="oldPrice">${item.previousPrice} ₾</h4>`;
  }

  let iconsGift = "";
  if (item.iconUrl) {
    iconsGift = `<div class="giftIcon">
                <img class="giftIcoImg" src="${item.iconUrl}" alt="Gift Icon" />
              </div>`;
  }

  let labelText = "";
  if (item.labelText && item.labelText.trim() !== "") {
    labelText = `<div class="bestPrice">${item.labelText}</div>`;
  }

  let priceItem = `<div class="price">
                  <h4 class="priceText">${item.price} ₾</h4>
                </div>`;
  if (item.hasDiscount && item.previousPrice !== null) {
    priceItem = `<div class="price">
    <h4 class="priceText salePrice">${item.price} ₾</h4>
    ${preSalePrice}  
  </div>`;
  }
  let addToResView = `onclick="addToRecentlyViewed(${item.id}, ${sectionId})"`;
  itemHtml += `<div class="swiper-slide" >
  <div id="product-${item.id}" class="mainCardbox">
   <div class="imgAndPricePart" ${sectionId ? addToResView : ""}>
    <img class="slider--img" src="${item.imageUrl}" alt="${item.name}" />
    ${saleBadge}
    ${labelText}
    <div class="price-description">
      ${priceItem}
      <p class="monthlyPrice">თვეში: <span>${monthlyPrice} ₾</span> -დან</p>
      <a title="${item.name}" class="cardTitle" href="#">
        ${item.name}
      </a>
    </div>
   </div>
    <div class="iconsBox">
      <div class="compiars">
        <img src="https://zoommer.ge/icons/compare-card.svg" alt="" />
      </div>
      <div class="addCart">
        <img src="https://zoommer.ge/icons/cart-button.svg" alt="" />
        <h4 class="addButtonText">დამატება</h4>
      </div>
      ${iconsGift}
    </div>
  </div>
</div>`;

  return itemHtml;
}

function addToRecentlyViewed(productId, sectionId) {
  const section = zoomerApiData.section.find(
    (sectionItem) => sectionItem.id === sectionId
  );
  if (!section) return;

  const item = section.products.find((item) => item.id === productId);

  if (!item) return;

  /** get recently viewed list from localstorage */
  let lastviewedArray = [];
  let lastview = getLastViewedItems();
  if (lastview) {
    lastviewedArray = lastview;
    /** check if current item exists in existing viewed list if exists return */
    if (lastviewedArray.find((lastviewItemId) => lastviewItemId === productId))
      return;
    /** add current item in existing viewed list if not exists */
    if (lastviewedArray.length === 6) {
      lastviewedArray.splice(0, 1);
      swiperObject.swiper14.removeSlide(0);
    }
    lastviewedArray.push(item.id);
    localStorage.setItem("recentlyViewed", JSON.stringify(lastviewedArray));

    swiperObject.swiper14.appendSlide(itemHtmlGenerator(item));
  } else {
    /** create recently viewed list if not exists */
    lastviewedArray.push(item.id);
    localStorage.setItem("recentlyViewed", JSON.stringify(lastviewedArray));
    swiperObject.swiper14.appendSlide(itemHtmlGenerator(item));
  }
}

//** add last viewed data to swiper */
function showRecentlyVieweds() {
  swiperObject.swiper14.removeAllSlides();
  const lastViewed = getLastViewedItems();
  if (lastViewed) {
    for (const section of zoomerApiData.section) {
      if (section.products) {
        for (const pitem of section.products) {
          if (
            lastViewed.find((lastviewItemId) => lastviewItemId === pitem.id)
          ) {
            swiperObject.swiper14.appendSlide(itemHtmlGenerator(pitem));
          }
        }
      }
    }
  }
}

function getLastViewedItems() {
  let lastview = localStorage.getItem("recentlyViewed");
  if (lastview) return JSON.parse(lastview);
  return null;
}

function brandsHtmlGenerator() {}

async function getDataFromZoommerApi() {
  try {
    const response = await fetch("data.json");
    zoomerApiData = await response.json();

    console.log(zoomerApiData);
    let itemIndex = 1;
    for (const section of zoomerApiData.section) {
      if (section.products) {
        for (let item of section.products) {
          swiperObject["swiper" + itemIndex].appendSlide(
            itemHtmlGenerator(item, section.id)
          );
        }
        itemIndex++;
      }
      if (section.brands) {
        for (let item of section.brands) {
          //TODO move this line to brandsHtmlGenerator() function
          let slideContent = `<div class="swiper-slide"><img src="${item.imageUrl}" class="brand--img" alt="Brand Image"></div>`;
          swiperObject["swiper" + itemIndex].appendSlide(slideContent);
        }
        itemIndex++;
      }
    }
    //call showRecentlyVieweds function
    showRecentlyVieweds();
  } catch (e) {
    console.log(e);
  }

};
getDataFromZoommerApi().then();

