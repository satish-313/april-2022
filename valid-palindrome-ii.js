const validPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  function isValid(s,l, r) {
    while (l < r) {
      if (s.charAt(l) != s.charAt(r)) {
        return false;
      }
      l += 1;
      r -= 1;
    }

    return true;
  }

  while (left < right) {
    if (s.charAt(left) != s.charAt(right)) {
      return isValid(s,left + 1, right) || isValid(s,left, right - 1);
    }

    left += 1;
    right -= 1;
  }

  return true;
};

console.log(validPalindrome("deeee"));
