import Head from "next/head";

const fixedData = {
	title: "Ryan Chou | Student from California Designing for the Web. ",
	desc: "Project Manager @ Competitive Programming Initiative, promoting competitive programming through resources such as the USACO Guide. I'm fascinated with web development, artificial intelligence, competitive programming, and design. In my free time, I enjoy chugging fruit tea, graphic design, and vibing to music B). If you want to learn more about me, check out my GitHub to see other cool projects that I've worked on."
}
export default function SEO({ title, desc }) {
	return (
		<Head>
			<title>{title ? title : fixedData.title}</title>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/img/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/img/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/img/favicon-16x16.png"
			/>
			<link rel="manifest" href="/site.webmanifest" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="title" content={title ? title : fixedData.title} />
			<meta name="description" content={desc ? desc : fixedData.desc} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://www.ryanchou.dev/" />
			<meta property="og:title" content={title ? title : fixedData.title} />
			<meta
				property="og:description"
				content={desc ? desc : fixedData.desc}
			/>
			<meta
				property="og:image"
				content="https://www.ryanchou.dev/moo.svg"
			/>
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://www.ryanchou.dev" />
			<meta
				property="twitter:title"
				content={title ? title : fixedData.title}
			/>
			<meta
				property="twitter:description"
				content={desc ? desc : fixedData.desc}
			/>
			<meta
				property="twitter:image"
				content="https://www.ryanchou.dev/moo.svg"
			/>
		</Head>
	);
}