import { Router } from "express";

const router = Router();

// Tool routes
router.get("/tool", (req, res) => {
  res.json({ message: "Hello World!" });
});
router.get("/tool/:id", () => {});
router.put("/tool/:id", () => {});
router.get("/post", () => {});
router.delete("/tool/:id", () => {});

export default router;
