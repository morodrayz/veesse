   const s = [10, 20];
   const sx = (isNumber$1(s) ? s : s[0]) || 1;
   // sx is 10 because s is not a number, so s[0] is used, which is 10 and is truthy.
   