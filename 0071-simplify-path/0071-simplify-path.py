class Solution(object):
    def simplifyPath(self, path):
        """
        :type path: str
        :rtype: str
        """
        # 1. Split the path by "/"
        # 2. Create a stack
        # 3. Iterate through the path
        # 4. If the path is not empty and the path is not a "." or "..", append the path to the stack
        # 5. If the path is ".." and the stack is not empty, pop the stack
        # 6. Join the stack with "/"
        # 7. Return the stack

        path = path.split("/")
        stack = []
        for p in path:
            if p and p != "." and p != "..":
                stack.append(p)
            elif p == ".." and stack:
                stack.pop()
        return "/" + "/".join(stack)