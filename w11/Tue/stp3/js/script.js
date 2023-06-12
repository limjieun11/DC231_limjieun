let aCard = document.querySelector(".card");
console.log(aCard);

let cards = document.querySelectorAll(".card");
console.log(cards);
console.log(cards[0]);
console.log(cards[1]);
console.log(cards[2]);
// for 구문 사용 여러개 쓸때
// for(let idx = 0; idx < cards.length; idx++) {
//   cards[idx].onclick = (e) => {
//     e.currentTarget.classList.toggle(
//       "card-selected"
//     )
//   }
// }

// forEach 구문 사용.여러개 사용할때 (또는 for)
cards.forEach((eachCard) => {
  eachCard.onclick = function (e) {
    e.currentTarget.classList.toggle(
      "card-selected"
    );
  };
});

// let elem = document.getElementById("card1");
// elem.onclick = () => {
//   elem.classList.toggle("card-selected");
// };
// elem.onclick = function() = {}
// ()넣어줄 값 , {}할당할 값
