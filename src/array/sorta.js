Array.prototype.quicksort = function(compare) {

    let l = 0;
    let h = this.length-1;

    if(!compare){
        compare = (a, b) => {
            if(a-b == 0){
                return 0;
            }
            if(a-b > 0){
                return 1;
            }
            if(a-b < 0){
                return -1;
            }
        }
    }

    console.log(compare(5,3));
    
    sort(l, h, this, compare)

    function sort(l, h, arr, compare){

        if(l >= h){
            return;
        }

        let pivot = partition(l, h, arr, compare);
        sort(l, pivot-1, arr, compare);
        sort(pivot+1, h, arr, compare);
    }

    function partition(l, h, arr, compare){

        let pivot = l;
        l++;
        while(l<h){
            while(l < arr.length && compare(arr[l], arr[pivot]) <= 0){
                l++;
            }
            while(h > 0 && compare(arr[h], arr[pivot]) == 1){
                h--;
            }

            if(l<h){
                swap(l, h, arr);
            }
        }

        if(compare(arr[pivot], arr[h]) == 1){
            swap(pivot, h, arr);
        }

        return h;
    }
    
    function swap(idx, idxOther, arr){
        let tmp = arr[idx];
        arr[idx] = arr[idxOther];
        arr[idxOther] = tmp;
    }
}

module.exports = Array;