'use client'
import { fetcher } from '@/lib/fetcher'
import useSWR from "swr"

export const useflightSearch = (params) => {
  const validateParams = parameters => {
    return (
      parameters?.originLocationCode != "" &&
        parameters?.destinationLocationCode &&
        parameters?.departureDate != "" &&
        parameters?.adults != 0 &&
        parameters?.max != 0 ? true : false
    )
  }

  const { data, error, isloading, mutate } = useSWR({ url: '/getFlightOffers/', args: validateParams(params) ? params : "" }, fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: false,
  })

  return {
    flightOffers: data,
    flightOffersError: error,
    flightOffersLoading: isloading,
    mutateFlightOffers: mutate
  }
}
