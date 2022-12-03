const fs = require('fs')

const elfCalories = fs.readFileSync('./1.txt', 'utf8', async (err, data) => { 
    if(err){ 
        console.log(err)
    }
 
    return data
})

const splitElfCaloriesIntoArray = elfCalories.split('\n')

// need to go through array and add up each number until there is a \n character and that will be each elf. 
// just need to find the largest number in the list once its all added up 

let eachElf = []
function main(){ 
    const eachElfTotal = getElfsTotalInSeparateArrays(splitElfCaloriesIntoArray)
    const threeLargestElfs = getThreeLargestElfsInArray(eachElfTotal)
    console.log(getTotalOfThreeLargestElfs(threeLargestElfs))
    
}
function getElfsTotalInSeparateArrays(elfList){
    const eachElfTotal = [] 
    elfList.map((elfCalorie) => { 
        if(!elfCalorie){ 
           const elfTotal = eachElf.reduce((prev, curr) => prev + curr)
           eachElfTotal.push(elfTotal)
           eachElf = []
           return 
        }
        const elfCalorieAsInt = parseInt(elfCalorie)
        eachElf.push(elfCalorieAsInt)
    })
    console.log(eachElfTotal, 'total')
    return eachElfTotal
}


// getElfsTotalInSeparateArrays(splitElfCaloriesIntoArray)



function getThreeLargestElfsInArray(elfList){ 
    const threeLargestElfs = []
    for(let i = 0; i <3; i++){ 
        const largest = elfList.reduce((previous, current) => { 
            return Math.max(previous, current)
        })
        
        
        // get the index of the largest elf, then splice it into a new array, get the next highest. do this 3 times total
        
        
        const indexOfLargestElf = elfList.indexOf(largest)
        threeLargestElfs.push(elfList.splice(indexOfLargestElf, 1))
    }
    console.log(threeLargestElfs, 'largest')
    return threeLargestElfs
}
// getLargestElfInArray(eachElfTotal)

// get the largest number in the array 

function getTotalOfThreeLargestElfs(elfList){ 
    return elfList.reduce((prev, current) => { 
        return parseInt(prev) + parseInt(current)
    })
}
// console.log(getTotalOfThreeLargestElfs(threeLargestElfs))


module.exports = { 
    getElfsTotalInSeparateArrays, 
    getThreeLargestElfsInArray,
    getTotalOfThreeLargestElfs,

}
