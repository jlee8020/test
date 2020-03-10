function bubbleSort(arr){
    let j = 1;
    while (j>0){
     for(let i=0; i<arr.length - 1; i++){
        let holder = arr[i];
        arr[i] = arr[i+1];
        arr[i+1]=holder;
        j++
    }
}
return arr;
}

arr=[1,4, 6, 67, 20]
bubbleSort(arr);
console.log(arr)

(arr[j]>arr[j+1])