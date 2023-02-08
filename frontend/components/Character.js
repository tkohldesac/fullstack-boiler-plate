import React, { useState, useEffect } from "react";

const Character = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://xivapi.com/character/1814929");
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  if (!data) return <div>Loading character data...</div>;

  console.log(data);
  console.log("Name:", data.Name);
  console.log("Server:", data.Server);
  console.log("Grand Company:", data.GrandCompany.Name);

  return <div>Character data has been loaded!</div>;
};

export default Character;
