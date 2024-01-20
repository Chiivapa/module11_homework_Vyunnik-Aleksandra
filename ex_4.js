function func(a, b) {
  const intervalId = setInterval(function () {       
    console.log(a);
    if (a == b) {
      clearInterval(intervalId);
    }
    a++;
  }, 100);
}

func(2, 10);
