import request from "@/app/services/request";
import { BASE_URL } from "@/app/utils/constants";

type TAuthPayload = {
  formData: FormData
}

export const AuthenticateService = {
  getToken: async (signal: AbortSignal, payload: TAuthPayload) => {
    try {
      const response = await request({
        url: `${BASE_URL}oauth/token`,
        method: "POST",
        payload: payload.formData,
        signal
      })
      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token)
        return { isAuthenticated: true }
      }
      return { isAuthenticated: false }
    } catch (error: unknown) {
      if (error instanceof Error && error.name === "AbortError") {
        console.log("Aborted Duplicate Request")
      }
      return { error }
    }
  }
}
