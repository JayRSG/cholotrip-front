import { useEffect, useState } from "react"
import Search from "./Search"
import { useflightSearch } from "@/hooks/flightSearch"
import Result from "./Result"

const Offers = () => {
  const [travelData, setTravelData] = useState({
    originLocationCode: "",
    destinationLocationCode: "",
    departureDate: "",
    returnDate: "",
    adults: 0,
    max: 0,
    currencyCode: "USD",
    oneWay: false,
    includedAirlineCodes: ""
  })
  const [cachedOffer, setCachedOffer] = useState({})
  const { flightOffers, flightOffersError, flightOffersLoading, mutateFlightOffers } = useflightSearch(travelData);

  useEffect(() => {
    if (flightOffers) {
      setCachedOffer(flightOffers)
    }
  }, [flightOffers])
  return (
    <>
      <div className="bg-blue-300">
        <div className="w-full h-50vh flex justify-center items-center">
          <Search travelData={travelData} setTravelData={setTravelData} />
        </div>


        {!flightOffersLoading ?
          cachedOffer?.data?.map((flightData, ind) => (
            <div key={'result' + ind} className="flex flex-col justify-center items-center w-full h-15vh">
              <div className="m-3">
                <Result result={flightData} dictionaries={cachedOffer?.dictionaries} />
              </div>
            </div>
          )) : "Loading"
        }

      </div>
    </>
  )
}

export default Offers