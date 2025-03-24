import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import db from './config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import parentRouter from './routes/parentRouter.js';
import userDetailsRoutes from "./routes/userDetailsRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";
import experienceRoutes from "./routes/experienceRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import branchRoutes from "./routes/branchRoutes.js";
import vendorRoutes from "./routes/vendorRoutes.js";
import invoiceDetailsRoutes from "./routes/invoiceDetailsRoutes.js";
import accountDetailsRoutes from "./routes/accountDetailsRoutes.js";
import clientDetailsRoutes from "./routes/clientDetailsRoutes.js";
import quotationsRoutes from "./routes/quotationsRoutes.js";
import orderDetailsRoutes from "./routes/orderDetailsRoutes.js";
import clientContactDetailsRoutes from "./routes/clientContactDetailsRoutes.js";
import resumeBankRoutes from "./routes/resumeBankRoutes.js";
import candidateDetailsRoutes from "./routes/candidateDetailsRoutes.js";
import userProfilesRoutes from "./routes/userProfilesRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import immersiveTechSelectionsRoutes from "./routes/immersiveTechSelectionsRoutes.js";


dotenv.config();

const app = express();

//**  Middlewares **//
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from frontend
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization'
}));
app.use(morgan('dev'));
app.use(helmet());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', parentRouter);
app.use("/api/users", userDetailsRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/experience-range", experienceRoutes);
app.use("/api/department", departmentRoutes);
app.use("/api/branch", branchRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/invoice-details", invoiceDetailsRoutes);
app.use("/api/account-details", accountDetailsRoutes);
app.use("/api/client-details", clientDetailsRoutes);
app.use("/api/quotations-details", quotationsRoutes);
app.use("/api/orders-details", orderDetailsRoutes);
app.use("/api/client-contact-details", clientContactDetailsRoutes);
app.use("/api/resume-bank", resumeBankRoutes);
app.use("/api/candidate-details", candidateDetailsRoutes);
app.use("/api/user-profile", userProfilesRoutes);
app.use("/api/appointment", appointmentRoutes);
app.use("/api/immersive-tech-selections", immersiveTechSelectionsRoutes);

//** Database connection check **//
db.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log('Database connection failed:', err));

//** Start server **//
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
