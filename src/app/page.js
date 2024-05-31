"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import DayBanner from "../../public/day.svg";
import NightBanner from "../../public/night.svg";
import cow from "../../public/moo.svg";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import actions from "../../public/boba.json";
import { Icon, EvervaultCard } from "../components/evervault-card";
import { FlipWords } from "../components/flip-words";
export default function Home() {
	const [temp, setTemp] = useState(0);
	const [day, setDay] = useState(1);
	const [arr, setArr] = useState([false, false, false, false, false, false]);
	const [choice, setChoice] = useState(0);

	useEffect(() => {
		async function getWeather() {
			const res = await fetch("/api/weather", { cache: "no-store" });
			const data = await res.json();
			setTemp(data.current.temp_f);
			setDay(data.current.is_day);
		}
		getWeather();

		const old =
			localStorage.getItem("collection") == null ? [false, false, false, false, false, false] : JSON.parse(localStorage.getItem("collection"));
		setArr(old);
	}, []);

	return (
		<div>
			<div className="flex  max-h-screen flex-col">
				<div className=" mb-2 border mt-28 border-black/[0.2] flex flex-col items-start xl:w-5/6 w-full mx-auto p-4 relative xl:max-h-[25rem] max-h-[10rem] sm:max-h-[20rem]">
					<Icon className="absolute h-6 w-6 -top-3 -left-3 text-black " />
					<Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-black" />
					<Icon className="absolute h-6 w-6 -top-3 -right-3 text-black " />
					<Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-black" />

					<EvervaultCard text={"Ryan Chou"} />




				</div>
				<h2 className="text-neutral-900 my-4 text-center font-semibold font-sans  w-full xl:text-3xl text-xl ">
					<FlipWords words={["I'm a high school student from California designing for the web."]} />
					<p className=" ml-2 italic font-medium text-neutral-500 text-xs mt-1.5">
						it&apos;s {day ? "daytime" : "nighttime"} and {temp}&#176;
						fahrenheit in san francisco
					</p>
				</h2>

				<div className="px-4 mb-2">

					<h2 className="text-neutral-800 mt-4 text-sm xl:text-lg  ">
						Project Manager @
						<a target="_blank" rel="noreferrer" className="bg-gradient-to-br from-[#9f55e0] to-[#5b2891] bg-clip-text text-transparent font-semibold inline" href="https://joincpi.org"> Competitive Programming Initiative</a>
						, promoting competitive programming through resources such as the
						<a target="_blank" rel="noreferrer" className="bg-gradient-to-br text-[#5f72a9] font-semibold inline" href="https://joincpi.org"> USACO Guide</a>.
					</h2>
					<h2 className="text-neutral-900 mt-4 text-sm xl:text-lg  ">
						I&apos;m fascinated with web development, artificial intelligence, competitive programming, and design.

						In my free time, I enjoy chugging fruit tea, graphic design, and vibing to music B).
						If you want to learn more about me, check out my GitHub to see other cool projects that I&apos;ve worked on.

					</h2>


				</div>
				<AlertDialog.Root>
					<div className="w-full text-center">

						<AlertDialog.Trigger asChild>
							<a
								onClick={() => {
									const pp = Math.floor(Math.random() * 6);
									setChoice(pp);

									const arrT = localStorage.getItem("collection") == null
										? [false, false, false, false, false, false]
										: JSON.parse(localStorage.getItem("collection"));

									arrT[pp] = true;
									setArr(arrT)

									localStorage.setItem("collection", JSON.stringify(arrT));
								}}
								target="_blank"
								rel="noopener noreferrer"
								className="inline cursor-pointer text-2xl rotate-12 "
							>
								🧋
							</a>
						</AlertDialog.Trigger>
					</div>
					<AlertDialog.Portal>

						<AlertDialog.Overlay className="AlertDialogOverlay " />
						<AlertDialog.Content className="AlertDialogContent">
							<AlertDialog.Title className="AlertDialogTitle">
								{
									actions.title[
									Math.floor(Math.random() * actions.title.length)
									]
								}
							</AlertDialog.Title>
							<AlertDialog.Description className="AlertDialogDescription">
								{
									actions.drink[
									choice
									]
								}{" "}
								{arr.filter((value) => value).length} out of 6 drinks collected.
							</AlertDialog.Description>
							<div
								style={{
									display: "flex",
									gap: 25,
									justifyContent: "flex-end",
								}}
							>
								<AlertDialog.Action asChild>
									<button className="text-gray-400">close</button>
								</AlertDialog.Action>
							</div>
						</AlertDialog.Content>
					</AlertDialog.Portal>
				</AlertDialog.Root>

			</div>
		</div>
	);
}
