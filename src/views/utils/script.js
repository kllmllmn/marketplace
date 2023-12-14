// TODO 完善字的显示
// 球形工具
let timer;
// 获取随机值
const getRandom = (num) => {
  // Math.random() 取值范围 [0,1)
  return Math.ceil(Math.random() * num); // 结果为 [0,num]
};
// 获取随机 #开头16进制 HEX颜色值
const getRandomColor = () => {
  let enumStr = "0123456789abcdef";
  let len = enumStr.length;
  return `#${enumStr[getRandom(len) - 1]}${enumStr[getRandom(len) - 1]}${
    enumStr[getRandom(len) - 1]
  }`;
};
const startDynamicBackgroundColor = () => {
  let backgroundColorDom = document.querySelector(
    ".custom-ball-tool >.custom-ball-tool__outer"
  );
  timer = setInterval(() => {
    backgroundColorDom.style.background = getRandomColor();
  }, 2000);
};
const stopDynamicBackgroundColor = () => {
  clearInterval(timer);
};
const appendElement = () => {
  let targetDom = document.querySelector(
    ".custom-ball-tool >.custom-ball-tool__outer"
  );
  if (targetDom) {
    return;
  }
  let divDom = document.createElement("div");
  divDom.classList.add("custom-ball-tool");
  document.body.appendChild(divDom);
  document.body.lastElementChild.innerHTML = `
    <div class='custom-ball-tool__outer'>
        <div class='custom-ball-tool__inner flx-align-center'>
            <div class='custom-ball-tool--text'>
                开
            </div>
        </div>
    </div>`;
  let clickDom = document.querySelector(
    ".custom-ball-tool >.custom-ball-tool__outer"
  );
  clickDom.onclick = () => {
    // document.designMode = "on"; // 设计模式
    // document.querySelector("main").contentEditable = true; // 可编辑
    if (document.designMode === "on") {
      document.designMode = "off";
    } else {
      document.designMode = "on";
    }
  };
  clickDom.onmouseenter = stopDynamicBackgroundColor;
  clickDom.onmouseleave = startDynamicBackgroundColor;
};

const appendStyle = () => {
  let targetDom = document.head.lastElementChild;
  if (
    targetDom.innerText.includes(".custom-ball-tool > .custom-ball-tool__outer")
  ) {
    return;
  }
  let styleDom = document.createElement("style");
  styleDom.innerHTML = `
    .flx-align-center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .custom-ball-tool{
        opacity: 0.4;
    }
    .custom-ball-tool > .custom-ball-tool__outer{
        --w: 130px;
        position: fixed;
        bottom: calc(10vh - var(--w) / 2);
        left: calc(10vw - var(--w) / 2);
        width: var(--w);
        height: var(--w);
        z-index: 100;
        border: solid 1px black;
        border-radius: 100%;
        box-sizing: border-box;
        box-shadow: 0px 0px 5px 12px #5b4a4a;
        transition: all 2s;
        background:rgb(136, 51, 238)
    }
    .custom-ball-tool >.custom-ball-tool__outer > .custom-ball-tool__inner{
        --w: 50px;
        cursor:pointer;
        position: fixed;
        bottom: calc(10vh - var(--w) / 2);
        left: calc(10vw - var(--w) / 2);
        width: var(--w);
        height: var(--w);
        z-index: 101;
        border: solid 1px black;
        border-radius: 100%;
        box-sizing: border-box;
        box-shadow: 0px 0px 12px 5px #5b4a4a;
        // mix-blend-mode: difference;
        transition: all 2s;
    }
    .custom-ball-tool >.custom-ball-tool__outer > .custom-ball-tool__inner > .custom-ball-tool--text{
        font-size:24px;
        font-weight:900;
    }
    
    // .custom-ball-tool > .custom-ball-tool__outer:hover .custom-ball-tool__inner {
    //     display: block;
    // }
    `;
  document.head.appendChild(styleDom);
};
const initBallTool = () => {
  appendStyle();
  appendElement();
  startDynamicBackgroundColor();
};
initBallTool();
