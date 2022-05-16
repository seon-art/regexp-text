const str = `
010-5622-3457
qkrtjsdud608@naver.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
sdsadasdsadasdsadaas
`

console.log(str.match(/(?<=@).{1,}/g))