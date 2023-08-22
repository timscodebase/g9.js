import * as g9 from 'g9'

const data = {
  x1: 100,
  y1: 100,
  x2: -100,
  y2: 100,
  x3: 0,
  y3: -50,
}

function invert(m){
  var [[a,b], [c,d]] = m
  var det = a*d - b*c
  return [[d/det, -b/det], [-c/det, a/det]]
}

function multiply(A, x){
  var [[a,b], [c,d]] = A
  var [x, y] = x
  return [a*x + b*y, c*x+d*y]
}


function render(data, ctx){
  const mx1 = (data.x1 + data.x2)/2
  const my1 = (data.y1 + data.y2)/2
  const dy1 = data.y1 - data.y2
  const dx1 = -(data.x1 - data.x2)

  const mx2 = (data.x3 + data.x2)/2
  const my2 = (data.y3 + data.y2)/2
  const dy2 = data.y2 - data.y3
  const dx2 = -(data.x2 - data.x3)

  const I = invert([[dy1, -dy2], 
                  [dx1, -dx2]])
  const [a,b] = multiply(I, [mx2-mx1, my2-my1])

  ctx.line(
    data.x1,
    data.y1,
    data.x2,
    data.y2,
    {stroke: 'red'})

  ctx.line(
    data.x3,
    data.y3,
    data.x2,
    data.y2,
    {stroke: 'blue'})

  ctx.line(
    mx1,
    my1,
    mx1 + 2 * a * dy1,
    my1 + 2 * a * dx1,
    {stroke: 'red'})

  ctx.line(
    mx2,
    my2,
    mx2 + 2 * b * dy2,
    my2 + 2 * b * dx2,
    {stroke: 'blue'})

  const cx = mx1 + a*dy1
  const cy = my1 + a*dx1

  const dx = cx - data.x1
  const dy = cy - data.y1

  ctx.point(cx, cy)

  ctx.circle(cx, cy, Math.sqrt(dx*dx + dy*dy), {
    fill: 'none',
    stroke: 'green',
    'stroke-width': 3
  })
  ctx.point(data.x1, data.y1)
  ctx.point(data.x2, data.y2)

  ctx.point(data.x3, data.y3)
}

const demo = g9(data, render) 
  .align('center', 'center')
    .insertInto('#circle')