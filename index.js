function shout(str){
  return str.toUpperCase();
}

function whisper(str){
  return str.toLowerCase();
}

//'receives one argument and returns it in all lowercase'
function logShout(str){
  console.log(shout(str));
}

//'calls console.log() its one argument in all lowercase'
function logWhisper(str){
  console.log(whisper(str));
}

// 'returns "YES INDEED!" if `string` is uppercase'
//'returns "I can\'t hear you!" if `string` is lowercase'
function sayHiToGrandma(str){
  var uppercase = "HELLO!",
    lowercase = 'hello!';
  if(shout(str) === uppercase) return "I can't hear you!";
  else if(whisper(str) === lowercase) return "YES INDEED!"
}