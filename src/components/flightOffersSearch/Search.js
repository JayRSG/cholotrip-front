"use client";

import { GiCommercialAirplane } from "react-icons/gi";
import { FaCarAlt } from "react-icons/fa";
import { BsArrowLeftRight, BsSearch } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useflightSearch } from "@/hooks/flightSearch";

const Search = (props) => {
	const { travelData, setTravelData } = props;

	const handleInputChanges = (e) => {
		setTravelData({
			...travelData,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setTravelData({ ...travelData, max: 5 });
	};

	return (
		<div>
			<form className='flex flex-col relative'>
				<div className='flex items-center bg-gray-200 rounded-tl-xl rounded-tr-xl overflow-hidden absolute top-[-3.5rem] px-4'>
					<div className='flex items-center bg-gray-200 px-4 py-4 cursor-pointer hover:bg-blue-400 hover:text-white focus:bg-blue-400 focus:text-white'>
						<IconContext.Provider
							value={{
								size: "1.5rem",
							}}>
							<div>
								<GiCommercialAirplane />
							</div>
						</IconContext.Provider>

						<h1 className='px-2'>Flight</h1>
					</div>
				</div>

				<div className='flex flex-col bg-white border border-white rounded-bl-xl rounded-br-xl rounded-tr-xl w-[70vw] px-4 py-4 shadow-btn'>
					<div className='flex items-center'>
						<div className=''>
							<select
								className='p-2.5 bg-white outline-none w-[8rem]'
								name='oneWay'
								onChange={handleInputChanges}
								value={travelData?.oneWay}>
								<option value={false}>Round trip</option>
								<option value={true}>One Way</option>
							</select>
						</div>

						<div className='ml-7'>
							<select
								className='p-2.5 bg-white outline-none w-[8rem]'
								name='cabin'
								onChange={handleInputChanges}
								value={travelData?.Cabin}>
								<option value={"Economy"}>Economy</option>
								<option value={"Premium Economy"}>Premium Economy</option>
								<option value={"Business Class"}>Business Class</option>
								<option value={"First Class"}>First Class</option>
							</select>
						</div>
					</div>

					<div className='flex items-center ml-4'>
						<div className='flex items-center relative'>
							<div className='border border-gray-300 rounded-lg flex flex-col z-10 p-4 pr-8'>
								<p className='mb-2'>From</p>

								<select
									name='originLocationCode'
									className=' text-gray-500 font-bold bg-white outline-none appearance-none cursor-pointer'
									onChange={handleInputChanges}
									value={travelData?.originLocationCode}>
									<option></option>
									<option value={"DAC"} className='text-gray-500 font-bold'>
										Dhaka
									</option>
									<option value={"CGP"} className='text-gray-500 font-bold'>
										Chittagong
									</option>
									<option value={"CCU"} className='text-gray-500 font-bold'>
										Kolkata
									</option>
									<option value={"DEL"} className='text-gray-500 font-bold'>
										Delhi
									</option>
									<option value={"MAA"} className='text-gray-500 font-bold'>
										Chennai
									</option>
								</select>
							</div>

							<div className='border border-gray-300 rounded-lg flex flex-col ml-4 z-10 p-4 pr-8'>
								<p className='mb-2'>To</p>

								<select
									name='destinationLocationCode'
									className=' text-gray-500 font-bold bg-white outline-none appearance-none cursor-pointer'
									onChange={handleInputChanges}
									value={travelData?.destinationLocationCode}>
									<option></option>
									<option value={"CGP"} className='text-gray-500 font-bold'>
										Chittagong
									</option>
									<option value={"DAC"} className='text-gray-500 font-bold'>
										Dhaka
									</option>
									<option value={"CCU"} className='text-gray-500 font-bold'>
										Kolkata
									</option>
									<option value={"DEL"} className='text-gray-500 font-bold'>
										Delhi
									</option>
									<option value={"MAA"} className='text-gray-500 font-bold'>
										Chennai
									</option>
								</select>
							</div>

							<div className='absolute border rounded-full border-gray-300 left-[8rem] p-1.5 z-20'>
								<IconContext.Provider
									value={{
										size: "1.5rem",
									}}>
									<div>
										<BsArrowLeftRight />
									</div>
								</IconContext.Provider>
							</div>
						</div>

						<div className='flex items-center relative ml-8'>
							<div className='border border-gray-300 rounded-lg flex flex-col z-10 p-4 pr-8'>
								<p className='mb-2'>Journey Date</p>
								<input
									name='departureDate'
									type='date'
									className='text-gray-500 font-bold bg-white outline-none appearance-none'
									onChange={handleInputChanges}
									value={travelData?.departureDate}
								/>
								{/* <select className="text-gray-500 font-bold bg-white outline-none appearance-none">
                  <option>13 Oct 2022, Thursday</option>
                </select> */}
							</div>

							<div className='border border-gray-300 rounded-lg flex flex-col ml-4 z-10 p-4 pr-8'>
								<p className='mb-2'>Return date</p>
								<input
									name='returnDate'
									type='date'
									className=' text-gray-500 font-bold bg-white outline-none appearance-none'
									value={travelData?.returnDate}
									onChange={handleInputChanges}
								/>
							</div>

							<div className='absolute border rounded-full border-gray-300 left-[11.5rem] p-1 z-20'>
								<IconContext.Provider
									value={{
										size: "1.5rem",
									}}>
									<div>
										<MdOutlineDateRange />
									</div>
								</IconContext.Provider>
							</div>
						</div>

						<div className='flex flex-col items-center ml-6'>
							<div className='border border-gray-300 rounded-lg flex flex-col z-10 p-4 pr-16'>
								<p className='mb-2'>Travelers</p>

								<select
									name='adults'
									className=' text-gray-500 font-bold bg-white outline-none appearance-none cursor-pointer'
									onChange={handleInputChanges}
									value={travelData?.adults}>
									<option value={"0"} className='text-gray-500'>
										Select Travellers
									</option>
									<option value={"1"} className='text-gray-500 font-bold'>
										1 travelers
									</option>
									<option value={"2"} className='text-gray-500 font-bold'>
										2 travelers
									</option>
									<option value={"3"} className='text-gray-500 font-bold'>
										3 travelers
									</option>
									<option value={"4"} className='text-gray-500 font-bold'>
										4 travelers
									</option>
									<option value={"5"} className='text-gray-500 font-bold'>
										5 travelers
									</option>
									<option value={"6"} className='text-gray-500 font-bold'>
										6 travelers
									</option>
								</select>
							</div>
						</div>

						<button
							className='flex ml-6 items-center bg-blue-600 w-[7rem] h-[5.7rem] rounded-lg justify-center hover:scale-105 transform transition-all duration-500 cursor-pointer'
							onClick={(e) => {
								e.stopPropagation();
								submitHandler(e);
							}}>
							<IconContext.Provider
								value={{
									size: "2.5rem",
									color: "white",
								}}>
								<div>
									<FiSearch />
								</div>
							</IconContext.Provider>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Search;
