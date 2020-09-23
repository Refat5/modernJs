//find method array in js 

const score = [39, 49, 54, 43, 23, 42];

const higScore = score.find(numnber => {
    return numnber > 40;
});
console.log(higScore);
