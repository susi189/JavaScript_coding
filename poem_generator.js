/* This is a practice exercise */
// Create a function that is taking a original text and creates poem based on Markov Chain

var text = "As every blossom fades and all youth sinks into old age, so every life’s design, each flower of wisdom, attains its prime and cannot last forever.";


function parseText(text){
  var newString = text.replace(/[,']/g, '')
  var textArr = newString.split(' ').map(function lowerCase(elem) {
        return elem.charAt(0).toLowerCase() + elem.slice(1);
    });
  return textArr
}

parseText(text);

// Markov chain 

// Create an object where the key is the word from the string and value is an array of the next word in the string arr[i]: arr[i + 1]


var wordPairs = generateWordPairs(text);

function generateWordPairs(text){
  var wordsObj = {}
  var parsedText = parseText(text)
  for(var i = 0; i < parsedText.length - 1; i++){
    var key = parsedText[i];
    var value = parsedText[i + 1]
    if (!wordsObj[key]){
      wordsObj[key] = []
    }
    wordsObj[key].push(value)
  } 
  return wordsObj
}

// test case 

// function countWords(text){
//   var wordsObj = {}
//   var parsedText = parseText(text)
//   for(var i = 0; i < parsedText.length - 1; i++){
//     var key = parsedText[i];
//     // var value = parsedText[i + 1]
//     if (!wordsObj[key]){
//       wordsObj[key] = []
//     }
//     wordsObj[key].push(1)
//   } 
//   return wordsObj
// }

console.log(wordPairs);

// create a one line of poetry

// helper function -> choosing random words

function randomize(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}


// this function should take the words dictionary (Markov Chain object) and create a line of ramdom chosen words. The length of the line is defined in 'wordsCount'

function writeLine(text, wordsCount){
  var markovChain = wordPairs
  var randomWord = randomize(parseText(text))
  //var randomValues = randomize(markovChain[randomWord])
  var oneLine = [randomWord]
  for (var i = 0; i < wordsCount; i++){
    if (markovChain[randomWord]){
    randomWord = randomize(markovChain[randomWord]);
    oneLine.push(randomWord);
    }
  }
  return oneLine.join(' ')
}

writeLine(text, 8)

/// putting everything together

function generatePoem(text, linesNumber, wordsCount){
  for (var i = 0; i < linesNumber; i++){
    var lines = writeLine(text, wordsCount)
    console.log(lines)
  }
}

generatePoem(text, 4, 8)
