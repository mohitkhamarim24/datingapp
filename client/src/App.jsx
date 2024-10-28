import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {

  const{checkAuth}=useAuthStore();
  useEffect(()=>{
  checkAuth()
  },[checkAuth])
  return (
    <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'>
    <Routes>
      <Route path="/" element ={<HomePage/>}/>
      <Route path="/auth" element ={<AuthPage/>}/>
      <Route path="/profile" element ={<ChatPage/>}/>
      <Route path="/chat/:id" element ={<ProfilePage/>}/>
    </Routes>

    <Toaster/>
    </div>
  )
}

export default App
