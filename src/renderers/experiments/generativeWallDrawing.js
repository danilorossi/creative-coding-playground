const { lerp } = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');
const palettes = require('nice-color-palettes/1000.json');


random.setSeed(random.getRandomSeed());


export const generativeWallDrawing = ({ gridSize }) => ({ context, width, height }) => {

  const palette = random.pick(palettes)

  const createGrid = () => {
   const points = [];
   for (let x = 0; x < gridSize; x++) {
     for (let y = 0; y < gridSize; y++) {
       const u = x / (gridSize - 1);
       const v = y / (gridSize - 1);
       points.push([ u, v ]);
     }
   }
   return points;
  };

  const points = createGrid();



  const createTuples = (points) => {
    const result = new Array();
    const shuffled = random.shuffle(points);
    while(shuffled.length > 2) {
      const t = shuffled.splice(0, 2)
      const avg = (t[0][1] + t[1][1] / 2);
      result.push({
        tuple: t,
        avg
      })
    }
    return result;
  }

  const tuples = createTuples(points).sort((a, b) => a.avg - b.avg);

  const margin = 0;
  const bgColor = 'white';

  context.fillStyle = bgColor;
  context.fillRect(0, 0, width, height);


  context.strokeStyle = bgColor;
  context.lineWidth = 40;



  tuples.forEach(({ tuple }) => {

    const [ u0, v0 ] = tuple[0]
    const [ u1, v1 ] = tuple[1]

    const x0 = lerp(margin, width - margin, u0);
    const y0 = lerp(margin, height - margin, v0);

    const x1 = lerp(margin, width - margin, u1);
    const y1 = lerp(margin, height - margin, v1);

    context.beginPath();
    context.moveTo(x0,y0);
    context.lineTo(x1,y1);
    context.lineTo(x1,height);
    context.lineTo(x0,height);
    context.lineTo(x0,y0);
    context.fillStyle = random.pick(palette);
    context.closePath();
    context.stroke();
    context.fill()
  });
};
