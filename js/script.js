// ობიექტების წამოღება JSON ფაილიდან
async function populateCards() {
  try {
    // JSON data-ს წამოღება courses.json ფაილიდან
    const response = await fetch("courses.json");
    const cardData = await response.json();

    // მშობელი ელემენტის დაჭერა
    const container = document.querySelector(".grid-9--col");

    // ფრაგმენტის შექმნა
    const fragment = document.createDocumentFragment();

    // card element-ების შექმნა
    cardData.forEach((card) => {
      const cardHTML = createCardElement(card);
      fragment.appendChild(
        new DOMParser().parseFromString(cardHTML, "text/html").body.firstChild
      );
    });

    // ფრაგმენტის კონტეინერზე მიბმა
    container.appendChild(fragment);
  } catch (error) {
    console.error("Error fetching: ", error);
  }
}

// ფუნქცია, რომელიც ქმნის ერთ ცალ card ელემენტს, მიწოდებული data-დან გამომდინარე
function createCardElement(card) {
  return `
    <div class="course">
      <img
        src="${card.imageSrc}"
        class="course-img"
        alt="${card.title}"
      />
      <div class="course-details">
        <h2>${card.title}</h2>
        <p>${card.registrationDate}</p>
        <a href="#" class="course-link"><ion-icon name="arrow-forward-outline"></ion-icon>კურსის დეტალები</a>
      </div>
    </div>
  `;
}

populateCards();

/////////////////////////////////
// Anchor tags
/////////////////////////////////

// preventDefault
const allAnchorTags = document.querySelectorAll("a");

allAnchorTags.forEach((tag) =>
  tag.addEventListener("click", (e) => e.preventDefault())
);

/////////////////////////////////
// slider
/////////////////////////////////

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 10,
    },
    // when window width is <= 640px
    750: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 20,
    },
    // when window width is <= 991px
    991: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
    },
  },
});

/////////////////////////////////
// ხშრირად დასმული კითხვები - FAQ
/////////////////////////////////

const faqs = [
  {
    title: "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?",
    text: [
      "კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი: ",
      "I ეტაპი - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა.",
      "II ეტაპი - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.",
      "III ეტაპი - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.",
      "IV ეტაპი - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.",
      " * სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა.",
    ],
  },
  {
    title: "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?",
    text: "TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.",
  },
  {
    title: "რა ღირს სწავლა პროგრამის ფარგლებში?",
    text: "პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.",
  },
];

const faqContainer = document.getElementById("faq-container");

let openItem = null;

faqs.forEach((faq) => {
  const temp = `
    <div class="item">
        <p class="title">${faq.title}</p>
        <span class="icon flex-end">
            <ion-icon name="chevron-down-outline"></ion-icon>
        </span>
        <div class="content-box">${
          Array.isArray(faq.text)
            ? faq.text.map((item) => `<p>${item}</p>`).join("")
            : `<p>${faq.text}</p>`
        }</div>
    </div>
  `;

  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = temp;

  const item = tempContainer.firstElementChild;
  faqContainer.appendChild(item);

  item.addEventListener("click", function (e) {
    const answer = item.querySelector(".content-box");
    const icon = item.querySelector("ion-icon");

    // Close the previously open item
    if (openItem && openItem !== item) {
      const prevAnswer = openItem.querySelector(".content-box");
      const prevIcon = openItem.querySelector("ion-icon");

      prevAnswer.classList.remove("active");
      prevIcon.setAttribute("name", "chevron-down-outline");
    }

    answer.classList.toggle("active");

    // Toggle the icon by changing its name attribute
    if (icon.getAttribute("name") === "chevron-down-outline") {
      icon.setAttribute("name", "chevron-up-outline");
    } else {
      icon.setAttribute("name", "chevron-down-outline");
    }

    openItem = item; // Update the currently open item
  });
});

//////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // inside of viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  // console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
