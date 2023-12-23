import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";

const BahrainGPTickets = () => {
  const [gpTickets, setGPTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBahrainGPTickets = () => {
    setLoading(true);
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.bahraingp.com/tickets/api/stands?event=1040DFDC-8566-4D94-B09E-73F13219DB60",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => response.data)
      .then((data) => {
        setGPTickets([...data?.map((i) => ({ ...i, key: i.id }))]);
        setLoading(false);
      });
  };

  useEffect(() => {
    getBahrainGPTickets();
  }, []);

  const columns = [
    {
      title: "Stand Name",
      dataIndex: "name",
      key: "name",
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Tickets Available",
      dataIndex: "totalSeats",
      key: "totalSeats",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
  ];

  return (
    <div className="bahrain-gp-tickets-wrapper">
      <Table
        loading={loading}
        dataSource={gpTickets}
        columns={columns}
        scroll={{ y: "26vw" }}
      />
    </div>
  );
};

export default BahrainGPTickets;
