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
        // if (!json.hasOwnProperty("character")) {
        //   throw new Error(`JSON object does not contain 'character' property!`);
        // }

        const properties = Object.keys(json);
        console.log(`The properties of the JSON object are: ${properties}`);
        
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      console.log(`The character value is: ${data.character}`);
    }
  }, [data]);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>{`The character value is: ${data.character}`}</div>
      )}
    </div>
  );
}
