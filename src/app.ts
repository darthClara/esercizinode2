import { PrismaClient } from "@prisma/client";
import express from "express";
import "express-async-errors";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/reels", async (request, response) => {
    const reels = await prisma.reel.findMany();
    response.json(reels);
});

export default app;
