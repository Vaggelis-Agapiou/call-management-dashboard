const BASE_URL = "https://call-center-mu.vercel.app";

const headers = {
  "X-User-Id": "vaggelis-agapiou",
};

export async function getCalls() {
  const response = await fetch(`${BASE_URL}/calls`, { headers });

  if (!response.ok) {
    throw {
      status: response.status,
      message: response.statusText,
    };
  }

  return response.json();
}

export async function getCallDetails(id) {
  const response = await fetch(`${BASE_URL}/calls/${id}`, { headers });

  if (!response.ok) {
    throw {
      status: response.status,
      message: response.statusText,
    };
  }

  return response.json();
}
