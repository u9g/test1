const fs = require('fs')
const fsP = require('fs').promises
const path = require('path')

const res = fs.readdirSync('.')
  .filter(o => !o.startsWith('.') && !o.endsWith('js'))
  .forEach(async (o) => {
    try {
      const res1 = await fsP.access(path.join('..', o))
      console.log(path.join('..', o))
      fsP.rmdir(path.join('..', o), { recursive: true })
    } catch (err) {
      console.log(err)
    }
  })
