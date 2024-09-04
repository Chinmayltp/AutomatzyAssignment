import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <input
        type='text'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const searchResult = records.filter((res) => res.id);
          console.log(searchResult);
          setSearch(searchResult);
        }}
      >
        Search by ID
      </button>
      <table>
        <tr>
          <th>USER_ID</th>
          <th>ID</th>
          <th>TITLE</th>
          <th>BODY</th>
        </tr>

        {records.map((list, index) => (
          <tr key={index}>
            <td>{list.userId}</td>
            <td>{list.id}</td>
            <td>{list.title}</td>
            <td>{list.body}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default FetchData;
