'use client';

import Image from 'next/image'


const Result = ({img, result, dictionaries }) => {

  const convertPTtoTime = (ptString) => {
    const hours = ptString?.match(/(\d+)H/) ? ptString?.match(/(\d+)H/)[1] : null;
    const minutes = ptString?.match(/(\d+)M/) ? ptString?.match(/(\d+)M/)[1] : null;

    return hours && minutes ?
      `${hours}H ${minutes}M` :
      hours && !minutes ?
        `${hours}H` :
        !hours && minutes ?
          `${minutes}M` : ""
  }
  return (
    <>
      <div className="flex w-[85vw] items-center relative overflow-hidden">
        <div className="w-[75vw] flex flex-col bg-white py-6 h-full px-2 pr-16 rounded-tl-xl rounded-bl-xl">
          <div className="flex justify-between items-center">
            <div className="w-[6rem]">
              <Image
                src={img}
                width={500}
                height={500}
                alt="qatar airlines logo"
                layout-fill="responsive"
                style="cover"
                className=""
              />
            </div>

            {result?.itineraries[0]?.segments?.map((iter, ind) => (
              <div className='flex flex-row mx-6' key={"iter" + ind}>

                <div className="flex flex-col mr-3">
                  <div className="flex flex-col font-medium">
                    <h1>{dictionaries?.carriers[iter?.carrierCode]}</h1>
                  </div>

                  <p className="text-gray-500 mt-4">{result?.travelerPricings[0]?.fareDetailsBySegment[ind]?.cabin}</p>
                </div>


                <div className="flex flex-col pr-5">
                  <div className="flex flex-col">
                    <h1 className="text-sm text-gray-500">Departure Time</h1>

                    {/* <p className="text-gray-800">{(iter?.departure?.at).replace("T", " ")}</p> */}
                    <p className="text-gray-800">{(iter?.departure?.at).split("T")[0]} <br /> {(iter?.departure?.at).split("T")[1]}</p>
                  </div>

                  <p className="mt-4">{iter?.departure?.iataCode}</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <h1 className="text-sm text-gray-500">Arrival Time</h1>

                    <p className="text-gray-800">{(iter?.arrival?.at).split("T")[0]} <br /> {(iter?.arrival?.at).split("T")[1]}</p>
                  </div>

                  <p className="mt-4">{iter?.arrival?.iataCode}</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <h1 className="text-sm text-gray-500">Total Time</h1>

                    <p className="text-gray-800">{convertPTtoTime(result?.itineraries[0]?.duration)}</p>
                  </div>

                  <p className="mt-4">{result?.itineraries[0]?.segments[0]?.numberOfStops != 0 ? result?.itineraries[0]?.segments[0]?.numberOfStops + " Stop" : "Non-Stop"}</p>
                </div>
              </div>
            ))}


          </div>

          <hr className="w-full bg-gray-300 mt-4" />

          <div className="flex justify-between ">
            <div className="ml-[11.5rem]">
              <select className="p-2.5 outline-none text-gray-400 text-lg w-[17rem]">
                <option>Parially Refundable</option>
              </select>
            </div>

            <div className="">
              <p className="p-2.5 outline-none text-gray-400 text-lg w-[16rem]">Flight Number: {result?.itineraries[0]?.segments[0]?.carrierCode + " " + result?.itineraries[0]?.segments[0]?.aircraft?.code}</p>
            </div>
          </div>
        </div>

        <div className="w-[10vw] bg-blue-200 absolute h-full px-4 py-4 pt-5 right-0 overflow-hidden rounded-tr-xl rounded-br-xl">
          <div className="flex flex-col items-center w-full">
            <div className="flex justify-between w-full mb-4">
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">Availlable</p>

                <p className="text-base">{result?.numberOfBookableSeats} Seats</p>
              </div>

              <div className="flex flex-col">
                <p className="text-sm text-gray-500">{result?.price?.currency}</p>

                <p className="text-base">{result?.price?.total}</p>
              </div>
            </div>

            <div className="bg-blue-800 w-full rounded-lg h-[3rem] flex items-center justify-center">
              <p className="text-gray-100">Book Now</p>
            </div>

            <div className="text-sm text-gray-500 mt-2">{"Grand Total: " + result?.price?.currency + " " + result?.price?.total}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Result