import db from "../models/index.js";
import nodemailer from "nodemailer";

const Appointment = db.Appointment;

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "rajuking9160@gmail.com", // Your email
    pass: "ifye whlp asxl owhf", // Your email app password
  },
});

// Create a new appointment
export const createAppointment = async (req, res) => {
  try {
    const { user_name, user_email, appointment_date, appointment_time } = req.body;

    // Check if the appointment slot is already booked
    const existingAppointment = await Appointment.findOne({
      where: { appointment_date, appointment_time },
    });

    if (existingAppointment) {
      return res.status(400).json({
        message: "This time slot is already booked. Please choose another.",
      });
    }

    // Create new appointment
    const appointment = await Appointment.create({
      user_name,
      user_email,
      appointment_date,
      appointment_time,
    });

    // Send confirmation email
    const mailOptions = {
      from: "rajuking9160@gmail.com",
      to: user_email,
      subject: "Appointment Confirmation",
      text: `Dear ${user_name},\n\nThank you for scheduling an appointment with us.\n\nWe are pleased to confirm that your appointment has been successfully scheduled.\n\n📅 Date: ${appointment_date}\n⏰ Time: ${appointment_time}\n\nIf you have any questions or need to reschedule, please feel free to contact us.\n\nWe look forward to assisting you.\n\nBest regards,\nYour Team`
  };
  

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.status(201).json({ message: "Appointment booked successfully, email sent!", appointment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error booking appointment", error });
  }
};
