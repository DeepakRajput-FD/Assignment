import React, { useEffect, useState } from "react";

export default function Ex2UseEffect() {
  let [records, setrecords] = useState([]);

  useEffect(() => {
    apiData();
  }, []);

  let apiData = async () => {
    let respond = await fetch("https://jsonplaceholder.typicode.com/posts");
    let record = await respond.json();
    setrecords(record);
  };

  return (
    <>
      <table border={2}>
        <thead>
          <tr>
            <th>userId</th>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {records.map((e, i) => {
            return <tr key={i}>
                <td>{e.userId}</td>
                <td>{e.id}</td>
                <td>{e.title}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
}
