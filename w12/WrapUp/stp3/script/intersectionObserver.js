// new IntersectionObserver(조건에 부합할때 실행시킬 함수, 옵션);

let observerOption = {
  // 순서는 상관없다 무조건 이렇게 해야한다
  root: null,
  rootMargin: "0px 0px -200px 0px",
  threshold: 0.75,
};

// function observerCallback() {}
let observerCallback = (observingTargets) => {
  observingTargets.forEach(
    (eachObservingTarget) => {
      if (eachObservingTarget.isIntersecting) {
        eachObservingTarget.target.classList.add(
          "triggered"
        );
      } else {
        eachObservingTarget.target.classList.remove(
          "triggered"
        );
      }
    }
  );
};

let observer = new IntersectionObserver(
  observerCallback,
  observerOption
);

let elems = document.querySelectorAll(
  ".animTrigger"
);
console.log(elems);
// 하드코딩
// observer.observe(elems[0])
// observer.observe(elems[1])
// observer.observe(elems[2])
// observer.observe(elems[3])
// ...

// 조금 똑똑한 코딩
// for(let idx =0; idx < elems.length; idx++) {
// observer.observe(elems[idx])
// }

// 있어보이는 코딩
elems.forEach((eachElem) => {
  observer.observe(eachElem);
});

// observer.observe(여러개의 값을 가진 친구);
// observer.observe(HTML요소);
