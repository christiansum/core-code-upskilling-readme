# Week 1

---

Challenges
+ ### Ensure Question   
  Solution 1  
  ```javascript
  function ensureQuestion(s) {
    if (s.slice(-1) == '?') return s;
    return s+'?';
  }
  ```
  Solution 2
  ```javascript
  function ensureQuestion(s) {
    if (s.endsWith('?')) return s;
    return s+'?';
  }
  ```
  ![](/christiansum/core-code-upskilling-readme/w1c1.png)

+ ### Reverse Sentence  
  Solution
  ```javascript
  function reverseWords(str){
    return str.split(" ").reverse().join(' ');
  }

+ ### Smallest Integer In Array  
  Solution 1
  ```javascript
  class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
  }
  ```
  
+ ### Odd or Even
  Solution 1
  ```javascript
  function oddOrEven(array) {
    if (array==[]) return 'even';
    return ( array.reduce((a,b)=>a+b,0) % 2 ) == 0 ? 'even' : 'odd' ; ;
  }
  ```