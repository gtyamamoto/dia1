function sumAll(array) {
    const min = Math.min(...array);
    const max = Math.max(...array);
    let trueArray = [];
    for(let i = min;i<=max;i++) trueArray.push(i);
    return array.reduce((prev,curr)=>prev+curr,0)
}
