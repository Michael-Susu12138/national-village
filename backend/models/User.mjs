import mongoose from "mongoose";

// mongoose.connect(process.env.DSN);

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // Ensure usernames are unique
      trim: true, // Remove whitespace from both ends
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email addresses are unique
      trim: true, // Remove whitespace from both ends
    },
    fullName: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
    },
    signUpDate: {
      type: Date,
      default: Date.now,
    },
    lastLogin: {
      type: Date,
      default: null,
    },
    profilePictureUrl: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin", "moderator"], // Specify user roles
      default: "user",
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    preferences: {
      newsletterSubscribed: {
        type: Boolean,
        default: false,
      },
      theme: {
        type: String,
        default: "light", // Example preference
      },
      // Additional preferences can be added here
    },
    // Include other fields as necessary for your application
  },
  { timestamps: true } // Use timestamps for createdAt and updatedAt
);

const User = mongoose.model("User", UserSchema);

export default User;
