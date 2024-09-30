const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones, isShowAll);
};

const displayPhones = (phones, isShowAll) => {
  console.log(phones);
  //1.
  const phoneContainer = document.getElementById("phone-container");
  // clear phone container before adding new cards

  phoneContainer.textContent = "";

  //display show all button if there are more than 12 photos
  const showAllContainer = document.getElementById("show-all-container");
  if (phones.length > 12 && !isShowAll) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }

  //console.log("is show all ", isShowAll);

  //display only first 12 phones if not show All

  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    //step by step designing
    // 2. create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 p-4 shadow-xl`;

    //3. set inner HTML
    phoneCard.innerHTML = `<figure>
    <img src="${phone.image}"
    alt="Shoes" />
    </figure>
    <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-center">
    <button onclick = "handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
    </div>
    </div>`;

    phoneContainer.appendChild(phoneCard);
  });
  //hide loading spinner
  toogleLoadingSpinner(false);
};

// loadPhone();

//handle search button
const handleSearch = (isShowAll) => {
  toogleLoadingSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText, isShowAll);
};

const toogleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

// handle show All

const handleShowAll = () => {
  handleSearch(true);
};

const handleShowDetails = async (id) => {
  //console.log(id);
  //load single data
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phone = data.data;
  showPhoneDetails(phone);
};

const showPhoneDetails = (phone) => {
  //show the modal
  console.log(phone);

  const phoneName = document.getElementById("show-detail-phone-name");
  phoneName.innerText = phone.name;

  const showDetailContainer = document.getElementById("show-detail-container");
  showDetailContainer.innerHTML = `
  <img src="${phone.image}" alt="">
  <p><span class = 'font-bold'>Storage: </span>${phone?.mainFeatures?.storage}</p>
  

  `;

  showDetails_modal.showModal();
};
