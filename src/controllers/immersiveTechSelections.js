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

    const mailOptions = {
      from: "rajuking9160@gmail.com",
      to: email,
      subject:
        "Fekki: Transforming Manuals with Augmented Reality for Smarter Engagement",
      html: `
        <p>Hello ${fullname},</p>
        <p>Your immersive technology preferences have been recorded.</p>
    
        <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
          <tr>
            <th style="background-color: #f2f2f2; text-align: left;">Questions</th>
            <th style="background-color: #f2f2f2; text-align: left;">User Response</th>
          </tr>
          <tr>
            <td>What type of immersive technology solution are you interested in?</td>
            <td>${immersiveTechnology}</td>
          </tr>
          <tr>
            <td>Which product(s) or manual(s) would you like to enhance with an immersive experience?</td>
            <td>${productDetails}</td>
          </tr>
          <tr>
            <td>What is the primary goal of the immersive solution you are looking for?</td>
            <td>${goals}</td>
          </tr>
          <tr>
            <td>Do you have any specific requirements or features in mind for your immersive solution?</td>
            <td>${requirements}</td>
          </tr>
          <tr>
            <td>What is your preferred platform for the immersive experience?</td>
            <td>${platforms}</td>
          </tr>
          <tr>
            <td>Are there any industry-specific compliance or safety requirements we should consider?</td>
            <td>${compliance}</td>
          </tr>
        </table>
    
        <p>Best Regards,<br>Your Team</p>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.status(201).json({
      message: "Selection recorded successfully, email sent!",
      selection: newSelection,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error recording selection", error });
  }
};
