const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    const placeName = e.target.parentNode.childNodes[1].innerText;
    const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;

    const selectContainer = document.getElementById("selected-place-container");
    const li = document.createElement("li");
    const p1 = document.createElement("p");
    p1.innerText = placeName;

    const p2 = document.createElement("p");
    p2.innerText = price;

    li.appendChild(p1);
    li.appendChild(p2);

    selectContainer.appendChild(li);

    totalCost("total-cost", parseInt(price));
    grandTotal("grand-total", parseInt(price));
  });
}

function totalCost(id, value) {
  const totalCost = document.getElementById(id).innerText;
  const convertedTotalCost = parseInt(totalCost);
  const sum = convertedTotalCost + parseInt(value);
  setInnerText(id, sum);
}

function grandTotal(id, value) {
  const totalCost = document.getElementById(id).innerText;
  const convertedTotalCost = parseInt(totalCost);
  const sum = convertedTotalCost + parseInt(value);
  setInnerText(id, sum);
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
