const wMin = 360;
const wMax = 2500;
const wDiff = wMax - wMin;
const docRoot = document.querySelector(":root");
const typographySizeProp = "--window-size-anim-delay";
const UImin = document.getElementById("min");
const UImax = document.getElementById("max");
const UIcurrentPx = document.getElementById("currentPx");
const UIcurrentPct = document.getElementById("currentPct");
const UIgraphDot = document.getElementById("graph-dot");
const UIgraph = document.getElementById("graph");
const selectorsToCheck = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];

let ranOnce = false;

const typographySizing = function () {
  const w = window.innerWidth;
  let ratio = (w - wMin) / wDiff;
  if (ratio <= 0) {
    ratio = 0;
  } else if (ratio > 1) {
    ratio = 1;
  }
  ratio *= -1;
  docRoot.style.setProperty(typographySizeProp, ratio + "s");
  UImin.innerText = wMin;
  UImax.innerText = wMax;
  UIcurrentPx.innerText = w;
  UIcurrentPct.innerText = Number(-1 * (ratio * 100)).toFixed(0);
  UIgraphDot.style.setProperty(
    "left",
    Number(-1 * (ratio * 100)).toFixed(2) + "%"
  );
  for (const s of selectorsToCheck) {
    let first = document.querySelector(s);
    let size = window.getComputedStyle(first).fontSize;
    size = size.replace("px", "");
    document.getElementById(`${s}Size`).innerText =
      Number.parseFloat(size).toFixed(1);
  }
  if (ranOnce) {
    let pathDot = document.createElement("div");
    pathDot.className = "graph-path-dot";
    pathDot.style.left = UIgraphDot.style.left;
    pathDot.style.bottom = getComputedStyle(UIgraphDot).bottom;
    UIgraph.appendChild(pathDot);
  } else {
    ranOnce = true;
  }
};

window.addEventListener("resize", typographySizing);
window.addEventListener("DOMContentLoaded", typographySizing);
