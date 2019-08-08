const { lerp } = require('canvas-sketch-util/math');

const simpleGrid = (payload) => ({ context, width, height }) => {

  const count = 8;

  const createGrid = () => {
   const points = [];
   for (let x = 0; x < count; x++) {
     for (let y = 0; y < count; y++) {
       const u = x / (count - 1);
       const v = y / (count - 1);
       points.push([ u, v ]);
     }
   }
   return points;
  };

  const points = createGrid();

  const margin = width * 0.175;

  context.fillStyle = 'white';
  context.fillRect(0, 0, width, height);

  points.forEach(([ u, v ]) => {
    const x = lerp(margin, width - margin, u);
    const y = lerp(margin, height - margin, v);

    context.beginPath();
    context.arc(x, y, 40, 0, Math.PI * 2);
    context.strokeStyle = 'black';
    context.lineWidth = 20;
    context.stroke();
  });
};

export const simpleGridSketchMeta = {
  title: 'Simple Grid',
  fileName: 'examples/simpleGrid.js',
  renderer: simpleGrid,
  showRefresh: false,
};
