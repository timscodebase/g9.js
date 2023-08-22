import * as g9 from 'g9';

const initialData = {
  x: 10,
  y: 0
};

const render = function(data, ctx){
  ctx.point(data.x, data.y);
  ctx.point(data.y, data.x);

  ctx.line(data.x, data.y, data.y, data.x);
};         

g9(initialData, render)
  .align('center', 'center')
  .insertInto('#two-dots');