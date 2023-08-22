import * as g9 from 'g9';

const initialData = {
  ax: 0,
  ay: 0,
  az: 0,
};

const sin = Math.sin;
const cos = Math.cos;

function multiplyMatrixAndVector(m, v) {
  return m.map(row => row.reduce((a, b, i) => a + b * v[i], 0));
}

function rotateX(v, theta) {
  return multiplyMatrixAndVector(
    [
      [1, 0, 0],
      [0, cos(theta), -sin(theta)],
      [0, sin(theta), cos(theta)]
    ],
    v
  );
}

function rotateY(v, theta) {
  return multiplyMatrixAndVector(
    [
      [cos(theta), 0, sin(theta)],
      [0, 1, 0],
      [-sin(theta), 0, cos(theta)]
    ],
    v
  );
}

function rotateZ(v, theta) {
  return multiplyMatrixAndVector(
    [
      [cos(theta), -sin(theta), 0],
      [sin(theta), cos(theta), 0],
      [0, 0, 1]
    ],
    v
  );
}

function rotate(v, ax, ay, az) {
  return rotateX(rotateY(rotateZ(v, az), ay), ax);
}

function translate(p, dx, dy, dz) {
  return [p[0] + dx, p[1] + dy, p[2] + dz];
}

function project(p) {
  return [300 * p[0] / p[2], 300 * p[1] / p[2]];
}

const points = [];
for (let x = 0; x < 2; x++) {
  for (let y = 0; y < 2; y++) {
    for (let z = 0; z < 2; z++) {
      points.push([x - 0.5, y - 0.5, z - 0.5]);
    }
  }
}

const edges = [];

for (let i = 0; i < points.length; i++) {
  const pi = points[i];
  for (let j = i + 1; j < points.length; j++) {
    const pj = points[j];
    if (pi.reduce((a, c, k) => a + (c !== pj[k]), 0) === 1) {
      edges.push([pi, pj]);
    }
  }
}

function render(data, ctx) {
  const ax = data.ax;
  const ay = data.ay;
  const az = data.az;

  const drawEdge = ctx.pure(ps => {
    const p1 = project(translate(rotate(ps[0], ax, ay, 0), 0, 0, 2));
    const p2 = project(translate(rotate(ps[1], ax, ay, 0), 0, 0, 2));
    ctx.line(p1[0], p1[1], p2[0], p2[1], {
      affects: ['ax', 'ay'],
      'stroke-width': 10,
      'stroke-linecap': 'round'
    });
  });

  edges.forEach(drawEdge);
}

function log(x) {
  console.log(x);
}

g9(initialData, render, log)
  .align('center', 'center')
  .insertInto('#cube');