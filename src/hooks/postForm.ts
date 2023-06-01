import { AxiosResponse } from "axios";
import { axiosInstanceAuth } from ".";

async function postFormData(endpoint: string, data: FormData): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axiosInstanceAuth.post(
      endpoint,
      data
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error("Error posting form data:", error);
    throw error;
  }
}
