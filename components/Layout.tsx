import Navbar from './Navbar';
import Footer from './Footer';
import {ReactNode} from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
