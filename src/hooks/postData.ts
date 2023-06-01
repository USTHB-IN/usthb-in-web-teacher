import { AxiosResponse } from "axios";
import {
  axiosInstanceAuth,
  axiosInstanceRessources,
  axiosInstanceRessourcesFile,
} from ".";

export async function postDataAuth(endpoint: string, data: any): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axiosInstanceAuth.post(
      endpoint,
      data
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error("Error posting data:", error);
    throw error;
  }
}

export async function postDataRessource(
  endpoint: string,
  data: any
): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axiosInstanceRessources.post(
      endpoint,
      data
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error("Error posting data:", error);
    throw error;
  }
}
export async function postFileRessource(
  endpoint: string,
  data: any
): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axiosInstanceRessourcesFile.post(
      endpoint,
      data
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error("Error posting data:", error);
    throw error;
  }
}
export async function postFileHomework(
  endpoint: string,
  data: any
): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axiosInstanceRessourcesFile.post(
      endpoint,
      data
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error("Error posting data:", error);
    throw error;
  }
}
