const {
  Small,
  Magnitude,
  Fraction,
  Small_Num,
  Magnitude_Num,
  Fraction_Num,
} = require("./constants");

exports.textToNumber = (s) => {
  const words = s.toLowerCase().split(/[\s,-]+/);
  let number = 0;
  let fraction = 0;
  let g = 0;
  let hasFraction = false;
  let prevWord = null;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let x = Small[word];

    if (word == "and" || word == "a") {
      continue;
    }

    if (x != null) {
      g = g + x;
    } else if (word == "hundred") {
      g = g * 100;
    } else if (word == "point" || word == "decimal") {
      hasFraction = true;
    } else {
      x = Magnitude[word];

      if (x != null) {
        number = number + g * x;
        g = 0;
      } else {
        x = Fraction[word];
        if (x != null) {
          fraction += x;
          hasFraction = true;
        } else {
          throw new Error(`Unknown word: ${word}`);
        }
      }
    }

    prevWord = word;
  }

  if (g !== 0) {
    number = number + g;
  }

  if (hasFraction) {
    const fractionWords = words.slice(words.indexOf("point") + 1);
    if (fractionWords.length === 0) {
      throw new Error("Invalid fraction");
    }
    const fractionString = fractionWords.join("");
    fraction += Fraction[fractionString] || parseFloat(`0.${fractionString}`);
  }

  return number + fraction;
};

exports.numberToWords = (num) => {
  if (num === 0) {
    return "zero";
  }

  let words = "";

  if (num < 0) {
    words += "minus ";
    const absoluteNum = Math.abs(num);
    num = absoluteNum;
  }

  if (num < 1) {
    words += Fraction_Num[num];
  } else {
    let millions = Math.floor(num / 1000000);
    let thousands = Math.floor((num % 1000000) / 1000);
    let hundreds = num % 1000;

    if (millions > 0) {
      words += exports.numberToWords(millions) + " million ";
    }

    if (thousands > 0) {
      words += exports.numberToWords(thousands) + " thousand ";
    }

    if (hundreds > 0) {
      if (words != "") {
        words += "and ";
      }
      if (hundreds >= 100) {
        words += Small_Num[Math.floor(hundreds / 100)] + " hundred ";
        hundreds %= 100;
      }
      if (hundreds > 0) {
        if (words != "") {
          words += "and ";
        }
        if (hundreds < 20) {
          words += Small_Num[hundreds];
        } else {
          words += Magnitude_Num[Math.floor(hundreds / 10) * 10] + " ";
          if (hundreds % 10 > 0) {
            words += Small_Num[hundreds % 10];
          }
        }
      }
    }
  }

  return words.trim();
};
