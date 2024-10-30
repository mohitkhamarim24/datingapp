import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";


export const useAuthStore = create((set) => ({
    authUser: JSON.parse(localStorage.getItem("authUser")) || null,
    checkingAuth: true,

    signup: async (signupData) => {
		try {
			set({ loading: true });
			const res = await axiosInstance.post("/auth/signup", signupData);
			set({ authUser: res.data.user });
			toast.success("Account created successfully");
		} catch (error) {
			toast.error(error.response.data.message || "Something went wrong");
		} finally {
			set({ loading: false });
		}
	},

    login: async (loginData) => {
		try {
			set({ loading: true });
			const res = await axiosInstance.post("/auth/login", loginData);
			set({ authUser: res.data.user });
			toast.success("Logged in successfully");
		} catch (error) {
			toast.error(error.response.data.message || "Something went wrong");
		} finally {
			set({ loading: false });
		}
	},

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/me");
            set({ authUser: res.data.user });
            localStorage.setItem("authUser", JSON.stringify(res.data.user));
        } catch (error) {
            set({ authUser: null });
            localStorage.removeItem("authUser");
            console.log(error);
        } finally {
            set({ checkingAuth: false });
        }
    },
	logout: async () => {
		try {
			const res = await axiosInstance.post("/auth/logout");
	
			if (res.status === 200) {
				set({ authUser: null });
				localStorage.removeItem("authUser"); // Ensure localStorage is cleared
				toast.success("Logged out successfully");
			}
		} catch (error) {
			toast.error(error.response?.data.message || "Something went wrong");
		}
	},
	
    
}));
 