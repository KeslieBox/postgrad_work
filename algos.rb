
def two_sum(nums, target)
    numbers_hash = {}
    nums.each_with_index do |num, idx|
        if numbers_hash.has_key?(target-num)
            return[numbers_hash[target-num], idx]
        else
            numbers_hash[num] = idx
        end
    end
end
