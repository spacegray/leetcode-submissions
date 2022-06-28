# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def next_permutation(nums)

  i = nums.size - 2
  while i >= 0 && nums[i+1] <= nums[i]
    i -= 1
  end
  if i >= 0
    j = nums.size - 1
    while nums[j] <= nums[i]
      j -= 1
    end
    nums[i],nums[j] = nums[j],nums[i]
  end
  i += 1
  j = nums.size - 1
  while i < j
    nums[i],nums[j] = nums[j],nums[i]
    i += 1;
    j -= 1;
  end
  nums
end