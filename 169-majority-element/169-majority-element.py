class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums.sort()
        return nums[len(nums)//2]
    
'''
Sort the array of nums in increasing order
Assuming the array has a majority element, the overlapping point 
would be located at the center for both even and odd arrays
n/2 returns our majority element
'''