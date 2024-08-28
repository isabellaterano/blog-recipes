import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../../components/AdminComponents/Sidebar";
import profile from "../../assets/profile.jpg";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-[2.65rem] max-h-[60px] px-12 border-b border-black">
            <h3 className="font-medium">Painel de Administração</h3>
            <Image
              src={profile}
              alt="profile"
              width={40}
              className="rounded-full"
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
