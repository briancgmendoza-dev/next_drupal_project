import request from "@/app/services/request";
import { BASE_URL } from "@/app/utils/constants";

export const DashboardService = {
  getLiveEventLink: async (id: number) => {
    const token = localStorage.getItem("token")
    try {
      const response = await request({
        url: `${BASE_URL}/api/live_event/link?user_id=${id}`,
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      return response.data.link
    } catch (error: unknown) {
      if (error instanceof Error && error.name === "AbortError") {
        console.log("Aborted Duplicate Request")
      }
      return { error }
    }
  }
}
