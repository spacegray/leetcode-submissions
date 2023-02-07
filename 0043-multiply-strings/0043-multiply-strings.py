class Solution(object):
    def multiply(self, num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        # 1. Create a variable to store the result
        # 2. Iterate through num1
        # 3. Iterate through num2
        # 4. Multiply the current index of num1 and num2
        # 5. Add the product to the result
        # 6. Return the result

        result = 0
        for i in range(len(num1) - 1, -1, -1):
            for j in range(len(num2) - 1, -1, -1):
                product = int(num1[i]) * int(num2[j])
                result += product * 10 ** (len(num1) - 1 - i) * 10 ** (len(num2) - 1 - j)
        return str(result)