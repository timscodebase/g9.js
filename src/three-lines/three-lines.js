import * as g9 from 'g9'

const initialData = {
  l1_start_x: -100,
  l1_start_y: -50,
  l1_end_x: 100,
  l1_end_y: -50,

  l2_start_x: -100,
  l2_start_y: 0,
  l2_end_x: 100,
  l2_end_y: 0,

  l3_start_x: -100,
  l3_start_y: 50,
  l3_end_x: 100,
  l3_end_y: 50,
}

const render = function(data, ctx){
  ctx.line(data.l1_start_x, data.l1_start_y,
      data.l1_end_x,   data.l1_end_y,
    {'stroke-width': 10})

  // if we provide an `affects` option, this
  // line will only change the parameters we name.
  ctx.line(data.l2_start_x, data.l2_start_y,
      data.l2_end_x,   data.l2_end_y, {
    affects: ['l2_start_x', 'l2_start_y'],
    stroke: 'red',
    'stroke-width': 10
  })

  ctx.line(data.l3_start_x, data.l3_start_y,
      data.l3_end_x,   data.l3_end_y, {
    affects: ['l3_start_x', 'l3_end_y'],
    'stroke':'blue',
    'stroke-width': 10
  })
}         

g9(initialData, render)
  .align('center', 'center')
  .insertInto('#three-lines')