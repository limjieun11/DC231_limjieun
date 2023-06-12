const btns =
  document.querySelectorAll("aside>ol>a");

console.log(btns);
let lastBtn;

const whenIClickTheBtn = (e) => {
  console.log("target", e.target);
  console.log("currTarget", e.currentTarget);
  const toggleTarget =
    e.currentTarget.querySelector("li");
  console.log("toggleTarget", toggleTarget);
  toggleTarget.classList.add("pressed");
  //   초보의 if 구문 활용을 통한 해결
  //   if (lastBtn !== undefined) {
  //     lastBtn.classList.remove("pressed")
  //   }
  // 옵셔널 체이닝을 이용한 간지나는 해결
  lastBtn?.classList.remove("pressed");
  lastBtn = toggleTarget;
};

btns.forEach((eachBtn) => {
  eachBtn.addEventListener(
    "click",
    whenIClickTheBtn
  );
});
