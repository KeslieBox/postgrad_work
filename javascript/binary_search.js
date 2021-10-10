var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    while (left <= right) {
        let pivot = Math.ceil(left + (right - left) / 2)
        if (nums[pivot] === target) {
            return pivot
        } else if (target < nums[pivot]) {
            right = pivot - 1
        } else {
            left = pivot + 1
        }
    }
    return -1  
};

var search = function(nums, target) {
    return nums.includes(target) ? nums.indexOf(target) : -1  
};