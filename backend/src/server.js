import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import { apiReference } from "@scalar/express-api-reference";
import sequelize from "./config/database.js";
import platRoutes from "./routes/plat.routes.js";

dotenv.config();
const app = express();
const openApiSpec = JSON.parse(readFileSync(new URL("./docs/openai.json", import.meta.url), "utf8"));

app.use(cors());
app.use(express.json());
app.use("/api/plats", platRoutes);
app.get("/docs", apiReference({
    title: "Snack API Docs",
    content: openApiSpec,
}));

const PORT = process.env.PORT || 5000;
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connexion à la base de données réussie");
         app.listen(PORT, () => {
            console.log(`Serveur démarré sur le port ${PORT}`);
            });
             } catch (error) {
        console.error("Impossible de se connecter à la base de données:", error);
        process.exit(1);
    }
};
 startServer();
    
