
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

def generateHashtag(str)
    str.gsub("/\s+/", "") 
    puts str
    if str.empty? || str.length > 140
      return false
    elsif !str.include?(' ')
      str.capitalize.prepend('#')
    else
      str.split(" ").map do |word|
        word.capitalize
      end.join().prepend('#')
    end
  end


  def count_by(x, n)
    arr = []
    product = x*n
    i = x 
    while i <= product do
      arr << i 
      i+=x
    end
    return arr
  end

def can_win_nim(n)
  return n % 4 != 0  
end
