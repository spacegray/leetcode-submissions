# @param {String} haystack
# @param {String} needle
# @return {Integer}

def str_str(haystack, needle)
    return 0 if needle.empty?
    return -1 if needle.size > haystack.size
    (haystack.size - needle.size + 1).times do |i|
        return i if haystack[i..i+needle.size-1] == needle
    end
    -1
end
