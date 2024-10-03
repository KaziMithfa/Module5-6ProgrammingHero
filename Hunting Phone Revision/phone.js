//load phone function here...

const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  console.log(phones);
  loadResults(phones, isShowAll);
};

//function loadResults

const loadResults = (phones, isShowAll) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerText = "";

  const showAllContainer = document.getElementById("show-all-container");

  if (phones.length > 12 && !isShowAll) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }

  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 w-96 mt-2 shadow-xl`;
    phoneCard.innerHTML = `

     <figure>
    <img src="${phone.image}" />
    </figure>
    <div class="card-body">
     <h2 class="card-title">${phone.phone_name}</h2>
     <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
    <button onclick = "handleShowDetails('${phone.slug}')" class="btn btn-primary" >Show Details</button>
    </div>
    </div>`;

    phoneContainer.appendChild(phoneCard);
  });

  //stop the loading bar
  loadingSpinner(false);
};

//handle search button function

const handleSearch = (isShowAll) => {
  loadingSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhone(searchText, isShowAll);
};

//loadingSpinner

const loadingSpinner = (isLoading) => {
  const spinner = document.getElementById("loading-spinner");

  if (isLoading) {
    spinner.classList.remove("hidden");
  } else {
    spinner.classList.add("hidden");
  }
};

const handleShowAll = () => {
  handleSearch(true);
};

//here we are showing the details when we are clicking on any picture

const handleShowDetails = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phone = data.data;
  console.log(phone);
  showPhoneDetails(phone);
};

const showPhoneDetails = (phone) => {
  const phoneName = document.getElementById("show-detail-phone-name");
  phoneName.innerText = phone.name;

  const showDetailContainer = document.getElementById("show-detail-container");
  showDetailContainer.innerHTML = `
    <img src="${phone.image}" alt="">

    `;

  showDetails_modal.showModal();
};
