import { Navigate, Outlet } from "react-router";
import logo from "../assets/logo.svg";
import { useStateContext } from "../contexts/ContextProvider";

export default function GuestLayout() {
    const { userToken } = useStateContext();

    if(userToken){
        return <Navigate to='/' />
    }

    return (
        <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                </div>
                <Outlet />
            </div>
        </div>
    );
}
