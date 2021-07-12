import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isSuperAdmin: {
    type: Boolean,
    default: false,
  },
  banned: {
    type: Boolean,
    required: true,
    default: false,
  },
  bannedAt: Number,
  activationCode: {
    type: String,
    required: true,
  },
  activatedAt: Number,
});

userSchema.set("timestamps", true);
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ username: 1 }, { unique: true });

export default model("User", userSchema);
