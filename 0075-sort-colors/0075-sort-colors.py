class Solution(object):
    def sortColors(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        # 1. Create a dictionary with the colors as the keys and the number of times they appear as the values
        # 2. Iterate through the dictionary and replace the values in nums with the colors in the order they appear in the dictionary
        # 3. Return nums
        colors = {0: 0, 1: 0, 2: 0}
        for num in nums:
            colors[num] += 1
        index = 0
        for color in colors:
            for i in range(colors[color]):
                nums[index] = color
                index += 1
        return nums
        