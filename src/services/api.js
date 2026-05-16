const BASE_URL = "https://call-center-mu.vercel.app";

const headers = {
  "X-User-Id": "vaggelis-agapiou",
};

export async function getCalls() {
  const response = await fetch(`${BASE_URL}/calls`, { headers });
  const data = (await response.json()) || null;

  if (!response.ok) {
    throw {
      status: response.status,
      message: data.error,
    };
  }

  return data;
}

export async function getCallDetails(id) {
  const response = await fetch(`${BASE_URL}/calls/${id}`, { headers });
  const data = (await response.json()) || null;

  if (!response.ok) {
    throw {
      status: response.status,
      message: data.error,
    };
  }

  return data;
}
