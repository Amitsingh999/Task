import { Montserrat } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Form Validation",
  description: "React Hook Form + Yup + Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}

         <ToastContainer
          position="bottom-right"
          autoClose={2000}
          theme="colored"
        /> 
      </body>
    </html>
  );
}