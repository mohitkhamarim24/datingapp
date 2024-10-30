import { useAuthStore } from "../store/useAuthStore"
import Header from "../components/Header"
const HomePage = () => {
  const {logout} = useAuthStore();
  return (
    <div>
      <Header/>
      <div>HomePage
      <button onClick={logout}>Logout</button>
    </div>
    </div>
   
  )
}
export default HomePage