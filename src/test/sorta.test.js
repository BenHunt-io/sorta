const Array = require("../array/sorta")


test("Quick sort sorting asc", () => {

    let arr = [10,16,8,12,15,6,3,9,5,30,14,25];
    arr.quicksort();
    
    expect(arr).toStrictEqual([3,5,6,8,9,10,12,14,15,16,25,30]);

});

test("Quick sort 2 elements", () => {

    let arr = [2,1];
    arr.quicksort();
    
    expect(arr).toStrictEqual([1,2]);

});

test("Quick sort 0 elements", () => {

    let arr = [];
    arr.quicksort();
    
    expect(arr).toStrictEqual([]);

});

test("Quick sort already sorted", () => {

    let arr = [1,2,3,4,5];
    arr.quicksort();
    
    expect(arr).toStrictEqual([1,2,3,4,5]);

});