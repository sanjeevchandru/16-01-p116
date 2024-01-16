document.write("80.to swap the first and last elements of a given array of integers. The array length should be at least 1"+"<br>");
function test80(arr){
    [arr[0],arr[arr.length-1]]=[arr[arr.length-1],arr[0]];
    return arr;
}
document.write("The array :[1,2,3,4] ,Ans :"+test80([1,2,3,4])+"<br><br>");