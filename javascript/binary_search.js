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


var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid 
    
    if (target > nums[right]) return right + 1
    if (target <= nums[left]) return left
    
    while (left <= right){
        mid = Math.floor((left + right) / 2)
        if (nums[mid] === target){
            return mid
        } else if (nums[mid] < target){
            if (nums[mid + 1] > target || !nums[mid + 1]) {
                return mid + 1
            }
            left = mid + 1
        } else if (nums[mid] > target) {
            if (nums[mid - 1] < target || !nums[mid-1]) {
                return mid
            }
            right = mid - 1
        }     
    }    
};