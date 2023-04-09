# Number to Word and Word to Number Converter API

This is an API that converts numbers to words and words to numbers.

## Installation
## Without Docker
To get started with this project, you'll need to have Node.js and MongoDB installed on your machine.

- Run npm install to install the necessary dependencies.
- Run nodemon start to start the API.
- The API should now be accessible at http://localhost:3000.

## Installation
## With Docker

- Build the Docker image using docker build -t image-name .  
  _Don't forget to include . in end of line._
- Run the Docker container using docker run -p 3000:3000 image-name
- The API should now be accessible at http://localhost:3000.

Note that docker should be correctly installed and configured. 

## Usage
## Number to Word
To convert a number to its word representation, make a GET request to /to/word with the following JSON payload:
```
{
    "number": "<number-to-convert>"
}
```
Example:
```
GET /to/word
{
    "number": "100"
}
```
Response:
```
{
    "word": "one hundred"
}
```

## Word to Number
To convert a word to its number representation, make a GET request to /to/number with the following JSON payload:

```
{
    "words": "<word-to-convert>"
}
```
Example:
```
GET /to/number
{
    "words": "Two hundred thirty-five thousand four hundred fifty six and three quarter"
}
```
Response:
```
{
    "number": 235459.25
}
```
## Test Cases
## Word to Number Converter Test Cases
- Test with input: "zero", expected output: 0
- Test with input: "one", expected output: 1
- Test with input: "two", expected output: 2
- Test with input: "ten", expected output: 10
- Test with input: "fifteen", expected output: 15
- Test with input: "twenty-three", expected output: 23
- Test with input: "one hundred and twenty-three", expected output: 123
- Test with input: "one thousand", expected output: 1000
- Test with input: "one million", expected output: 1000000
- Test with input: "nine hundred ninety-nine thousand nine hundred ninety-nine", expected output: 999999
## Number to Word Converter Test Cases
- Test with input: 0, expected output: "zero"
- Test with input: 1, expected output: "one"
- Test with input: 15, expected output: "fifteen"
- Test with input: 23, expected output: "twenty-three"
- Test with input: 100, expected output: "one hundred"
- Test with input: 123, expected output: "one hundred and twenty-three"
- Test with input: 1000, expected output: "one thousand"
- Test with input: 999999, expected output: "nine hundred ninety-nine thousand nine hundred and ninety-nine"
- Test with input: 1000000, expected output: "one million"
- Test with input: -1234, expected output: "minus one thousand two hundred and thirty-four"
