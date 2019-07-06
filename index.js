function next(prev) {
  const next = new Array(prev.length + 1)
  next[0] = 1;
  next[next.length - 1] = 1;
  for(let i = 0; i < prev.length - 1; i++) {
    const first = prev[i];
    const second = prev[i + 1];
    next[i + 1] = first + second;
  }
  return next;
}

window.onload = function() {
  const pt1 = document.getElementById('pt1');
  const pt2 = document.getElementById('pt2');
  let prev = [1, 1];
  pt1.appendChild(toDivRow(prev));
  pt2.appendChild(toDivRow(prev));
  for(let i = 0; i < 25; i++) {
    prev = next(prev);
    pt1.appendChild(toDivRow(prev));
    pt2.appendChild(toDivRow(prev));
  }
  for(let i = pt2.childNodes.length - 1; i >= 0; i--) {
    pt2.appendChild(pt2.childNodes[i]);
  }
  pt2.removeChild(pt2.childNodes[0]);
}

function toDivNumber(number) {
  const result =  document.createElement('div');
  result.className = 'number';
  result.innerText = number;
  return result;
}

function toDivRow(row) {
  const result = document.createElement('div');
  result.className = 'row';
  row.map(toDivNumber).forEach((div) => result.appendChild(div));
  return result;
}
