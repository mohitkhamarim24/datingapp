import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore";

export const useUserStore = create((set) => ({
	loading: false,

	updateProfile: async (data) => {
		try {
			set({ loading: true });
			const res = await axiosInstance.put("/users/update", data);
		
			// Debug the full response structure
			console.log("Full API Response:", res);
		
			const updatedUser = res?.data?.user;
			if (updatedUser) {
				useAuthStore.getState().setAuthUser(updatedUser);
				toast.success("Profile updated successfully");
			} else {
				throw new Error("Invalid server response: 'user' not found");
			}
		} catch (error) {
			console.error("Error updating profile:", error);
			toast.error(error.response?.data?.message || "Something went wrong");
		} finally {
			set({ loading: false });
		}
	}
}));