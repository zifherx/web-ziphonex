import { connectDB } from '@/lib/db/mongoose'

async function testConnection() {
  try {
    await connectDB()
    console.log('✅ MongoDB connection successful!')
    process.exit(0)
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error)
    process.exit(1)
  }
}

testConnection()
