
import {sequelize } from "../config/database";
import { DataTypes } from "sequelize";
const Plat = sequelize.define("Plat",{
    id :{
        type :DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement : true 
    },
    nom :{
        type : DataTypes.STRING,
        allowNull:false,
    },
    prix :{
        type : DataTypes.FLOAT,
        allowNull:false
    },
    categorie :{
        type : DataTypes.STRING,
        allowNull : false,
    },
    disponible :{
        type : DataTypes.BOOLEAN,
        default:true
    },
    created_at :{
        type:DataTypes.TIME,
        default:new Date
    }

})