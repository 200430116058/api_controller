const apiSchema = require("../Model/apiModel");


const PostData = async(req , res)=>{

    try{
    const data = await apiSchema.create(req.body);
    
    res.status(200).json({
        message:"Data posted successfully",
        data:data
    })


    }catch(error){
        res.status(400).json({
            message:"Data not posted",
            error:error.message
        })
    }
}



const getData = async(req , res)=>{

    try{
    const data = await apiSchema.find();
    
    res.status(200).json({
        message:"Data fetched successfully",
        data:data
    })


    }catch(error){
        res.status(400).json({
            message:"Data not fetched",
            error:error.message
        })
    }
}


module.exports = {
    PostData,
    getData
}