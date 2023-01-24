const headers = () => ({
  Accept: "application/json",
  "Content-Type": "application/json",
});

// consultas
const get = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: headers(),
  });
  return await response.json();
};

const post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: headers(),
    body,
  });
  return await response.json();
};

const put = async (url, body) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: headers(),
    body,
  });
  return await response.json();
};



export const http = {
  get,
  post,
  put,  
};
