const testList1 = ['Eh brah, would you like to eat?'];
const testList2 = ['Eh brah, no thanks'];

function fakepidgin(list1, list2) {
    const resultList = [];
    for (let i = 0; i < list1.length; i++) {
        resultList.push(list1[i], list2[i]);
    }
    return resultList;
}

console.log(fakepidgin(testList1, testList2));
