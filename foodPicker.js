const breakfast = ['Eggs/Toast', 'Breakfast Sandwich', 'Hot/Cold Cereal', 'Smoothie', 'Go out!'];
const lunch = ['Hot Sandwich', 'Cold Sandwich', 'Chili/Mac n Cheese', 'Frozen food', 'Go out!'];
const dinner = ['Italian', 'Mexican', 'American', 'Chinese', 'Go out!'];

function randomSelector (list) {
  return list[Math.floor((Math.random()*list.length))];
}

class Meals{
constructor(breakfast, lunch, dinner) {
  this.breakfast = breakfast;
  this.lunch = lunch;
  this.dinner = dinner;
}
}

const whatToEat = new Meals([randomSelector(breakfast)], [randomSelector(lunch)], [randomSelector(dinner)]);

const populate = () => whatToEat;