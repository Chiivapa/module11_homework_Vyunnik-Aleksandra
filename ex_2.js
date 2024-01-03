let x = "";
function letCheckCount(x) {
    if (x > 1000 || x === 0) {
    console.log("Введеные данные некорректны");
  } else if (x % 2 === 0) {
    console.log("Число составное");
  } else {
    console.log ("Число простое")
  }
};

letCheckCount(5);
