// Створіть модель користувача User з такими полями:

// name - string, required
// email - string, email, unique, required
// password - string, required

import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,

      required: true,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.methods.toJSON = function () {
  const object = this.toObject();
  delete object.password;
  return object;
};

userSchema.pre('save', function (next) {
  if (!this.avatar) {
    this.avatar = `https://ac.goit.global/fullstack/react/default-avatar.jpg`;
  }
  next();
});

export const User = model('User', userSchema);
