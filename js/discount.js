//totalPrice - for totalPrice
//grandTotal - for grandTotal
const couponInp = document.getElementById("couponinp");
const availableCoupun = document.getElementById("availableCoupun");
const cupponTip = document.getElementById("cupponTip");

function activeCuppon() {
  cupponTip.innerText = "Hurrah..!You are eligible for Discount";
  cupponTip.classList.remove("text-[#00000097]");
  cupponTip.classList.add("text-[#17c348fc]");
  //active input field
  couponInp.removeAttribute("disabled");
  cupponSuggistion();
  removeSuggistionByClickOutside();
  discountPolicy();
}
function cupponSuggistion() {
  couponInp.addEventListener("focus", function () {
    availableCoupun.classList.remove("hidden");
  });
}

function removeSuggistionByClickOutside() {
  document.addEventListener("click", function (e) {
    const cuuponDiv = document.getElementById("cuuponDiv");
    let targetCup = e.target;
    while (targetCup) {
      if (targetCup == cuuponDiv) {
        return;
      }
      targetCup = targetCup.parentNode;
    }
    availableCoupun.classList.add("hidden");
  });
}

function discountPolicy() {
  let myCopuns = availableCoupun.children;
  for (let myCopun of myCopuns) {
    // console.log(myCopun);
    myCopun.addEventListener("click", function (e) {
      const selectCup = e.target.innerText;
      const updateSelectCup = selectCup.trim();
      couponInp.value = updateSelectCup;
      availableCoupun.classList.add("hidden");
    });
  }
}

function applyClick() {
  const disApply = document.getElementById("disApply");
  const discountDiv = document.getElementById("discountDiv");
  const discountMoney = document.getElementById("discountMoney");
  const parentage = document.getElementById("parentage");
  const notValid = document.getElementById('notValid');
  let total = Number(totalPrice.innerText);
  let cupCode = couponInp.value;
  if (cupCode == "NEW15") {
    let off15 = 15 / 100;
    let disMoney = off15 * total;
    discountDiv.classList.remove("hidden");
    discountMoney.innerText = disMoney;
    grandTotal.innerText = total - disMoney;
    parentage.innerText = 15;
    cuuponDiv.classList.add("hidden");
    cupponTip.classList.add("hidden");
    console.log(disMoney);
  } else if (cupCode == "Couple 20") {
    let off15 = 20 / 100;
    let disMoney = off15 * total;
    discountDiv.classList.remove("hidden");
    discountMoney.innerText = disMoney;
    grandTotal.innerText = total - disMoney;
    parentage.innerText = 20;
    cuuponDiv.classList.add("hidden");
    cupponTip.classList.add("hidden");
    console.log(disMoney);
  } else {
    notValid.showModal();
  }
}
