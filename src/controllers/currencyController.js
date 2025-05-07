import db from "../models/index.js";

const Currency = db.Currency;

export const createCurrency = async (req, res) => {
  try {
    const { currency_name, description, active_status } = req.body;

    const newCurrency = await Currency.create({
      currency_name,
      description,
      active_status,
    });

    res.status(201).json(newCurrency);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllCurrencies = async (req, res) => {
  try {
    const currencies = await Currency.findAll();
    res.status(200).json(currencies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCurrencyById = async (req, res) => {
  try {
    const currency = await Currency.findByPk(req.params.id);
    if (!currency) return res.status(404).json({ message: "Currency not found" });
    res.status(200).json(currency);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCurrency = async (req, res) => {
  try {
    const { currency_name, description, active_status } = req.body;
    const currency = await Currency.findByPk(req.params.id);

    if (!currency) return res.status(404).json({ message: "Currency not found" });

    await currency.update({
      currency_name,
      description,
      active_status,
    });

    res.status(200).json(currency);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCurrency = async (req, res) => {
  try {
    const currency = await Currency.findByPk(req.params.id);
    if (!currency) return res.status(404).json({ message: "Currency not found" });

    await currency.destroy();
    res.status(200).json({ message: "Currency deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
