import request from "@/app/services/request";
import { BASE_URL } from "@/app/utils/constants";

export const PublicService = {
  config: async (signal: AbortSignal) => {
    try {
      const response = await request({
        url: `${BASE_URL}api/public-config`,
        method: "GET",
        headers: { 'api-key': '' },
        signal
      })
      return { isLoading: false, data: response.data }
    } catch (error: unknown) {
      if (error instanceof Error && error.name === "AbortError") {
        console.log("Aborted Duplicate Request")
      }
      return { isLoading: false, error }
    }
  }
}
