ord = prompt("skriv inn ord")
let nyOrd = ''
let vocal = ['a', 'e', 'i', 'o', 'u', 'y', 'æ', 'ø', 'å']
function remVoc(ord){
    for (let index = 0; index < ord.length; index++) {
            if (vocal.indexOf(ord[index].toLowerCase())===-1){
                nyOrd += ord[index]
            }
    }
    console.log(nyOrd)
}
remVoc(ord)