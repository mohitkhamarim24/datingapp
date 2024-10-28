import {create} from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast"

export const useAuthStore = create ((set)=>({
    authUser:null,
    checkingAuth:true,


    signup:async(signupData)=>{
         try {
            set({loading:true})
            const res = await axiosInstance.post("/auth/signup",signupData)
              set({authUser: res.data.user})
              toast.success("User created succesfully");
         } catch (error) {
            toast.error(error.response.data.message || "Something went wrong")
         }finally{
            set({loading:false})
         }
    },
    checkAuth : async ()=> {
       try {
        const res = await axiosInstance.get("/auth/me");
        console.log(res.data)
       } catch (error) {
        
       }
    }
}))