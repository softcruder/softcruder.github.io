import type { ComponentType } from "react";
import Navbar from "@/components/v2/layout/Navbar";
import Footer from "@/components/v2/layout/Footer";

export default function withLayout<P extends object>(Component: ComponentType<P>) {
  return function WithLayout(props: P) {
    return (
      <div className="container">
        <Navbar />
        <main>
          <Component {...props} />
        </main>
        <Footer />
      </div>
    );
  };
}
