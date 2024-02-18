//totalPrice - for totalPrice
//grandTotal - for grandTotal
const couponInp = document.getElementById('couponinp');
const availableCoupun = document.getElementById('availableCoupun');
const cupponTip = document.getElementById('cupponTip');

function activeCuppon(){
    cupponTip.innerText="Hurrah..!You are eligible for Discount";
    cupponTip.classList.remove('text-[#00000097]');
    cupponTip.classList.add('text-[#17c348fc]');
    //active input field
    couponInp.removeAttribute('disabled');
    cupponSuggistion();
    
}
function cupponSuggistion(){
    couponInp.addEventListener('focus', function(){
        availableCoupun.classList.remove('hidden');
    });
    couponInp.addEventListener('blur', function(){
        availableCoupun.classList.add('hidden');
    });
}