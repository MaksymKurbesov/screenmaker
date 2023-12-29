import "./index.css";
import { getBybitDepositIphone } from "./getBybitDepositIphone";
import { getBingxDepositIphone } from "./getBingxDepositIphone";
import { getBybitWithdrawnIphone } from "./getBybitWithdrawnIphone";
import { getBingxWithdrawnIphone } from "./getBingxWithdrawnIphone";
import { getBybitDepositAndroid } from "./getBybitDepositAndroid";
import { getBybitWithdrawnAndroid } from "./getBybitWithdrawnAndroid";

export const IBMMedium = new FontFace(
  "IBM Medium",
  "url(IBMPlexSans-Medium.ttf)"
);
export const SFProDisplayMed = new FontFace(
  "SF Pro Display",
  "url(SF-Pro-Display-Medium.otf)"
);
export const SFProDisplayBold = new FontFace(
  "SF Pro Display Bold",
  "url(SF-Pro-Display-Bold.otf)"
);

export const Rubik = new FontFace("Rubik", "url(Rubik-Regular.ttf)");
export const Montserrat = new FontFace(
  "Montserrat",
  "url(Montserrat-Medium.ttf)"
);

const getScreenButton = document.getElementById("get-screen");
const templateInput = document.getElementById("template");
const canvas = document.getElementById("example");
const ctx = canvas.getContext("2d");

const TEMPLATE_FN_MAP = {
  "bybit-deposit-iphone": getBybitDepositIphone,
  "bybit-withdrawn-iphone": getBybitWithdrawnIphone,
  "bybit-deposit-android": getBybitDepositAndroid,
  "bybit-withdrawn-android": getBybitWithdrawnAndroid,
  "bingx-deposit-iphone": getBingxDepositIphone,
  "bingx-withdrawn-iphone": getBingxWithdrawnIphone,
};

templateInput.addEventListener("change", (e) => {
  TEMPLATE_FN_MAP[e.target.value](ctx, canvas);
});

getScreenButton.addEventListener("click", () => {
  TEMPLATE_FN_MAP[templateInput.value](ctx, canvas);
});

TEMPLATE_FN_MAP[templateInput.value](ctx, canvas);
