import db from "../models/index.js";
import nodemailer from "nodemailer";

const ImmersiveTechSelection = db.ImmersiveTechSelection;

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "rajuking9160@gmail.com", // Your email
    pass: "ifye whlp asxl owhf", // Your email app password
  },
});

// Create a new immersive tech selection
export const createImmersiveTechSelection = async (req, res) => {
  try {
    const {
      email,
      fullname,
      immersiveTechnology,
      productDetails,
      goals,
      requirements,
      platforms,
      compliance,
    } = req.body;

    // Create new immersive tech selection entry
    const newSelection = await ImmersiveTechSelection.create({
      email,
      fullname,
      selected_options: immersiveTechnology,
      product_details: productDetails,
      selected_goals: goals,
      requirements,
      selected_platforms: platforms,
      compliance,
    });

    // Send confirmation email
    const mailOptions = {
      from: "rajuking9160@gmail.com",
      to: email,
      subject: "Immersive Tech Selection Confirmation",
      text: `Hello ${fullname},\n\nYour immersive technology preferences have been recorded.\n\nDetails:\n1. What type of immersive technology solution are you interested in?: 
      ${immersiveTechnology}\n2. Which product(s) or manual(s) would you like to enhance with an immersive experience?: ${productDetails}\n3. What is the primary goal of the immersive solution you are looking for?
: ${goals}\n4. Do you have any specific requirements or features in mind for your immersive solution?
: ${requirements}\n5. What is your preferred platform for the immersive experience?
: 
      ${platforms}\n6. Are there any industry-specific compliance or safety requirements we should consider?
: ${compliance}\n\nBest Regards,\nYour Team`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res
      .status(201)
      .json({
        message: "Selection recorded successfully, email sent!",
        selection: newSelection,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error recording selection", error });
  }
};
