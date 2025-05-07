import db from "../models/index.js";
const OffBoardingReason = db.OffBoardingReason;

// Create a new OffBoardingReason
export const createOffBoardingReason = async (req, res) => {
  try {
    const { ReasonName, Description, IsActive } = req.body;

    const newOffBoardingReason = await OffBoardingReason.create({
      ReasonName,
      Description,
      IsActive,
    });

    return res.status(201).json({
      message: 'OffBoardingReason created successfully',
      data: newOffBoardingReason,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error creating OffBoardingReason' });
  }
};

// Get all OffBoardingReasons
export const getAllOffBoardingReasons = async (req, res) => {
    try {
      const offBoardingReasons = await OffBoardingReason.findAll();
  
      res.status(200).json(offBoardingReasons);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching OffBoardingReasons' });
    }
  };
// Get a single OffBoardingReason by ReasonID
export const getOffBoardingReasonById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const offBoardingReason = await OffBoardingReason.findByPk(id);
    
    if (!offBoardingReason) {
      return res.status(404).json({ message: 'OffBoardingReason not found' });
    }

    return res.status(200).json({
      message: 'OffBoardingReason fetched successfully',
      data: offBoardingReason,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching OffBoardingReason' });
  }
};

// Update an existing OffBoardingReason by ReasonID
export const updateOffBoardingReason = async (req, res) => {
  const { id } = req.params;
  const { ReasonName, Description, IsActive } = req.body;

  try {
    const offBoardingReason = await OffBoardingReason.findByPk(id);

    if (!offBoardingReason) {
      return res.status(404).json({ message: 'OffBoardingReason not found' });
    }

    offBoardingReason.ReasonName = ReasonName || offBoardingReason.ReasonName;
    offBoardingReason.Description = Description || offBoardingReason.Description;
    offBoardingReason.IsActive = IsActive !== undefined ? IsActive : offBoardingReason.IsActive;

    await offBoardingReason.save();

    return res.status(200).json({
      message: 'OffBoardingReason updated successfully',
      data: offBoardingReason,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error updating OffBoardingReason' });
  }
};

// Delete an OffBoardingReason by ReasonID
export const deleteOffBoardingReason = async (req, res) => {
  const { id } = req.params;

  try {
    const offBoardingReason = await OffBoardingReason.findByPk(id);

    if (!offBoardingReason) {
      return res.status(404).json({ message: 'OffBoardingReason not found' });
    }

    await offBoardingReason.destroy();

    return res.status(200).json({
      message: 'OffBoardingReason deleted successfully',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error deleting OffBoardingReason' });
  }
};
