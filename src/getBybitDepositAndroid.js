import { generateRandomString, splitText2Chunks } from "./helpers";
import {
  IBMMedium,
  Montserrat,
  SFProDisplayBold,
  SFProDisplayMed,
} from "./index";

const amountInput = document.getElementById("amount");
const timeInput = document.getElementById("time");
const walletInput = document.getElementById("wallet");
const batteryInput = document.getElementById("battery");
const mobileTimeInput = document.getElementById("mobile-time");

export const getBybitDepositAndroid = (ctx, canvas) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const img = new Image();
  ctx.textAlign = "start";
  img.src = `bybit-deposit-android-template.png`;

  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    ctx.fillStyle = "rgba(255, 255, 255, 0.93)";
    ctx.font = "bold 30px IBM Plex Sans";

    let amount = `${amountInput.value} USDT`;
    let time = timeInput.value === "" ? "2023-11-27 21:28:41" : timeInput.value;
    let mobileTime = mobileTimeInput.value;
    let battery = batteryInput.value;

    let measuredText = ctx.measureText(amount);
    ctx.fillText(amount, canvas.width / 2 - measuredText.width / 2, 237);

    Montserrat.load().then((font) => {
      document.fonts.add(font);

      ctx.font = "18px Montserrat";
      ctx.fillText(mobileTime, 24, 33);

      ctx.font = "10px Montserrat";
      ctx.fillText(battery, 524, 29);
    });

    IBMMedium.load().then((font) => {
      document.fonts.add(font);
      ctx.textAlign = "right";

      ctx.font = "21px IBM Medium";
      ctx.fillText(time, 551, 479);

      ctx.fillText(splitText2Chunks(walletInput.value, 18)[0], 529, 530);
      ctx.fillText(splitText2Chunks(walletInput.value, 18)[1], 529, 556);

      ctx.fillText(generateRandomString(18), 529, 606);
      ctx.fillText(generateRandomString(18), 529, 632);
      ctx.fillText(generateRandomString(18), 529, 658);
      ctx.fillText(generateRandomString(10), 529, 684);
    });
  };
};