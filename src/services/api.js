const BASE_URL = "https://call-center-mu.vercel.app";

const headers = {
  "X-User-Id": "vaggelis-agapiou",
};

export async function getCalls() {
  const response = await fetch(`${BASE_URL}/calls`, { headers });

  if (!response.ok) {
    throw new Error("Failed to fetch Calls");
  }

  return response.json();
}
