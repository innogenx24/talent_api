import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import db from './config/db.js';
import parentRouter from './routes/parentRouter.js';
import userDetailsRoutes from "../src/routes/userDetailsRoutes.js";
import roleRoutes from "../src/routes/roleRoutes.js";
import experienceRoutes  from "../src/routes/experienceRoutes.js";
import departmentRoutes from "../src/routes/departmentRoutes.js";
import branchRoutes from "../src/routes/branchRoutes.js";
import vendorRoutes from "../src/routes/vendorRoutes.js"; 
import invoiceDetailsRoutes from "../src/routes/invoiceDetailsRoutes.js"; 
import accountDetailsRoutes from "../src/routes/accountDetailsRoutes.js"; 
import clientDetailsRoutes from "../src/routes/clientDetailsRoutes.js"; 
import workLayoutRoutes from "./routes/workLayoutRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import industryroutes from  "./routes/industryroutes.js";
import benchStatusRoutes from "./routes/BenchStatusRoutes.js";
import rateTypeRoutes from "./routes/rateType.routes.js";
import currencyRoutes from "./routes/currencyRoutes.js";
import offBoardingReasonRoutes from './routes/OffBoardingReasonRoutes.js';  // Adjust the import path as needed
import availabilityStatusRoutes from "./routes/availabilityStatusRoutes.js";
import overallStatusRoutes from './routes/overallStatusRoutes.js';
import sourceRoutes from "./routes/sourceRoutes.js";
import languageProficiencyRoutes from "./routes/languageProficiencyRoutes.js";
import interviewStatusRoutes from './routes/interviewStatusRoutes.js';  // Import the interview status routes
import interviewNameRoutes from "./routes/interviewName.routes.js";
import skillsAddRoutes from "./routes/skillsAddRoutes.js";
import revenueModelRoutes from "./routes/revenueModelRoutes.js"; // Import the routes
import candidateStatusRoutes from "./routes/CandidateStatusRoutes.js";

dotenv.config();

const app = express();

//**  Middlewares **//
app.use(express.json()); 
app.use(cors()); 
app.use(morgan('dev'));
app.use(helmet());


app.use('/api', parentRouter)
app.use("/api/users", userDetailsRoutes); 
app.use("/api/roles", roleRoutes);
app.use("/api/experience-range", experienceRoutes); 
app.use("/api/department", departmentRoutes);  
app.use("/api/branch", branchRoutes); 
app.use("/api/vendors", vendorRoutes);  
app.use("/api/invoice-details", invoiceDetailsRoutes);  
app.use("/api/account-details", accountDetailsRoutes);  
app.use("/api/client-details", clientDetailsRoutes);  
app.use("/api/work-layouts", workLayoutRoutes);
app.use("/api/job-title", jobRoutes);
app.use("/api/industries", industryroutes);
app.use("/api/bench-status", benchStatusRoutes);
app.use("/api/rate-types", rateTypeRoutes);
app.use("/api/currency", currencyRoutes);
app.use('/api/offboarding-reasons', offBoardingReasonRoutes);
app.use("/api/availability-status", availabilityStatusRoutes);
app.use('/api/overall-status', overallStatusRoutes); 
app.use("/api/sources", sourceRoutes);
app.use("/api/language-proficiency", languageProficiencyRoutes);
app.use('/api/interview-statuses', interviewStatusRoutes);
app.use("/api/interview-names", interviewNameRoutes);
app.use("/api/skills-add", skillsAddRoutes);
app.use("/api/revenue-models", revenueModelRoutes);
app.use("/api/candidate-status", candidateStatusRoutes);

db.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log('Database connection failed:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
