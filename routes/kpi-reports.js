import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.send('get call connect');
});


export default router;