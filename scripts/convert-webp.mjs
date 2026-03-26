import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = 'src/assets';
const images = [
  'about-photo-1', 'about-photo-2',
  'pet-client-1', 'pet-client-2', 'pet-client-3', 'pet-client-4', 'pet-client-5',
  'duck-watercolor-clean', 'hero-v11'
];

async function convertToWebp() {
  for (const name of images) {
    const lg = path.join(assetsDir, `${name}-lg.jpg`);
    const md = path.join(assetsDir, `${name}-md.jpg`);
    const sm = path.join(assetsDir, `${name}-sm.jpg`);

    const files = [
      { src: lg, target: `${name}-lg.webp`, width: null }, // already resized
      { src: md, target: `${name}-md.webp`, width: null },
      { src: sm, target: `${name}-sm.webp`, width: null }
    ];

    for (const file of files) {
      if (fs.existsSync(file.src)) {
        console.log(`Converting ${file.src} to ${file.target}`);
        await sharp(file.src)
          .webp({ quality: 80 })
          .toFile(path.join(assetsDir, file.target));
      }
    }
  }
}

convertToWebp().catch(console.error);
