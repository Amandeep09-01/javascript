function printTable(n, upto = 10) {
    for(let i=1;i<=upto;i++){
        console.log(`${n} X ${i} = ${n*i}`);
    }
}
printTable(12);