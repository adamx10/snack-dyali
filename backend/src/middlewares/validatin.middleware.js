import * as z from "zod";

const valideData = z.object({
    name : z.string().min(3),
    price : z.string().positive(),
    category : z.string().min(3),
    available : z.boolean()
})

export const valideDataNew = async(req, res, next) => {
    const check = valideData.safeParse(req.body);
    if(!check) return res.status(400).json({message: "Data is missing"})
    next()
}