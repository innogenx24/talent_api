import db from "../models/index.js";
import { Op } from "sequelize";

const ClientContactDetails = db.ClientContactDetails;

// Create a new client contact
export const createClientContact = async (req, res) => {
  try {
    const {
      client_id,
      date,
      industry,
      company_name,
      first_name,
      last_name,
      email,
      phone_number,
      pincode,
      country,
      state,
      city,
      street,
      landmark,
      source,
      parent_client,
      fax,
      website,
      active_status,
    } = req.body;

    // Check if client ID or email already exists
    const existingClient = await ClientContactDetails.findOne({
      where: {
        [Op.or]: [{ client_id }, { email }],
      },
    });

    if (existingClient) {
      return res.status(400).json({ message: "Client ID or Email already exists. Please use a different one." });
    }

    // Create client contact
    const clientContact = await ClientContactDetails.create({
      client_id,
      date,
      industry,
      company_name,
      first_name,
      last_name,
      email,
      phone_number,
      pincode,
      country,
      state,
      city,
      street,
      landmark,
      source,
      parent_client,
      fax,
      website,
      active_status,
      created_at: new Date(),
      updated_at: new Date(),
    });

    res.status(201).json({ message: "Client contact created successfully", clientContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating client contact", error });
  }
};

// Get all client contacts
export const getAllClientContacts = async (req, res) => {
  try {
    const clientContacts = await ClientContactDetails.findAll();
    res.status(200).json(clientContacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching client contacts", error });
  }
};

// Get client contact by ID
export const getClientContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const clientContact = await ClientContactDetails.findByPk(id);

    if (!clientContact) return res.status(404).json({ message: "Client contact not found" });

    res.status(200).json(clientContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching client contact", error });
  }
};

// Update client contact
export const updateClientContact = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      client_id,
      date,
      industry,
      company_name,
      first_name,
      last_name,
      email,
      phone_number,
      pincode,
      country,
      state,
      city,
      street,
      landmark,
      source,
      parent_client,
      fax,
      website,
      active_status,
    } = req.body;

    const clientContact = await ClientContactDetails.findByPk(id);
    if (!clientContact) return res.status(404).json({ message: "Client contact not found" });

    // Check if another client has the same client_id or email
    const existingClient = await ClientContactDetails.findOne({
      where: {
        [Op.or]: [{ client_id }, { email }],
        id: { [Op.ne]: id }, // Exclude current client contact
      },
    });

    if (existingClient) {
      return res.status(400).json({ message: "Client ID or Email already exists. Please use a different one." });
    }

    // Update client contact
    await clientContact.update({
      client_id,
      date,
      industry,
      company_name,
      first_name,
      last_name,
      email,
      phone_number,
      pincode,
      country,
      state,
      city,
      street,
      landmark,
      source,
      parent_client,
      fax,
      website,
      active_status,
      updated_at: new Date(),
    });

    res.status(200).json({ message: "Client contact updated successfully", clientContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating client contact", error });
  }
};

// Delete client contact
export const deleteClientContact = async (req, res) => {
  try {
    const { id } = req.params;
    const clientContact = await ClientContactDetails.findByPk(id);

    if (!clientContact) return res.status(404).json({ message: "Client contact not found" });

    await clientContact.destroy();

    res.status(200).json({ message: "Client contact deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting client contact", error });
  }
};
