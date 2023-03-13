"""
    My Strategy:

Initialize two variables, left and right, to the first and last indices of the array, respectively.

Use a while loop to repeatedly divide the search space in half until the target value is found, or the search space is empty. Here's how to implement the binary search algorithm:

a. Compute the middle index of the search space: mid = (left + right) // 2

b. If nums[mid] is less than target, update left to mid + 1 to search the right half of the array.

c. If nums[mid] is greater than target, update right to mid - 1 to search the left half of the array.

d. If nums[mid] is equal to target, we have found a potential occurrence of the target value. However, this may not be the first occurrence. So, we need to search the left half of the array to find the first occurrence and the right half of the array to find the last occurrence.

Once we have found a potential occurrence of the target value, we can update left or right to narrow the search space and find the first and last occurrences:

a. To find the first occurrence, update right to mid - 1 and repeat step 2.

b. To find the last occurrence, update left to mid + 1 and repeat step 2.

c. Repeat steps 2 and 3 until the search space is empty, i.e., left > right.

If we find both the first and last occurrences of the target value, return their indices as a list [first, last]. Otherwise, return [-1, -1].
"""

class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            elif nums[mid] > target:
                right = mid - 1
            else:
                first, last = mid, mid
                while first > 0 and nums[first - 1] == target:
                    first -= 1
                while last < len(nums) - 1 and nums[last + 1] == target:
                    last += 1
                return [first, last]
        return [-1, -1]
