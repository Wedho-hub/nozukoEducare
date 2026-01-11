import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    excerpt: { type: String },
    metaDescription: { type: String },
    slug: { type: String, required: true, unique: true, index: true },
    coverImage: { type: String },
    content: { type: String, required: true },
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Simple slugify helper
function slugify(str = '') {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

// Ensure slug exists and is unique before saving
blogSchema.pre('validate', async function (next) {
  if (!this.slug && this.title) {
    this.slug = slugify(this.title)
  }

  if (this.slug) {
    // ensure uniqueness: if another doc has this slug, append a counter
    let slug = this.slug
    let i = 0
    // If this is an existing doc, exclude itself
    const queryBase = this.isNew ? {} : { _id: { $ne: this._id } }

    // Loop until unique or safe limit
    while (i < 10) {
      const existing = await mongoose.models.Blog.findOne({ slug, ...queryBase })
      if (!existing) break
      i += 1
      slug = `${this.slug}-${i}`
    }
    this.slug = slug
  }

  next()
})

export default mongoose.model("Blog", blogSchema);
