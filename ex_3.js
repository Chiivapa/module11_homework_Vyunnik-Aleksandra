function getSum (num_1) {
  return function (num_2) {
    return num_1 + num_2;
  }
}

console.log(getSum(2)(5));
