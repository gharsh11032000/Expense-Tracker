const nameBox = document.querySelector(".name-box");
const dateBox = document.querySelector(".date-box");
const amountBox = document.querySelector(".amount-box");
const btnAdd = document.querySelector(".btn-add");
const btnClear = document.querySelector(".btn-clear");
const table = document.querySelector("#table");

let totalAmount = 0;

// Event Listners
btnAdd.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    nameBox.value === "" ||
    dateBox.value === "" ||
    amountBox.value === "" ||
    amountBox.value <= 0
  ) {
    alert(
      "Please fill all the input fields correctly to add expenses. 'Thank You'"
    );
  } else {
    //Adding Table elements
    table.innerHTML += `
    <tr class="table-elements">
    <td>${nameBox.value}</td>
    <td>${dateBox.value}</td>
    <td ><span id='amount-value-table'>${amountBox.value}</span>$</td>
    <td><button id="btn-delete"><i class="fas fa-trash" style="user-select: auto;"></i></button></td>
  </tr>`;
    // Updating total ammount
    let amountValueEntered = document.querySelector("#amount-value");
    amountValueEntered.textContent = totalAmount += Number(amountBox.value);

    //Deleting table elements and Updating total amount
    const btnDelete = document.querySelectorAll("#btn-delete");
    const amountValueTable = document.querySelectorAll("#amount-value-table");
    for (let i = 0; i < btnDelete.length; i++) {
      btnDelete[i].onclick = function () {
        //Updating total amount
        amountValueEntered.textContent = totalAmount -= Number(
          amountValueTable[i].textContent
        );
        //Deleting table elements
        this.parentNode.parentNode.remove();
      };
    }
    // Clear Boxes after adding
    nameBox.value = "";
    dateBox.value = "";
    amountBox.value = "";
  }
});

btnClear.addEventListener("click", function () {
  table.innerHTML = `
  <tr>
  <th>Name</th>
  <th>Date</th>
  <th>Amount (<span id="amount-value"></span>$)</th>
  <th></th>
  </tr>`;
  totalAmount = 0;
});
