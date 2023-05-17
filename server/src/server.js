import express from "express";
import cors from "cors";
import env from "./environments/environment.js";
import itemRoutes from "./core/features/items/routes/ItemRoutes.js";

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || env.PORT;
    this.routes();
  }

  routes() {
    this.app.use(cors());
    this.app.get("/", (_, res) =>
      res.status(200).json({
        message: "Mercado Libre Api Rest",
      })
    );
    this.app.use("/api", itemRoutes);
    this.app.use("/*", (_, res) =>
      res.status(404).json({
        error: true,
        message: "Error: Endpoint not found",
      })
    );
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`Server UP running on port ${this.port}`)
    );
  }
}
