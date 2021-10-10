const arrayLangs = [
    {lang:"Java",people:40,level:7},
    {lang:"Javascript",people:74,level:9},
    {lang:"C#",people:35,level:6},
    {lang:"php",people:18,level:4},
    {lang:"python",people:24,level:3},
    {lang:"R",people:10,level:4},
    {lang:"typescript",people:30,level:8},
    {lang:"VB",people:20,level:6}
]

console.log("OriginalArray : ",arrayLangs)

let arrayTarget = arrayLangs.forEach((element) => {
    return element.level * 2;
});

console.log("Target Array : ",arrayTarget)

