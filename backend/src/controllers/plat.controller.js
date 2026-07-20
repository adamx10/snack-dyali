import { where } from "sequelize";
import {Plat} from "../models/Plat";
class PlatControl{
    getAll = async(req , res)=>{
        try{
            const plat = await Plat.findall()
            if (plat.lenght === 0) res.status(404).json({message:"plat not found"})
            res.status(200).json(plat)
        }catch(error){
            console.error(error)

        }
        
    }
    getPlatById = async (req,res) => {
        try{
         const plat = await Plat.findByPk(req.params.id)
         if(!plat){
            res.status(404).json({massgae:"error internal" , data:plat})
         }
         res.status(200).json({massege:"sucess creating finding by id  ",data:plat})
       }
       catch(err){
            console.log (error)
       }
         
    }
    creatPlat = async (req,res)=>{
        try{
            const plat = await Plat.create(req.body)
            if (!plat){
                res.status(404).json({message:"error in plat creation"})

            }
            res.status(201).json({message :"plat is created "})
        }catch(error){
            console.log("error")
        }
    }

    update = async (req , res)=>{
        try{
            const id = req.params.id ;
            const plat = await Plat.findByPk(id);
            if(!plat) return res.status(404).json({message:"plat not found"})
           await plat.update (req.body)
                
            
        }catch(error){
            console.log("error")
        }

    }
    deletePlat = async (req , res)=>{
        const id = req.params.id ;
        const plat = await Plat.findByPk(id)
        try{
            if(!plat) return res.status(404).json({message:"plat is not deleted "})
                await plat.destroy({
            where:{id:id} 
            })
            return res.status(201).json({message:"plat is deleted "})

        }catch(error){
            console.log("error")
        }
    }


    }
      
