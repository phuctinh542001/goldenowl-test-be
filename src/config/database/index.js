import mongoose from 'mongoose';

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://phuctinh542001:123456Test@goldenowltest.k56bjik.mongodb.net/goldenowl-test?retryWrites=true&w=majority');
    console.log('Connect Successfully');
  } catch (error) {
    console.log('Connect Failure');
  }
}

export default { connect };
