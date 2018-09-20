
const testList1 = ['would you like to eat?', 'no thank you.\'', 'from which high school did you matriculate?'];
const testList2 = ['Eh brah, would you like to eat?', 'Eh brah, no thank you.', 'Eh brah, from which high school did you matriculate?'];

function fakepidgin(list1, list2) {
    const resultList = [];
    for (let i = 0; i < list1.length; i++) {
        resultList.push(list1[i], list2[i]);
    }
    return resultList;
}

console.log(fakepidgin(testList1, testList2));

