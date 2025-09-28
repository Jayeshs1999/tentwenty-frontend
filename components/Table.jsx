import React, { useState } from "react";

const Table = ({ columns, data, handleActionClick }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handleRowsChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    //  shadow-md sm:rounded-lg
    <div className="relative overflow-x-auto">
      <div className="max-h-[400px] overflow-y-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} scope="col" className="px-6 py-3">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                {columns.map((col, colIdx) => {
                  const chipsColors = {
                    Completed:
                      "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900",
                    Incomplete:
                      "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900",
                    Missing:
                      "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900",
                  };

                  return (
                    <td
                      key={colIdx}
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {!col.chips ? (
                        col.accessor === "action" ? (
                          <span
                            className="text-[#1C64F2] cursor-pointer"
                            onClick={() => handleActionClick(row)}
                          >
                            {row[col.accessor]}
                          </span>
                        ) : (
                          row[col.accessor]
                        )
                      ) : (
                        <span
                          className={`text-[12px] font-semibold mr-2 px-2.5 py-0.5 rounded ${
                            chipsColors[row[col.accessor]] ||
                            "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {row[col.accessor]}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination + Rows per page */}
      <nav
        className="bg-white flex items-center flex-wrap md:flex-row justify-between p-4"
        aria-label="Table navigation"
      >
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <label
            htmlFor="rows"
            className="text-sm text-gray-600 dark:text-gray-300"
          >
            Rows per page:
          </label>
          <select
            id="rows"
            value={rowsPerPage}
            onChange={handleRowsChange}
            className="border rounded-md px-2 py-1 text-sm dark:bg-gray-700 dark:text-white"
          >
            {[5, 10, 20, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="flex items-center justify-center cursor-pointer px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li key={page}>
              <button
                onClick={() => setCurrentPage(page)}
                className={`flex items-center justify-center px-3 h-8 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer ${
                  currentPage === page
                    ? "text-blue-600 bg-blue-50 dark:bg-gray-700 dark:text-white"
                    : "bg-white text-gray-500 dark:bg-gray-800"
                }`}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="flex items-center justify-center cursor-pointer px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Table;
