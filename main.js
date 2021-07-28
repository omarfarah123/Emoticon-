// Write your function here:
function toEmoticon(emoticon){
  switch(emoticon){
    case "shrug":
      return '|_{"}_|';
    case "smiley face":
      return ':)';
    case "frowny face":
      return ':(';
    case "winky face":
      return ';)';
    case "heart":
      return '<3';
    default:
      return '|_(* ~ *)_|';
  }
}



// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("whatever"));
console.log(toEmoticon("smiley face"));
console.log(toEmoticon("shrug")); 
console.log(toEmoticon("heart"));
console.log(toEmoticon("frowny face"));
// Should print  '|_(* ~ *)_|'

// We encourage you to add more function calls of your own to test your code!
