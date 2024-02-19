// ticket count
const seats = document.querySelectorAll(".seat");
const seatLeft = document.getElementById("seatLeft");
const totalSelectedSeat = document.getElementById("totalSelectedSeat");
const totalPrice = document.getElementById("totalPrice");
const grandTotal = document.getElementById("grandTotal");
const listTable = document.getElementById("listTable");
const moreSelect = document.getElementById("my_modal");
var seatCount = 0;
var sum = 0;

for (let seat of seats) {
  seat.addEventListener("click", function (e) {
    if (!e.target.classList.contains("activeSeat")) {
      seatCount++;
      if (seatCount < 5) {
        e.target.classList.add("activeSeat"); //highlight the active one
        let leftSeat = Number(seatLeft.innerText);
        let newLeftSeat = leftSeat - 1;
        seatLeft.innerText = newLeftSeat;
        totalSelectedSeat.innerText = seatCount;
        sum = sum + 550;
        totalPrice.innerText = sum;
        grandTotal.innerText = sum;
        createItemList(e);
      } else {
        moreSelect.showModal();
      }
    }
  });
}

function createItemList(e) {
  let value = e.target.innerText;
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.innerText = value;
  tr.appendChild(td1);
  const td2 = document.createElement("td");
  td2.innerText = "Economy Class";
  tr.appendChild(td2);
  const td3 = document.createElement("td");
  td3.innerText = "550";
  tr.appendChild(td3);
  listTable.appendChild(tr);
}

//next part
const phone = document.getElementById("phone");
const phoneToolTip = document.getElementById("phoneToolTip");
const next = document.getElementById("next");

// Tool Tip activity
phone.addEventListener("keyup", function (e) {
  if (e.target.value.length !== 11) {
    phoneToolTip.classList.remove("hidden");
    next.setAttribute("disabled", true);
  } else {
    phoneToolTip.classList.add("hidden");
    if (seatCount > 0) {
      next.removeAttribute("disabled");
    }
  }
});

// Next btn activity
document.addEventListener("click", function () {
  if (
    Number(totalSelectedSeat.innerText) > 0 &&
    phoneToolTip.classList.contains("hidden")
  ) {
    next.removeAttribute("disabled");
    const confirmPopup = document.getElementById('confirmPopup');
    next.addEventListener('click',function (){
      confirmPopup.showModal();
    })
   
  }
  //calling cuppon field when selected 4 cuppon
  if (seatCount == 4) {
    activeCuppon();
  }
});
