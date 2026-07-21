import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import platRoutes from "./routes/plat.routes.js";

const dotenv = config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/plats", platRoutes);

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
    
