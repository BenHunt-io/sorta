Array.prototype.quicksort = function() {

    let l = 0;
    let h = this.length-1;
    
    sort(l, h, this)


    function sort(l, h, arr){

        if(l >= h){
            return;
        }

        let pivot = partition(l, h, arr);
        sort(l, pivot-1, arr);
        sort(pivot+1, h, arr);
    }

    function partition(l, h, arr){

        console.log(`l:${l}, h:${h}, arr:${arr}`);

        let pivot = l;
        l++;
        while(l<h){
            while(l < arr.length && arr[l] <= arr[pivot]){
                l++;
            }
            while(h > 0 && arr[h] > arr[pivot]){
                h--;
            }

            if(l<h){
                swap(l, h, arr);
            }
        }

        if(arr[pivot] > arr[h]){
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