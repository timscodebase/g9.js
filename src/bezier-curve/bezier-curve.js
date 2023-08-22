import * as g9 from 'g9'

const initialData = {
  endx: 189.99999999995265,
  endy: 76.99999999995309,
  middlex: 9.000000002109623,
  middley: -223.99999999996237,
  startx: -139.9999999999726,
  starty: 81.99999999698782,
  t: 0.5066666666666662,
}


function render(data, ctx){
  const endx = data.endx
  const endy = data.endy
  const  middlex = data.middlex
  const  middley = data.middley
  const  startx = data.startx
  const  starty = data.starty
  const  width = ctx.width
  const  height = ctx.height
  const  t = data.t

  const tlabel = 'tween='+t.toString().slice(0,4)
  ctx.text(tlabel, (t- .5)*300, height/2 - 30, {alignmentBaseline: "middle"})

  var steps = 30
  var smooth = []

  for (var i = 0; i < steps; i++) {
      var r = t*i/steps

      function tween(a,b){
          return a + r*(b-a)
      }

      var ax = tween(startx, middlex),
          ay = tween(starty, middley),
          bx = tween(middlex, endx),
          by = tween(middley, endy);
      

      ctx.line(ax, ay, bx, by, {affects: ['t'], stroke:'rgba(0,0,0,.1)'})
      smooth.push([tween(ax,bx), tween(ay,by)])
  }

  var p = smooth[0]
  for (let i = 1; i < smooth.length; i++) {
      ctx.line(p[0], p[1], smooth[i][0], smooth[i][1], {affects: ['t'], 'stroke-width': 5})
      p = smooth[i]
  }

  ctx.line(startx,starty, middlex,middley)
  ctx.line(middlex,middley, endx,endy)

  ctx.point(startx,starty)
  ctx.point(middlex,middley)
  ctx.point(endx,endy)
}


g9(initialData, render) 
    .align('center', 'center')
    .insertInto('#bezier-curve')