import express from "express"
import { Kpi_Reports } from "../controllers/kpi_reports.controller.js";

const router = express.Router()

router.get("/", Kpi_Reports);


export default router;