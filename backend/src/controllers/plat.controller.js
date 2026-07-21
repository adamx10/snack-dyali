import Plat from "../models/Plat.js";

class PlatControl {
    getAll = async (req, res) => {
        try {
            const plat = await Plat.findAll();
            if (plat.length === 0) {
                return res.status(404).json({ message: "plat not found" });
            }
            return res.status(200).json(plat);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "internal server error" });
        }
    };

    getPlatById = async (req, res) => {
        try {
            const plat = await Plat.findByPk(req.params.id);
            if (!plat) {
                return res.status(404).json({ message: "plat not found" });
            }
            return res.status(200).json({ message: "success finding plat by id", data: plat });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "internal server error" });
        }
    };

    createPlat = async (req, res) => {
        try {
            const plat = await Plat.create(req.body);
            if (!plat) {
                return res.status(400).json({ message: "error in plat creation" });
            }
            return res.status(201).json({ message: "plat is created", data: plat });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "internal server error" });
        }
    };

    updatePlat = async (req, res) => {
        try {
            const id = req.params.id;
            const plat = await Plat.findByPk(id);
            if (!plat) {
                return res.status(404).json({ message: "plat not found" });
            }
            await plat.update(req.body);
            return res.status(200).json({ message: "plat updated", data: plat });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "internal server error" });
        }
    };

    deletePlat = async (req, res) => {
        try {
            const id = req.params.id;
            const plat = await Plat.findByPk(id);
            if (!plat) {
                return res.status(404).json({ message: "plat not found" });
            }
            await plat.destroy();
            return res.status(200).json({ message: "plat is deleted" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "internal server error" });
        }
    };
}

export default new PlatControl();