import express from "express";
import kpireports from "./routes/kpi-reports.js";

const app = express();
const PORT = 6969;

app.get('/', (req, res) => {
    res.json({ msg: "Hello Students" });
});


app.use("/kpi-reports", kpireports)

app.listen(PORT, () => {
    console.log(`The Server is running at http:localhost:${PORT}`);
});