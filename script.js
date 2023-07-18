'use strict';

let turn = 0;
let complete = false;
document.querySelector('.btn--new').addEventListener('click', function () {
  const playerScore = document.querySelectorAll('.current-score');

  for (let i = 0; i < playerScore.length; i++) {
    playerScore[i].textContent = '0';
  }

  document.querySelector('#score--0').textContent = '0';
  document.querySelector('#score--1').textContent = '0';

  if (
    document
      .querySelector(`.player--${turn}`)
      .classList.contains('player--winner') == true
  ) {
    document
      .querySelector(`.player--${turn}`)
      .classList.remove('player--winner');
    document.querySelector(`.player--${turn}`).classList.remove('name');
  }

  //   if (
  //     document
  //       .querySelector('.player--1')
  //       .classList.contains('.player--winner') == true
  //   ) {
  //     document.querySelector('.player--1').classList.remove('.player--winner');
  //     document.querySelector('.player--1').classList.remove('.name');
  //   }

  if (document.querySelector('.dice').classList.contains('hidden') == false) {
    document.querySelector('.dice').classList.add('hidden');
  }
  document.querySelector(`.player--${turn}`).classList.remove('player--active');
  turn = 0;
  document.querySelector(`.player--${turn}`).classList.add('player--active');
  complete = false;
});

document.querySelector('.btn--roll').addEventListener('click', function () {
  let dice = Math.round(Math.random() * 5) + 1;

  if (complete == true) {
    return;
  }
  if (document.querySelector('.dice').classList.contains('hidden') == true) {
    document.querySelector('.dice').classList.remove('hidden');
  }

  document.querySelector('.dice').src = `dice-${dice}.png`;
  console.log(document.querySelector('.dice').src);

  if (dice > 1) {
    let temp = document.querySelector(`#current--${turn}`).textContent;
    temp = Number(temp);
    // console.log(typeof dice);
    temp += dice;
    document.querySelector(`#current--${turn}`).textContent = temp;
  } else {
    document.querySelector(`#current--${turn}`).textContent = '0';

    if (
      document
        .querySelector(`.player--${turn}`)
        .classList.contains('player--active') == true
    ) {
      document
        .querySelector(`.player--${turn}`)
        .classList.remove('player--active');
      //   console.log('*');
    }

    turn = 1 - turn;
    console.log(turn);
    document.querySelector(`.player--${turn}`).classList.add('player--active');
    console.log(document.querySelector(`.player--${turn}`).classList);
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (complete == true) {
    return;
  }

  let u = document.querySelector(`#score--${turn}`).textContent;
  let v = document.querySelector(`#current--${turn}`).textContent;
  u = Number(u);
  v = Number(v);
  u = u + v;
  v = 0;
  document.querySelector(`#score--${turn}`).textContent = u;
  document.querySelector(`#current--${turn}`).textContent = '0';

  if (u >= 100) {
    complete = true;
    document.querySelector(`.player--${turn}`).classList.add('player--winner');

    if (document.querySelector('.dice').classList.contains('hidden') == false) {
      document.querySelector('.dice').classList.add('hidden');
    }

    return;
  }
  if (
    document
      .querySelector(`.player--${turn}`)
      .classList.contains('player--active') == true
  ) {
    document
      .querySelector(`.player--${turn}`)
      .classList.remove('player--active');
    //   console.log('*');
  }

  turn = 1 - turn;
  console.log(turn);
  document.querySelector(`.player--${turn}`).classList.add('player--active');
  console.log(document.querySelector(`.player--${turn}`).classList);
});
