const errorStrings = require("../../configs/errorStrings");
const { textToNumber, numberToWords } = require("../../configs/helpers");

exports.toNumber = async (req, res) => {
  try {
    const { words } = req.body;

    if (!words) {
      throw new Error();
    }

    const number = textToNumber(words);
    if (number > 9999999.99) {
      throw new Error();
    }
    res.status(200).send({ number });
  } catch (error) {
    res.status(422).send({ error: errorStrings.INCORRECT_INPUT_WORD });
  }
};

exports.toWords = async (req, res) => {
    try {
      const data = req.body;
  
      if (!data.number) {
        throw new Error();
      }
  
      const num = parseFloat(data.number);
  
      if (isNaN(num)) {
        throw new Error();
      }
  
      if (num > 999999999.99) {
        throw new Error();
      }
  
      const word = numberToWords(num);
  
      res.status(200).send({ word });
    } catch (error) {
        console.log(error)
      res.status(422).send({ error: errorStrings.INCORRECT_INPUT_NUMBER });
    }
  };