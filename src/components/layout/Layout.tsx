import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <ScrollToTop />
    <Navbar />
    <main className="pt-16 lg:pt-20">{children}</main>
    <Footer />
  </>
);

export default Layout;
