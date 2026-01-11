#!/usr/bin/env node
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Blog from '../models/Blog.js'

dotenv.config()

async function run() {
  await mongoose.connect(process.env.MONGO_URI)
  const blogs = await Blog.find({})
  let count = 0
  for (const b of blogs) {
    if (!b.slug || b.slug.trim() === '') {
      b.slug = (b.title || 'post-' + b._id).toLowerCase().replace(/[^a-z0-9\-\s]/g, '').replace(/\s+/g, '-')
      await b.save()
      count++
    }
  }
  console.log(`Backfilled ${count} slugs`)
  process.exit(0)
}

run().catch((err) => { console.error(err); process.exit(1) })
