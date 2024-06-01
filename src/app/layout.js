import "./globals.css";
import { AiOutlineHome } from "react-icons/ai";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className + " bg-white  font-sans flex items-center  justify-center"}>
				<Navbar />

				<div className="w-full max-w-lg lg:max-w-3xl xl:max-w-5xl flex flex-col justify-center lg:flex-row gap-8 px-6 pb-8 z-[1]">{children}</div>
			</body>
		</html>
	);
}
