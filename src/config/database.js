import mongoose from 'mongoose';

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECT_URI);
    console.log('Connect Successfully');
  } catch (error) {
    console.log('Connect Failure: ', error.message);
  }
}

export default { connect };
