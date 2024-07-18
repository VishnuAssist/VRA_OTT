import { differenceInSeconds } from "date-fns";

// Function to convert hex color to RGB
export const convertHexToRGB = (hex: string): string | undefined => {
  // check if it's a rgba
  if (hex.match("rgba")) {
    let triplet = hex.slice(5).split(",").slice(0, -1).join(",");
    return triplet;
  }

  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");

    return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",");
  }
};

// Function to get the current Y position of an element
function currentYPosition(elm?: HTMLElement | null): number {
  if (!window && !elm) return 0;

  if (elm) return elm.scrollTop;
  // Firefox, Chrome, Opera, Safari
  if (window.pageYOffset) return window.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

// Function to get the Y position of an element
function elmYPosition(elm: HTMLElement): number {
  let y = elm.offsetTop;
  let node: HTMLElement | null = elm;
  while (node.offsetParent && node.offsetParent !== document.body) {
    node = node.offsetParent as HTMLElement;
    y += node.offsetTop;
  }
  return y;
}

// Function to scroll to a specific element
export function scrollTo(scrollableElement: HTMLElement, elmID: string): void | false {
  const elm = document.getElementById(elmID);

  if (!elmID || !elm) {
    return;
  }

  const startY = currentYPosition(scrollableElement);
  const stopY = elmYPosition(elm);

  const distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    scrollableElement.scrollTo(0, stopY);
    return;
  }
  let speed = Math.round(distance / 50);
  if (speed >= 20) speed = 20;
  const step = Math.round(distance / 25);
  let leapY = stopY > startY ? startY + step : startY - step;
  let timer = 0;
  if (stopY > startY) {
    for (let i = startY; i < stopY; i += step) {
      setTimeout(
        (leapY => () => {
          scrollableElement.scrollTo(0, leapY);
        })(leapY),
        timer * speed
      );
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    return;
  }
  for (let i = startY; i > stopY; i -= step) {
    setTimeout(
      (leapY => () => {
        scrollableElement.scrollTo(0, leapY);
      })(leapY),
      timer * speed
    );
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
  return false;
}

// Function to get the time difference
export function getTimeDifference(date: Date): string {
  let difference = differenceInSeconds(new Date(), date);

  if (difference < 60) return `${Math.floor(difference)} sec`;
  else if (difference < 3600) return `${Math.floor(difference / 60)} min`;
  else if (difference < 86400) return `${Math.floor(difference / 3600)} h`;
  else if (difference < 86400 * 30) return `${Math.floor(difference / 86400)} d`;
  else if (difference < 86400 * 30 * 12) return `${Math.floor(difference / 86400 / 30)} mon`;
  else return `${(difference / 86400 / 30 / 12).toFixed(1)} y`;
}
