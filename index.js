let shout = (string) => string.toUpperCase()

function whisper(string) {
  return string.toLowerCase()
}

let logShout = (string) => console.log(string.toUpperCase())

let logWhisper = (string) => console.log(string.toLowerCase())

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) return 'I can\'t hear you!'
  
  if (string === string.toUpperCase()) return 'YES INDEED!'
  
  if (string === 'I love you, Grandma.') return 'I love you, too.'
}