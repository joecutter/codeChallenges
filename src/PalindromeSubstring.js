function countPalindromes(s) {
  // Write your code here

  let count = [];

  for (let i = 0; i < s.length; i++) {
    for(let j=0; j<s.length -1; j++){
      let subString = s.subString(j, j+1)

      if(isPalindrome(subString,count)){
        count++;
      }
    }
  }

  return count;
}

function isPalindrome(text, strings) {
  return text === reverse(text) && !strings.includes(text);
}

function reverse(text) {
  return text.split("").reverse().join("");
}

function center(string, i) {
  count = 0;

  for (var j = 1; i - j >= 0 && i + j < string.length; j++) {
    if (string.charAt(i - j) === string.charAt(i + j)) {
      count++;
    } else {
      return count;
    }
  }

  return count;
}

function after(string, i) {
  count = 0;

  for (var j = 1; i - j >= 0 && i + j < string.length; j++) {
    if (string.charAt(i - j + 1) === string.charAt(i + j)) {
      count++;
    } else {
      return count;
    }
  }

  return count;
}

console.log("expected 6 got ", countPalindromes("aaa"));

