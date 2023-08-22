import * as g9 from 'g9'

const initialData = {
  radius: 100,
  angle: 0
}

function render(data, ctx){
  var sides = 10
  for(var i=0; i<sides; i++){
    var a = data.angle + i/sides * Math.PI * 2
    var r1 = data.radius
    var r2 = r1/2
    ctx.point(r1 * Math.cos( a), r1 * Math.sin( a))
    ctx.point(r2 * Math.cos(-a), r2 * Math.sin(-a), {fill: 'red'})

    /* uncomment this following line to make this
        drawing more exciting! */

    ctx.line(r1 * Math.cos( a), r1 * Math.sin( a),
                r2 * Math.cos(-a), r2 * Math.sin(-a))
  }
}         

g9(initialData, render)
  .align('center', 'center')
  .insertInto('#rings')