import User from "../models/User.js"

export const swipeRight= async(req,res)=>{}
export const swipeLeft= async(req,res)=>{}
export const getMatches= async(req,res)=>{


    try {
        const user =await User.findById(req.user.id).populate("matches","name email");
        res.status(200).json({
            success:true,
            matches:user.matches
        })
    } catch (error) {
        console.log("Error in getMatches: ",error );

        res.status(500).json({
            success:false,
            message:"Internal server error" 
        })
    }
}
export const getUserProfiles= async(req,res)=>{}