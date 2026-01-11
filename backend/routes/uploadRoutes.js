import express from 'express'
import multer from 'multer'
import path from 'path'
import { protect } from '../middleware/authMiddleware.js'
import { adminOnly } from '../middleware/adminMiddleware.js'

const router = express.Router()

// Configure storage in backend/uploads with original filename prefixed by timestamp
import url from 'url';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '..', 'uploads')),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`)
})

function fileFilter(req, file, cb) {
  const extAllowed = /\.(jpe?g|png|webp)$/i;
  const mimeAllowed = /^image\/(jpeg|png|webp)$/i;
  const ext = path.extname(file.originalname);
  const mime = file.mimetype;
  if (extAllowed.test(ext) && mimeAllowed.test(mime)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only .jpg, .jpeg, .png, .webp images are allowed.'));
  }
}

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } })

// POST /api/uploads - authenticated admin only
router.post('/', protect, adminOnly, upload.single('file'), (req, res) => {
  try {
    if (!req.file) throw new Error('No file uploaded')
    // Provide a relative URL for frontend to consume
    const url = `/uploads/${req.file.filename}`
    console.log('[UPLOAD SUCCESS]', {
      filename: req.file.filename,
      mimetype: req.file.mimetype,
      size: req.file.size,
      path: req.file.path
    })
    res.status(201).json({ url })
  } catch (err) {
    console.error('[UPLOAD ERROR]', {
      error: err,
      stack: err.stack,
      file: req.file,
      body: req.body
    })
    res.status(500).json({ message: err.message || 'Internal server error', stack: process.env.NODE_ENV === 'production' ? null : err.stack })
  }
})

export default router
