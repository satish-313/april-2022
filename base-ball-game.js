const calPoints = (ops) => {
  const stack = [];

  for (let ele of ops) {
    if (ele === "+") {
      let temp =
        (stack[stack.length - 1] ? stack[stack.length - 1] : 0) +
        (stack[stack.length - 2] ? stack[stack.length - 2] : 0);
      stack.push(temp);
    } else if (ele === "D") {
      let temp = stack[stack.length - 1] ? stack[stack.length - 1] : 0;
      stack.push(temp * 2);
    } else if (ele === "C") {
      stack.pop();
    } else stack.push(parseInt(ele));
  }

  console.log(stack);
  return stack.reduce((total, x) => x + total, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
