import "../globals.css";
import { AiOutlineHome } from "react-icons/ai";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Navbar";

export const metadata = {
	title: "Ryan Chou | Blog",
	description: "Project Manager @ Competitive Programming Initiative, promoting competitive programming through resources such as the USACO Guide. I'm fascinated with web development, artificial intelligence, competitive programming, and design. In my free time, I enjoy chugging fruit tea, graphic design, and vibing to music B). If you want to learn more about me, check out my GitHub to see other cool projects that I've worked on.",
	openGraph: {
		title: "Ryan Chou | Blog",
		description: "Project Manager @ Competitive Programming Initiative, promoting competitive programming through resources such as the USACO Guide. I'm fascinated with web development, artificial intelligence, competitive programming, and design. In my free time, I enjoy chugging fruit tea, graphic design, and vibing to music B). If you want to learn more about me, check out my GitHub to see other cool projects that I've worked on.",
		url: 'https://ryanchou.dev/posts',
		siteName: 'Ryan Chou',
		images: ['https://ryanchou.dev/moo.svg'],
		locale: 'en_US',
		type: 'website',
	},

}
export default function RootLayout({ children }) {
	return (
		<section>
			<div className="w-full max-w-lg lg:max-w-3xl xl:max-w-5xl flex flex-col justify-center lg:flex-row gap-8 px-6 pb-8 z-[1]">{children}</div>
		</section>
	);
}
