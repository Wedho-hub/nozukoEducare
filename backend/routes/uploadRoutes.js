import express from 'express'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import { protect } from '../middleware/authMiddleware.js'
import { adminOnly } from '../middleware/adminMiddleware.js'
import cloudinary from '../utils/cloudinary.js'

const router = express.Router()

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'nozuko-educare/blogs',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
    // Auto-optimise: limit width, compress, convert to modern format
    transformation: [
      { width: 1200, crop: 'limit' },
      { quality: 'auto:good', fetch_format: 'auto' },
    ],
  },
})

function fileFilter(req, file, cb) {
  if (/^image\/(jpeg|png|webp)$/i.test(file.mimetype)) {
    cb(null, true)
  } else {
    cb(new Error('Only .jpg, .jpeg, .png and .webp images are allowed.'))
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
})

// POST /api/uploads — admin only
router.post('/', protect, adminOnly, upload.single('file'), (req, res) => {
  try {
    if (!req.file) throw new Error('No file received')

    // multer-storage-cloudinary puts the secure URL in req.file.path
    const url = req.file.path
    const publicId = req.file.filename

    console.log('[UPLOAD] Cloudinary upload OK:', { url, publicId })
    res.status(201).json({ url, publicId })
  } catch (err) {
    console.error('[UPLOAD] Error:', err.message)
    res.status(500).json({ message: err.message || 'Upload failed' })
  }
})

export default router
