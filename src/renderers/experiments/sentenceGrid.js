const { lerp } = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');
const palettes = require('nice-color-palettes/1000.json');

const sentenceGrid = (payload) => async ({ context, width, height }) => {
  const sentence = payload.sentence.toUpperCase()
  const count = Math.ceil(Math.sqrt(sentence.length));
  const chars = sentence.split('');

  let palette = random.pick(palettes);

  palette = random.shuffle(palette);
  palette = palette.slice(0, 3);
  const [ bgColor, pointColor, arcColor ] = palette;

  const radians = function(degrees) {
    return degrees * Math.PI / 180;
  };

  const createGrid = () => {
   const points = [];
   let idx = 0;
   for (let x = 0; x < count; x++) {
     for (let y = 0; y < count; y++) {
       const u = y / (count - 1);
       const v = x / (count - 1);
       const character = chars[idx++] || '';
       points.push([ u, v, character ]);
     }
   }
   return points;
  };

  const points = createGrid();

  const fontUrl = process.env.PUBLIC_URL + '/assets/fonts/SpaceGrotesk-Bold.otf';
  const font = new window.FontFace(
    'SpaceGrotesk-Bold',
    `url(${fontUrl})`
  );
  // We use async/await ES6 syntax to wait for the font to load
  await font.load();

  // Add the loaded font to the document
  document.fonts.add(font);


  const margin = width * 0.175;

  context.fillStyle = bgColor;
  context.fillRect(0, 0, width, height);

  points.forEach(([ u, v, character ]) => {
    const x = lerp(margin, width - margin, u);
    const y = lerp(margin, height - margin, v);

    const startingAngle = random.pick([0, 90, 180, 270])
    context.beginPath();
    context.arc(x, y, 80, radians(startingAngle), radians(startingAngle+270));
    context.strokeStyle = pointColor;
    context.lineWidth = 40;
    context.stroke();

    context.beginPath();
    context.arc(x, y, 80, radians(startingAngle+270), radians(startingAngle));
    context.strokeStyle = arcColor;
    context.lineWidth = 40;
    context.stroke();

    context.fillStyle = arcColor;
    context.font = `80px "SpaceGrotesk-Bold"`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(character, x, y+5);
  });
};

export const sentenceGridSketchMeta = {
  title: 'Sentence Grid',
  fileName: 'sentenceGrid.js',
  renderer: sentenceGrid,
  showRefresh: true,
  payload: {
    sentence: 'Well, have you heard the great news?'
  }
};
