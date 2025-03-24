import db from "../models/index.js";
import { Op } from "sequelize";

const OrderDetails = db.OrderDetails;

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const {
      order_id,
      order_date,
      quotation_id,
      client_id,
      job_descriptions, // JSON array
      start_date,
      end_date,
      company_name,
      contact_person,
      mail_id,
      phone_number,
      executive,
      total,
      address_line1,
      landmark,
      pincode,
      country,
      state,
      city,
    } = req.body;

    // Create the order
    const order = await OrderDetails.create({
      order_id,
      order_date,
      quotation_id,
      client_id,
      job_descriptions, // Store job descriptions as JSON
      start_date,
      end_date,
      company_name,
      contact_person,
      mail_id,
      phone_number,
      executive,
      total,
      address_line1,
      landmark,
      pincode,
      country,
      state,
      city,
    });

    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating order", error });
  }
};

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await OrderDetails.findAll();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching orders", error });
  }
};

// Get order by ID
export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await OrderDetails.findByPk(id);

    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching order", error });
  }
};

// Update order
export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      order_id,
      order_date,
      quotation_id,
      client_id,
      job_descriptions,
      start_date,
      end_date,
      company_name,
      contact_person,
      mail_id,
      phone_number,
      executive,
      total,
      address_line1,
      landmark,
      pincode,
      country,
      state,
      city,
    } = req.body;

    const order = await OrderDetails.findByPk(id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    // Check if another order has the same order_id
    const existingOrder = await OrderDetails.findOne({
      where: {
        order_id,
        id: { [Op.ne]: id },
      },
    });

    if (existingOrder) {
      return res.status(400).json({ message: "Order ID already exists. Please use a different ID." });
    }

    // Update order
    await order.update({
      order_id,
      order_date,
      quotation_id,
      client_id,
      job_descriptions,
      start_date,
      end_date,
      company_name,
      contact_person,
      mail_id,
      phone_number,
      executive,
      total,
      address_line1,
      landmark,
      pincode,
      country,
      state,
      city,
      updated_at: new Date(),
    });

    res.status(200).json({ message: "Order updated successfully", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating order", error });
  }
};

// Delete order
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await OrderDetails.findByPk(id);

    if (!order) return res.status(404).json({ message: "Order not found" });

    await order.destroy();

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting order", error });
  }
};
