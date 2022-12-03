const elfsCalories = ['1', '2', '3', '', '4','4','', '5', '6', '5', '']
const { getElfsTotalInSeparateArrays, getThreeLargestElfsInArray, getTotalOfThreeLargestElfs } = require('./1')


test('add together elfs in each array to get total calories each one has', () => {
    expect(getElfsTotalInSeparateArrays(elfsCalories)).toEqual([6,8,16])
    
  });

test("find the three largest calorie counts from all of the elfs", () => { 
    const eachElfTotal = getElfsTotalInSeparateArrays(elfsCalories)
    expect(getThreeLargestElfsInArray(eachElfTotal)).toEqual([[16],[8],[6]])
})

test('add up the three largest elfs', () => { 
    const eachElfTotal = getElfsTotalInSeparateArrays(elfsCalories)
    const threeLargest = getThreeLargestElfsInArray(eachElfTotal)
    expect(getTotalOfThreeLargestElfs(threeLargest)).toBe(30)
})