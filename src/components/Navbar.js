"use client";
import { usePathname } from "next/navigation";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import moo from "../../public/moo.svg";

export default function Navbar() {
	const pathname = usePathname();

	return (
		<nav className="flex border border-l-0 border-r-0 border-t-0 border-b-0 items-center justify-between top-0 w-screen lg:px-48 xl:px-72 sm:px-12 px-1 pt-6 pb-6  h-fit   backdrop-blur-lg backdrop-saturate-50 backdrop-filter fixed z-10 ">
			<div className="flex space-x-4 justify-start flex-row">
				<motion.button
					className="group ml-4 "
					whileTap={{ scale: 0.9 }}
					whileHover={{ scale: 1.1 }}
				>
					<Link
						href={pathname == "/" ? "" : "/"}
						className={
							(pathname == "/"
								? "bg-gradient-to-tr"
								: "hover:bg-gradient-to-tr") +
							"   p-4  hover:from-[#2473AB]/70 group-hover:font-semibold hover:via-[#1E528E]/70 hover:to-[#5B7983]/70 via-[#C3F0F5]/70 from-[#ffdf6b]/70  to-[#a9ff6b]/70 rounded-lg "
						}
					>
						<p className="text-black inline-block transition duration-100 opacity-100 brightness-200">
							<Image
								src={moo}
								alt="moo"
								className="inline group-hover:brightness-0 group-hover:invert"
								width={50}
							/>
						</p>
						{/* <span className="hover:hidden block">Home</span> */}
					</Link>
				</motion.button>
				<motion.button
					className="group ml-4 "
					whileTap={{ scale: 0.9 }}
					whileHover={{ scale: 1.1 }}
				>
					<Link
						href={"/posts"}
						className={
							(pathname.substring(0, 6) == "/posts"
								? "bg-gradient-to-tr"
								: "hover:bg-gradient-to-tr") +
							"   p-4  hover:from-[#2473AB]/70 group-hover:font-semibold hover:via-[#1E528E]/70 hover:to-[#5B7983]/70 via-[#C3F0F5]/70 from-[#ffdf6b]/70  to-[#a9ff6b]/70 rounded-lg "
						}
					>
						<p className="text-black group-hover:text-white  group-hover:font-semibold inline-block  opacity-99 ">
							Blog <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="inline w-4 h-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
							</svg>

						</p>
					</Link>
				</motion.button>
				<motion.button
					className="group ml-4 "
					whileTap={{ scale: 0.9 }}
					whileHover={{ scale: 1.1 }}
				>
					<Link
						href={"/projects"}
						className={
							(pathname == "/projects"
								? "bg-gradient-to-tr"
								: "hover:bg-gradient-to-tr") +
							"   p-4  hover:from-[#2473AB]/70 group-hover:font-semibold hover:via-[#1E528E]/70 hover:to-[#5B7983]/70 via-[#C3F0F5]/70 from-[#ffdf6b]/70  to-[#a9ff6b]/70 rounded-lg "
						}
					>
						<p className="text-black   inline-block group-hover:text-white  opacity-100 ">
							Projects
						</p>
					</Link>
				</motion.button>
			</div>
			<div className="flex flex-row space-x-4  justify-end">
				<motion.button
					className="group justify-right items-right "
					whileTap={{ scale: 0.9 }}
					whileHover={{ scale: 1.1 }}
				>
					<a
						href="https://github.com/ryanchou-dev"
						target="_blank"
						rel="noopener noreferrer"
						className={
							"hover:bg-gradient-to-tr" +
							"   p-4  hover:from-[#2473AB]/70 hover:via-[#1E528E]/70 hover:to-[#5B7983]/70  rounded-lg "
						}
					>
						<AiFillGithub
							size={30}
							className="group-hover:brightness-0 group-hover:invert  inline-block"
						/>
					</a>
				</motion.button>
			</div>
		</nav>
	);
}
