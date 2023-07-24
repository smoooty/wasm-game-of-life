// @ts-check
// I just set, "js/ts.implicitProjectConfig.checkJs": true in vscode settings
import { Universe } from "wasm-game-of-life";

const pre = document.getElementById("game-of-life-canvas");

const universe = Universe.new();

const renderLoop = () => {
  if (pre) {
    pre.textContent = universe.render();
  }
  universe.tick();

  requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
