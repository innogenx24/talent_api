import db from "../models/index.js";
import nodemailer from "nodemailer";

const UserProfile = db.UserProfile;

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "rajuking9160@gmail.com", // Your email
    pass: "ifye whlp asxl owhf", // Your email app password
  },
});

// Create a new user profile
export const createUserProfile = async (req, res) => {
  try {
    const { fullname, email, company_name, phone_number, interest, experience } = req.body;

    // Check if email already exists
    const existingUser = await UserProfile.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists. Please use a different email.",
      });
    }

    // Create new user profile
    const userProfile = await UserProfile.create({
      fullname,
      email,
      company_name,
      phone_number,
      interest,
      experience,
    });

    // Send confirmation email
    const mailOptions = {
      from: "rajuking9160@gmail.com",
      to: email,
      subject: "Welcome to Our Platform!",
      text: `Hello ${fullname},\n\nThank you for signing up on our platform.\n\nYour details:\nCompany: ${company_name}\nPhone: ${phone_number}\nInterest: ${interest}\nExperience: ${experience} years\n\nBest Regards,\nYour Team`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.status(201).json({ message: "User profile created successfully, email sent!", userProfile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user profile", error });
  }
};


// Get all user profiles
export const getAllUserProfiles = async (req, res) => {
  try {
    const userProfiles = await UserProfile.findAll();
    res.status(200).json(userProfiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching user profiles", error });
  }
};

// Get user profile by ID
export const getUserProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const userProfile = await UserProfile.findByPk(id);

    if (!userProfile) return res.status(404).json({ message: "User profile not found" });

    res.status(200).json(userProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching user profile", error });
  }
};

// Update user profile
export const updateUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, email, company_name, phone_number, interest, experience } = req.body;

    // Find the user profile by ID
    const userProfile = await UserProfile.findByPk(id);
    if (!userProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    // Check if email already exists (excluding the current user profile)
    const existingUser = await UserProfile.findOne({
      where: {
        email,
        id: { [Op.ne]: id }, // Ensure unique email for other users
      },
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists. Please use a different email.",
      });
    }

    // Update the user profile details
    await userProfile.update({
      fullname,
      email,
      company_name,
      phone_number,
      interest,
      experience,
    });

    res.status(200).json({ message: "User profile updated successfully", userProfile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating user profile", error });
  }
};

// Delete user profile
export const deleteUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const userProfile = await UserProfile.findByPk(id);

    if (!userProfile) return res.status(404).json({ message: "User profile not found" });

    await userProfile.destroy();

    res.status(200).json({ message: "User profile deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting user profile", error });
  }
};
