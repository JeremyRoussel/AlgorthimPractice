function firstNotRepeatingCharacter(s) {
    
    let sArr = s.split('')
    let letters = new Map()
    
    for (let i = 0; i < sArr.length; i++) {
        if (letters.has(sArr[i])) {
            
            letters.set(sArr[i], letters.get(sArr[i]) + 1)
            
        } else {
            letters.set(sArr[i], 1)
        }
    }

    let external = '_'
    
    letters.forEach((key, value) => {
        console.log(`key: ${key}, value: ${value}`)
        if (key == 1 && external == '_') {
            external = value
        }
    })

    return external

}

console.log(firstNotRepeatingCharacter('abacabad'))