
let sentence = "The movie is that bad, I like it";


let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

// Vérification
if (wordNot >= 0 && wordNot < wordBad) {
    sentence = sentence.substring(0, wordNot) 
             + "good" 
             + sentence.substring(wordBad + 3);
    console.log(sentence);
} else {
    console.log(sentence);
}
