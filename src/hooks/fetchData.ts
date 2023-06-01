import { AxiosResponse } from "axios";
import { axiosInstanceAuth, axiosInstanceRessources } from ".";

export async function fetchDataAuth(endpoint: string): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axiosInstanceAuth.get(endpoint);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchDataRessources(
  endpoint: string,
  params?: any
): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axiosInstanceRessources.get(
      endpoint,
      { params: params } // Pass the params object as the second argument
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error("Error fetching data:", error);
    throw error;
  }
}
