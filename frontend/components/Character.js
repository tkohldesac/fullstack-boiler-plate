import React, { useState, useEffect } from "react";

export default function Character() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://xivapi.com/character/1814929");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        if (typeof json !== "object") {
          throw new Error(`Response is not a JSON object!`);
        }

        console.log(json); // logging the entire json object to the console

        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }
  // const character = data.Character;
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {`Name: ${data.Character.Name}`}
          <br />
          Photo:
          <img src={data.Character.Portrait} width="300px"></img>
          <br />
          Jobs:
          <br />
          {/* <ul>
            {data.Character.ClassJobs.map((job, index) => (
              <li key={index}>
                <p>{`Class: ${job.Name}`}</p>
                <p>{`Level: ${job.Level}`}</p>
              </li>
            ))}
          </ul> */}
        </div>
      )}
    </div>
  );
}
