function letCheckCount(x) {
    if (x > 1000 || x === 0) {
    console.log("Введеные данные некорректны");
  } else if (x === 1) {
    console.log("Число не является ни простым, ни составным");  
  } else if (x % 2 === 0) {
    console.log("Число составное");
  } else {
    console.log ("Число простое")
  }
};

letCheckCount(33);
