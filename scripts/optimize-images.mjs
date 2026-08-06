import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve('public/images')

/** Same visuals, smaller files. Keep alpha only where needed. */
const jobs = [
  { file: 'hero-car.png', maxW: 1920, q: 78 },
  { file: 'hero-car-mobile.png', maxW: 1080, q: 78 },
  { file: 'hero-car-cutout-tight.png', maxW: 1400, q: 82, alpha: true },
  { file: 'philosophy-hero.png', maxW: 1800, q: 78 },
  { file: 'personal-hero.png', maxW: 1600, q: 78 },
  { file: 'personal-01-tempo.png', maxW: 1200, q: 78 },
  { file: 'personal-02-guide.png', maxW: 1200, q: 78 },
  { file: 'experience-trust.png', maxW: 1400, q: 78 },
  { file: 'experience-hero.png', maxW: 1400, q: 78 },
  { file: 'method-welcome.jpg', maxW: 1200, q: 78 },
  { file: 'method-guidance.jpg', maxW: 1200, q: 78 },
  { file: 'method-confidence.jpg', maxW: 1200, q: 78 },
  { file: 'journey-01-arrival.jpg', maxW: 1000, q: 76 },
  { file: 'journey-02-connection.jpg', maxW: 1000, q: 76 },
  { file: 'journey-03-growth.jpg', maxW: 1000, q: 76 },
  { file: 'journey-04-resolution.jpg', maxW: 1000, q: 76 },
  { file: 'ai-approach.jpg', maxW: 1200, q: 76 },
  { file: 'ai-cockpit.jpg', maxW: 1200, q: 76 },
  { file: 'ai-driving.jpg', maxW: 1200, q: 76 },
  { file: 'ai-exterior.jpg', maxW: 1400, q: 76 },
  { file: 'ai-region.jpg', maxW: 1400, q: 76 },
  { file: 'ai-cta.jpg', maxW: 1400, q: 76 },
]

function outName(file) {
  return file.replace(/\.(png|jpe?g|webp)$/i, '.webp')
}

async function optimize({ file, maxW, q, alpha = false }) {
  const input = path.join(root, file)
  const output = path.join(root, outName(file))
  const before = (await fs.stat(input)).size

  let pipeline = sharp(input, { failOn: 'none' }).rotate()
  const meta = await pipeline.metadata()
  if (meta.width && meta.width > maxW) {
    pipeline = pipeline.resize({
      width: maxW,
      withoutEnlargement: true,
      fit: 'inside',
    })
  }

  if (alpha) {
    await pipeline.webp({ quality: q, alphaQuality: 90, effort: 5 }).toFile(output)
  } else {
    await pipeline.webp({ quality: q, effort: 5 }).toFile(output)
  }

  const after = (await fs.stat(output)).size
  const pct = (((before - after) / before) * 100).toFixed(0)
  console.log(
    `${file} → ${outName(file)}  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB  (−${pct}%)`,
  )
}

const results = []
for (const job of jobs) {
  try {
    await optimize(job)
    results.push(job.file)
  } catch (err) {
    console.error(`FAIL ${job.file}:`, err.message)
  }
}

console.log(`\nOptimized ${results.length}/${jobs.length} images`)
