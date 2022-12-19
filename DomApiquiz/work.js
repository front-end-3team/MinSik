// 1번 해결 완료
const $changeText = document.getElementsByClassName("disp")[0];
$changeText.innerText = "변경되었습니다!!";

// 2번 구현은 하였으나 수정 요망
const $colorTab = document.querySelectorAll(".tab");
const $showTab = document.querySelectorAll(".block");

function change_color() {
  this.style.backgroundColor = "#f00";
  this.style.color = "#fff";
  for (let show of $showTab) {
    if (show.innerText !== `${this.innerText} 컨텐츠`) show.style.opacity = "0";
  }
}

function reset_color() {
  this.style.backgroundColor = "#fff";
  this.style.color = "#000";
  for (let show of $showTab) {
    show.style.opacity = "1";
  }
}

for (let color of $colorTab) {
  color.addEventListener("click", change_color);
  color.addEventListener("mouseleave", reset_color);
}

// 4번 숫자 입력되면 alert 뜨는 기능만 구현함...
const rgexp = /[0-9]/;
let $checkNum = document
  .querySelector("#te_input")
  .addEventListener("keyup", (e) => {
    if (rgexp.test(e.key)) alert("숫자가 입력되었습니다.");
  });

// 5번 풀이
const $form = document.getElementById("form");
const $list = document.getElementById("list");

function parentPaint(node, text) {
  const editBtn = '<button type="button" onClick="onEdit(this)">수정</button>';
  const delBtn = '<button type="button" onclick="delEdit(this)">삭제</button>';
  node.innerHTML = text + editBtn + delBtn;
}

function createList(e) {
  e.preventDefault();
  if (this.content.value === "") return;
  const li = document.createElement("li");
  // <li></li>
  parentPaint(li, this.content.value);
  $list.append(li);
  this.content.value = "";
}

function reset_list() {
  $list.innerHTML = "";
}

$form.addEventListener("submit", createList);

// 6번 풀이
function onEdit(e) {
  const parentList = e.parentNode;
  const parentText = e.parentNode.childNodes[0];
  parentList.innerHTML = `<input value="${parentText.data}" /> <button type="button" onclick="saveEdit(this)">저장</button>`;
}

function saveEdit(e) {
  const parentList = e.parentNode;
  const textInput = parentList.childNodes[0].value;
  parentPaint(parentList, textInput);
}

function delEdit(e) {
  const parentNode = e.parentNode;
  parentNode.remove();
}
