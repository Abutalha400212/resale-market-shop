export const advertiseCollect = async (advertise) => {
  // const {data} = await axios.post('https://mobile-x-server.vercel.app/advertise',advertise)
  // return data
  const res = await fetch(`http://localhost:5000/advertise`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(advertise),
  });
  const data = await res.json();
  return data;
};
