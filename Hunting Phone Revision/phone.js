//load phone function here...

const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
};

//handle search button function

const handleSearch = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
};
