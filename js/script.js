function total() {
  let price;
  let value;
  price = document.getElementById("price").value;
  value = document.getElementById("value").value;
  const regular = /^[1-9][0-9]*$/;
  if (!regular.test(price) || !regular.test(value)) {
    alert("only positive numbers");
    return true;
  }
  let totalResult = document.getElementById("result");
  totalResult.innerHTML = parseInt(price) * parseInt(value);
  return false;
}
window.addEventListener('DOMContentLoaded', function (total) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("result-btn");
  b.addEventListener("click", total);
});

function updatePrice() {
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }
  let quantity = Number(document.getElementById('select_input').value);
  let check_div_Div = document.querySelectorAll('#check_div input');
  check_div_Div.forEach(function (checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) { price += propPrice; }
    }
  });
  let radio_options = document.getElementsByName('radio_options');
  let k = 0;
  radio_options.forEach(function (radio) {
    if (radio.checked) {
      let optionPrice = prices.radio_options[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;

      }
    }
  });


  let cou = document.getElementById('select_input');
  cou.addEventListener('input', function () { updatePrice(); });
  let s = document.getElementsByName('type');
  s[0].addEventListener('change', function (event) {
    let select = event.target;
    let radio_div = document.getElementById('radio_div');
    let check_div = document.getElementById('check_div');
    if (select.value === '1') {
      radio_div.style.display = 'none';
      check_div.style.display = 'none';
      radio_id();
      check_div_hide();
      document.getElementById('price2').innerHTML =
        'price: ' + prices.prodTypes[0] * quantity + '$';
    }
    else if (select.value === '2') {
      check_div_hide();
      radio_div.style.display = 'block';
      check_div.style.display = 'none';
      document.getElementById('price2').innerHTML =
        'price: ' + prices.prodTypes[1] * quantity + '$';
    }
    else if (select.value === '3') {
      radio_div.style.display = 'none';
      check_div.style.display = 'block';
      radio_id();
      document.getElementById('price2').innerHTML =
        'price: ' + prices.prodTypes[2] * quantity + '$';
    } else {
    }
  });
  let price_pr = document.getElementById('price2');
  price_pr.innerHTML = 'price: ' + price * quantity + '$';
}
function getPrices() {
  return {
    prodTypes: [2089000000, 90000000, 95000000],
    radio_options: {
      delivery: 120000000 ,
      taxi: 100000000,
      deepcosmos: 4090000000,
    },
    prodProperties: {
      seats: 140000000,
      engine: 128000000,
      spaceship: 15000000000,
    },
  };
}
let elm = document.getElementById('radio_id');
elm.style.display = 'none';
function radio_id() {
  elm.checked = !elm.checked;
}
function check_div_hide() {
  document.getElementById('seats').checked = false;
  document.getElementById('engine').checked = false;
  document.getElementById('spaceship').checked = false;
}



window.addEventListener('DOMContentLoaded', function () {



  let radioDiv = document.getElementById('radio_div');
  radioDiv.style.display = 'none';

  let check_div = document.getElementById('check_div');
  check_div.style.display = 'none';

  let s = document.getElementsByName('type');
  let select = s[0];

  select.addEventListener('change', function () {
    updatePrice();
  });
  let radio_options = document.getElementsByName('radio_options');
  radio_options.forEach(function (radio) {
    radio.addEventListener('change', function () { updatePrice(); });
  });
  let sniper_option = document.querySelectorAll('#check_div input');
  sniper_option.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () { updatePrice(); });
  });
  updatePrice();
});
