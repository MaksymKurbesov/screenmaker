export const generateRandomString = (length) => {
  let result = "";
  const characters = "0123456789abcdef";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const createCustomString = () => {
  const prefix = "0x00";
  // Учитываем длину префикса (4 символа), вычитаем их из общей длины строки
  const restOfTheString = generateRandomString(64 - prefix.length);
  return prefix + restOfTheString;
};

export const generateBingXTXID = (length) => {
  let result = "0x00";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const splitText2Chunks = (text, count) => {
  const part1 = text.substring(0, count);
  const part2 = text.substring(count);

  return [part1, part2];
};

export const splitText3Chunks = (text) => {
  const part1 = text.substring(0, 27);
  const part2 = text.substring(27, 54);
  const part3 = text.substring(54);

  return [part1, part2, part3];
};

export const generateRandomSevenDigitNumber = () => {
  let result = "";
  const digits = "0123456789";

  for (let i = 0; i < 7; i++) {
    result += digits.charAt(Math.floor(Math.random() * digits.length));
  }

  return result;
};

export const drawRoundedRect = (ctx, x, y, width, height, radius) => {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();
};
