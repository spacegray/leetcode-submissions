var isMatch = function (s, p) {
 
  if (!p || !p.length) return !Boolean(s.length);

  const first_match = s.length && (p[0] === s[0] || p[0] === ".");

  if (p.length > 1 && p[1] === "*") {
    const condition1 = isMatch(s, p.substring(2));
    const condition2 = first_match && isMatch(s.substring(1), p);
    return condition1 || condition2;
  } else { 
    return first_match && isMatch(s.substring(1), p.substring(1));
  }
};