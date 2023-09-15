import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import postRouter from "./apps/posts.js";
// import authRouter from "./apps/auth.js";
import usersRouter from "./apps/users.js";
import roomsRouter from "./apps/rooms.js";
import paymentRouter from "./apps/payment.js";
import historyRouter from "./apps/history.js";

async function init() {
  const app = express();
  const port = 4000;

  app.use(cors());
  app.use(bodyParser.json());
  app.use("/rooms", roomsRouter);
  app.use("/payment", paymentRouter);
  app.use("/history", historyRouter);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("*", (req, res) => {
    res.status(404).send("Not Found");
  });

  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
}

init();
