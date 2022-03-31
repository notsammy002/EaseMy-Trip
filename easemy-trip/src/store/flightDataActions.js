import { flightDataActions } from "./flightDataSlice";

// creating fetch function via redux thunk

export const fetchFlightData = (date) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`/flights/${date}`);

      if (!response.ok) {
        throw new Error("Could not fetch data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const flightDataFetched = await fetchData();

      dispatch(flightDataActions.addFlightData(flightDataFetched));
    } catch (error) {
      console.log(error);
    }
  };
};
