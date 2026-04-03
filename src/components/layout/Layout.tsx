import { ReactNode } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <ScrollToTop />
    <TopBar />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
