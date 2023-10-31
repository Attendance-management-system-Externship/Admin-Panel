import mongoose from "mongoose";
const Schema = mongoose.Schema;

// name, email, mobile
// number, and password.

const adminSchema = new Schema({
  name: String,
  email: String,
  mobile: Number,
  password: String,
});

const Admin = mongoose.model("Admin", adminSchema);

export { Admin };
