// Write your code in this file!
function scuberGreetingForFeet(distance){
  if (distance > 2500){
    return 'No can do.';
  }
  else if (distance < 2500 && distance > 400){
    return 'I will gladly take your thirty bucks.';
  }
  else if (distance <= 400) {
  return 'This one is on me!';
  }
}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}
