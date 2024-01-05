import { Outlet, useNavigate } from "react-router-dom"
import Header from "../components/Header";
import { Children } from "react";
import Footer from "../components/Footer";


const Layout = () =>{

    return(
        <div>
            <Header/>
            <main>
                 <Outlet />
            </main>
            <Footer/>
        </div>
    )

}

export default Layout;