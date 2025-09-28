import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import { getTimesheetListData } from "../../api";

const Dashboard = () => {
  const [allData, setAllData] = useState([]); // store original
  const [data, setData] = useState([]); // store filtered

  const columns = [
    { header: "WEEK #", accessor: "no" },
    { header: "DATE", accessor: "date" },
    { header: "STATUS", accessor: "status", chips: true },
    { header: "ACTION", accessor: "action" },
  ];

  const status = [
    { label: "Completed", value: "Completed" },
    { label: "Incomplete", value: "Incomplete" },
    { label: "Missing", value: "Missing" },
  ];

  useEffect(() => {
    getTimeSheetData();
  }, []);

  const getTimeSheetData = async () => {
    try {
      const response = await getTimesheetListData();
      setAllData(response);
      setData(response);
    } catch (err) {
      console.log(err);
      setAllData([]);
      setData([]);
    }
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    if (value === "all") {
      setData(allData); // reset
    } else {
      const filteredData = allData.filter((item) => item.status === value);
      setData(filteredData);
    }
  };

  return (
    <div className="pt-[27px] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-35 ">
      <div className="bg-white p-6 rounded-[8px]">
        <h1 className="text-[24px] font-semibold text-[#111827] pb-6">
          Your Timesheets
        </h1>
        <div className="flex gap-4 mb-6">
          <select
            id="date-range"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                      focus:ring-blue-500 focus:border-blue-500 block  p-2.5 
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="all">Date Range</option>
          </select>

          <select
            id="status-filter"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                      focus:ring-blue-500 focus:border-blue-500 block p-2.5 
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleStatusChange}
          >
            <option value="all">Status</option>
            {status.map((s, idx) => (
              <option key={idx} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
