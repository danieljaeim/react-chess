function diagMovesArr(yCurrent, xCurrent, yEnd, xEnd) {
  let path = [];
  let yCur = yCurrent + 1; 
  let xCur = xCurrent + 1; 
  let yE = yEnd; 
  let xE = xEnd;

  while (Math.abs(yE - yCur) !== 0 && Math.abs(xE - xCur) !== 0) {
    let yDiff = yE - yCur > 0 ? 1 : -1;
    let xDiff = xE - yCur > 0 ? 1 : -1;

    console.log('ycur', yCur, 'xcur', xCur, 'yE', yE, 'xE', xE);

    path.push([yCur, xCur]);

    yCur += yDiff;
    xCur += xDiff;
  }

  return path;
}

console.log(diagMovesArr(0, 3, 3, 6));