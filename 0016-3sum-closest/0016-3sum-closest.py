class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        closest_sum = float('inf')
        
        for i in range(len(nums) - 2):
            left = i + 1
            right = len(nums) - 1
            
            while left < right:
                current_sum = nums[i] + nums[left] + nums[right]
                if current_sum == target:
                    return current_sum
                elif current_sum < target:
                    left += 1
                else:
                    right -= 1
                
                if abs(current_sum - target) < abs(closest_sum - target):
                    closest_sum = current_sum
                    
        return closest_sum

    """ 
The approach I took is to first sort the input array: nums, which allows us to apply the two-pointer technique to find the closest sum of three integers. We then iterate over the array with a loop and for each nums[i], we keep track of two pointers left and right such that we consider the three integers nums[i], nums[left], and nums[right].

We calculate the current_sum of the three integers and compare it to the target. If it is equal to the target, we have found the solution and return it. Otherwise, we update left and right based on whether the current_sum is less than or greater than the target.

Finally, we keep track of the closest sum of three integers we have encountered so far in the closest_sum variable. We update it whenever we find a current_sum that is closer to the target than the current closest_sum.

The time complexity of this solution is O(n^2) since we are iterating over the input array with a loop and applying the two-pointer technique inside the loop. The space complexity is O(1) since we only use a constant amount of extra space to store variables.
    """