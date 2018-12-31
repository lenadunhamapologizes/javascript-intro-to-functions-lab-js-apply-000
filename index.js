let shout = (string) => string.toUpperCase()

function whisper(string) {
  return string.toLowerCase()
}

let logShout = (string) => console.log(string.toUpperCase())

let logWhisper = (string) => console.log(string.toLowerCase())

function sayHiToGrandma(string) {
<<<<<<< HEAD
  if (string === string.toLowerCase()) return 'I can\'t hear you!'
  
  if (string === string.toUpperCase()) return 'YES INDEED!'
=======
  if (string === string.toLowerCase()) return 
>>>>>>> 09e2f773367577c3bbe52e810ceaf97e31fa1f45
  
  if (string === 'I love you, Grandma.') return 'I love you, too.'
}