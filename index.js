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
  console.log(str.toLowerCase());
}