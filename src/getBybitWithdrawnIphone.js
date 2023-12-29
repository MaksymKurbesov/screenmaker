import { generateRandomString, splitText2Chunks } from "./helpers";
import { IBMMedium, SFProDisplayBold, SFProDisplayMed } from "./index";

const amountInput = document.getElementById("amount");
const timeInput = document.getElementById("time");
const walletInput = document.getElementById("wallet");
const batteryInput = document.getElementById("battery");
const mobileTimeInput = document.getElementById("mobile-time");
const commissionInput = document.getElementById("commission");

export const getBybitWithdrawnIphone = (ctx, canvas) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const img = new Image();
  ctx.textAlign = "start";
  img.src = `bybit-withdrawn-iphone-template.png`;

  img.onload = function () {
    ctx.drawImage(img, 0, 0);

    const amount = `${amountInput.value} USDT`;
    const time =
      timeInput.value === "" ? "2023-11-30 20:14:34" : timeInput.value;
    const mobileTime = mobileTimeInput.value;
    const battery = batteryInput.value;
    const commission = commissionInput.value;

    ctx.fillStyle = "rgba(255, 255, 255, 0.93)";
    ctx.font = "bold 30px IBM Plex Sans";
    const measuredText = ctx.measureText(amount);
    ctx.fillText(amount, canvas.width / 2 - measuredText.width / 2, 238);

    SFProDisplayMed.load().then((font) => {
      document.fonts.add(font);

      ctx.font = "22px SF Pro Display";
      ctx.fillText(mobileTime, 34, 39);
    });

    IBMMedium.load().then((font) => {
      document.fonts.add(font);
      ctx.textAlign = "right";

      ctx.font = "21px IBM Medium";

      ctx.fillText(commission, 552, 430);
      ctx.fillText(time, 552, 530);

      ctx.fillText(splitText2Chunks(walletInput.value, 17)[0], 530, 579);
      ctx.fillText(splitText2Chunks(walletInput.value, 17)[1], 530, 606);

      ctx.fillText(generateRandomString(19), 530, 655);
      ctx.fillText(generateRandomString(18), 530, 682);
      ctx.fillText(generateRandomString(18), 530, 709);
      ctx.fillText(generateRandomString(9), 530, 736);
    });

    SFProDisplayBold.load().then((font) => {
      ctx.textAlign = "start";
      document.fonts.add(font);

      ctx.fillStyle = "black";
      ctx.font = "17px SF Pro Display Bold";
      ctx.fillText(battery, 511, 38);
    });
  };
};
