import {basket} from "../Handles"


let tg = window.Telegram.WebApp;

tg.expand(); //расширяем на все окно 

tg.MainButton.setParams({
	"text": "View Order",
	"textColor": "white",
	"color": "#4BE300",
})
let usercard = document.getElementById("usercard"); // получаем блок usercard

if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) {
  let profName = document.createElement('p'); // создаем параграф
  profName.innerText = `${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
  // выводим имя, "фамилию", через тире username и код языка
  usercard.appendChild(profName); // добавляем
} else {
  console.error('Данные пользователя не доступны');
}

window.Telegram.WebApp.onEvent('mainButtonClicked', function(){
    let data = {
        basketData: basket.getAllObjects(),
    };

    tg.sendData(JSON.stringify(data));
});


export default tg