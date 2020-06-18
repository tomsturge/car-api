import { PrismaClient } from "@prisma/client";
import * as bodyParser from "body-parser";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.json());

app.post(`/car`, async (req, res) => {
  const result = await prisma.car.create({
    data: {
      ...req.body,
    },
  });
  res.json(result);
});

app.get("/all", async (req, res) => {
  const result = await prisma.car.findMany();
  res.json(result);
});

app.get(`/car/:id`, async (req, res) => {
  const { id } = req.params;
  const result = await prisma.car.findOne({
    where: {
      id: Number(id),
    },
  });
  res.json(result);
});

app.delete(`/car/:id`, async (req, res) => {
  const { id } = req.params;
  const result = await prisma.car.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(result);
});

export default app;
