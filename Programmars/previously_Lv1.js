// 하샤드 수
function solution(x) {
  const nums = x + "";
  let sum = 0;
  for (let num of nums) {
    sum += num * 1;
  }
  if (x % sum === 0) return true;
  else return false;
}

// 나머지가 1이 되는 수 찾기
function solution(n) {
  for (let x = 0; x < n; x++) {
    if (n % x === 1) return x;
  }
}

// 두 정수 사이의 합
function solution(a, b) {
  let answer = 0;
  if (a >= b) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  } else {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  }
  return answer;
}

// 콜라츠 추측
function solution(num) {
  let count = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2;
      count++;
    } else {
      num = num * 3 + 1;
      count++;
    }
  }
  if (count >= 500) return -1;
  return count;
}

// 서울에서 김서방 찾기
function solution(seoul) {
  let findIndex = seoul.findIndex((el) => el === "Kim");
  return `김서방은 ${findIndex}에 있다`;
}

// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  const findArr = arr.filter((el) => el % divisor === 0);
  if (findArr.length < 1) findArr.push(-1);
  return findArr.sort((a, b) => a - b);
}

// 핸드폰 번호 가리기
function solution(phone_number) {
  const phone = [];
  for (let el of phone_number) {
    phone.push(el);
  }
  for (let i = phone.length - 5; i >= 0; i--) {
    phone[i] = "*";
  }
  const ar = phone.join("");
  return ar;
}

// 제일 작은 수 제거하기
function solution(arr) {
  if (arr.length === 1) return [-1];
  return arr.filter((el) => el !== Math.min(...arr));
}

// 음양 더하기
function solution(absolutes, signs) {
  let sum = 0;
  for (let i = 0; i < signs.length; i++) {
    if (!signs[i]) signs[i] = -1;
    sum += absolutes[i] * signs[i];
  }
  return sum;
}

// 없는 숫자 더하기
function solution(numbers) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) sum += i;
  }
  return sum;
}

// 가운데 글자 가져오기
function solution(s) {
  let answer = "";
  if (s.length % 2) {
    answer += s[Math.floor(s.length / 2)];
  } else {
    answer += s[s.length / 2 - 1] + s[s.length / 2];
  }
  return answer;
}

// 수박수박수박수박수박수?
function solution(n) {
  let answer = "";
  for (let i = 1; i <= n; i++) {
    i % 2 === 0 ? (answer += "박") : (answer += "수");
  }
  return answer;
}

// 내적
function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// 문자열 내림차순으로 배치하기
function solution(s) {
  return [...s].sort().reverse().join("");
}

// 약수의 개수와 덧셈
function solution(left, right) {
  let odd = 0;
  let even = 0;
  const getDivisors = (n) => {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        divisors.push(i);
        if (n / i !== i) divisors.push(n / i);
      }
    }
    return divisors.length;
  };
  for (let j = left; j <= right; j++) {
    if (getDivisors(j) % 2) odd += j;
    else even += j;
  }
  return even - odd;
}

// 문자열 다루기 기본
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    if (!Number.isInteger(s) || s.includes("e")) return false;
    else return true;
  }
  return false;
}

// 부족한 금액 계산하기
function solution(price, money, count) {
  let sum = 0;
  for (let i = 0; i <= count; i++) {
    sum += price * i;
  }
  return sum >= money ? sum - money : 0;
}

// 행렬의 덧셈
function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let tmp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      tmp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(tmp);
  }
  return answer;
}

// 같은 숫자는 싫어
function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }
  return answer;
}
