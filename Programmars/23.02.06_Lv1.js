// 최대공약수와 최대공배수
function solution(n, m) {
  let big = 0;
  let small = 0;

  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      big = i;
    }
  }
  small = (n * m) / big;
  return [big, small];
}

// 이상한 문자 만들기
function solution(s) {
  const arr = s.split(" ");
  let tmp = [];

  for (let i = 0; i < arr.length; i++) {
    tmp = arr[i].split("");
    for (let j = 0; j < tmp.length; j++) {
      if (j % 2) {
        tmp[j] = tmp[j].toLowerCase();
      } else {
        tmp[j] = tmp[j].toUpperCase();
      }
    }
    arr[i] = tmp.join("");
  }

  return arr.join(" ");
}
