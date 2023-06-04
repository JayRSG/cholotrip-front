"use client";

import Image from "next/image";
import logo from "../../../public/image/logo.png";

const Result = ({ result, dictionaries }) => {
	const convertPTtoTime = (ptString) => {
		const hours = ptString?.match(/(\d+)H/) ? ptString?.match(/(\d+)H/)[1] : null;
		const minutes = ptString?.match(/(\d+)M/) ? ptString?.match(/(\d+)M/)[1] : null;

		return hours && minutes ? `${hours}H ${minutes}M` : hours && !minutes ? `${hours}H` : !hours && minutes ? `${minutes}M` : "";
	};
	return (
		<>
			<div className='flex w-[90vw] items-center relative overflow-hidden font-body'>
				<div className='w-[80vw] flex flex-col bg-white pb-6 pt-0 h-full px-2 pr-16 rounded-tl-xl rounded-bl-xl'>
					<div className='flex flex-col'>
						<h1 className='relative left-0 font-title font-bold p-2 text-xl text-admin-nav-color'>Journey Flights</h1>

						<div className='flex items-center'>
							<div className='w-[6rem] mr-16'>
								{/* <Image
									src={logo}
									width={590}
									height={590}
									alt='qatar airlines logo'
									layout-fill='responsive'
									style='cover'
									className=''
								/> */}
							</div>

							<div
								className={`flex items-center w-full ${
									result?.itineraries[0]?.segments.length >= 3
										? "justify-between"
										: result?.itineraries[0]?.segments.length == 2
										? "justify-around"
										: "justify-center"
								}`}>
								{result?.itineraries[0]?.segments?.map((iter, ind) => (
									<div className={`flex `} key={"iter" + ind}>
										<div className='flex flex-col mr-3'>
											<div className='font-bold font-title w-[6rem]'>
												<h1>{dictionaries?.carriers[iter?.carrierCode]}</h1>
											</div>

											<p className='text-gray-500 mt-4 text-sm'>
												{result?.travelerPricings[0]?.fareDetailsBySegment[ind]?.cabin}
											</p>
										</div>

										<div className='flex flex-col px-2'>
											<div className='flex flex-col'>
												<h1 className='text-sm text-gray-500'>Departure Time</h1>

												{/* <p className="text-gray-800">{(iter?.departure?.at).replace("T", " ")}</p> */}
												<p className='text-gray-800 text-sm mt-1'>
													{(iter?.departure?.at).split("T")[0]} <br /> {(iter?.departure?.at).split("T")[1]}
												</p>
											</div>

											<p className='mt-4'>{iter?.departure?.iataCode}</p>
										</div>

										<div className='flex flex-col px-2'>
											<div className='flex flex-col'>
												<h1 className='text-sm text-gray-500'>Arrival Time</h1>

												<p className='text-gray-800 text-sm mt-1'>
													{(iter?.arrival?.at).split("T")[0]} <br /> {(iter?.arrival?.at).split("T")[1]}
												</p>
											</div>

											<p className='mt-4'>{iter?.arrival?.iataCode}</p>
										</div>

										<div className='flex flex-col px-2'>
											<div className='flex flex-col'>
												<h1 className='text-sm text-gray-500'>Total Time</h1>

												<p className='text-gray-800 text-sm mt-1'>{convertPTtoTime(result?.itineraries[0]?.duration)}</p>
											</div>

											<p className='text-sm'>
												{result?.itineraries[0]?.segments[0]?.numberOfStops != 0
													? result?.itineraries[0]?.segments[0]?.numberOfStops + " Stop"
													: "Non-Stop"}
											</p>

											<p className='mt-4'>{iter?.carrierCode + " " + iter?.aircraft?.code}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					<hr className='w-full bg-gray-500 mt-4' />

					<div className='flex flex-col'>
						<h1 className='relative left-0 font-title font-bold p-2 text-xl text-admin-nav-color'>Return Flights</h1>
						<div className='flex items-center'>
							<div className='w-[6rem] mr-16'>
								{/* <Image
								src={logo}
								width={590}
								height={590}
								alt='qatar airlines logo'
								layout-fill='responsive'
								style='cover'
								className=''
							/> */}
							</div>

							<div
								className={`flex items-center w-full ${
									result?.itineraries[0]?.segments.length >= 3
										? "justify-between"
										: result?.itineraries[0]?.segments.length == 2
										? "justify-around"
										: "justify-center"
								}`}>
								{result?.itineraries[1]?.segments?.map((iter, ind) => (
									<div className='flex' key={"iter" + ind}>
										<div className='flex flex-col mr-3'>
											<div className='font-bold font-title w-[6rem]'>
												<h1>{dictionaries?.carriers[iter?.carrierCode]}</h1>
											</div>

											<p className='text-gray-500 mt-4 text-sm'>
												{result?.travelerPricings[0]?.fareDetailsBySegment[ind]?.cabin}
											</p>
										</div>

										<div className='flex flex-col px-2'>
											<div className='flex flex-col'>
												<h1 className='text-sm text-gray-500'>Departure Time</h1>

												{/* <p className="text-gray-800">{(iter?.departure?.at).replace("T", " ")}</p> */}
												<p className='text-gray-800 text-sm mt-1'>
													{(iter?.departure?.at).split("T")[0]} <br /> {(iter?.departure?.at).split("T")[1]}
												</p>
											</div>

											<p className='mt-4'>{iter?.departure?.iataCode}</p>
										</div>

										<div className='flex flex-col px-2'>
											<div className='flex flex-col'>
												<h1 className='text-sm text-gray-500'>Arrival Time</h1>

												<p className='text-gray-800 text-sm mt-1'>
													{(iter?.arrival?.at).split("T")[0]} <br /> {(iter?.arrival?.at).split("T")[1]}
												</p>
											</div>

											<p className='mt-4'>{iter?.arrival?.iataCode}</p>
										</div>

										<div className='flex flex-col px-2'>
											<div className='flex flex-col'>
												<h1 className='text-sm text-gray-500'>Total Time</h1>

												<p className='text-gray-800 text-sm mt-1'>{convertPTtoTime(result?.itineraries[0]?.duration)}</p>
											</div>

											<p className='text-sm'>
												{result?.itineraries[0]?.segments[0]?.numberOfStops != 0
													? result?.itineraries[0]?.segments[0]?.numberOfStops + " Stop"
													: "Non-Stop"}
											</p>

											<p className='mt-4'>{iter?.carrierCode + " " + iter?.aircraft?.code}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* <div className='flex justify-between '>
						<div className='ml-[11.5rem]'>
							<select className='p-2.5 outline-none text-gray-400 text-lg w-[17rem]'>
								<option>Parially Refundable</option>
							</select>
						</div>

						<div className=''>
							<p className='p-2.5 outline-none text-gray-400 text-lg w-[16rem]'>
								Flight Number:{" "}
								{result?.itineraries[0]?.segments[0]?.carrierCode + " " + result?.itineraries[0]?.segments[0]?.aircraft?.code}
							</p>
						</div>
					</div> */}
				</div>

				<div className='w-[10vw] bg-blue-200 absolute h-full px-4 right-0 overflow-hidden rounded-tr-xl rounded-br-xl flex items-center'>
					<div className='flex flex-col items-center w-full'>
						<div className='flex justify-between w-full mb-4'>
							<div className='flex flex-col'>
								<p className='text-sm text-gray-500'>Availlable</p>

								<p className='text-base'>{result?.numberOfBookableSeats} Seats</p>
							</div>

							<div className='flex flex-col'>
								<p className='text-sm text-gray-500'>{result?.price?.currency}</p>

								<p className='text-base'>{result?.price?.total}</p>
							</div>
						</div>

						<div className='bg-blue-800 w-full rounded-lg h-[3rem] flex items-center justify-center hover:scale-105 transform transition-all duration-500 cursor-pointer'>
							<p className='text-gray-100'>Book Now</p>
						</div>

						<div className='text-sm text-gray-500 mt-2'>{"Grand Total: " + result?.price?.currency + " " + result?.price?.total}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Result;
