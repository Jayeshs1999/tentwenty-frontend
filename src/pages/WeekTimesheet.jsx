import React, { useEffect } from "react";
import { useState } from "react";
import { MoreVertical, Edit, Trash } from "lucide-react";
import { useParams } from "react-router";
import { getTimesheetEntries } from "../../api";

const WeekTimesheet = () => {
  const { id } = useParams();
  const [timesheet, setTimesheet] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);

  console.log("id:", id, timesheet);

  useEffect(() => {
    getWeeklyTimesheetData(id - 1);
  }, []);

  const getWeeklyTimesheetData = async (week) => {
    try {
      const response = await getTimesheetEntries(week);
      setTimesheet(response);
    } catch (err) {
      console.log(err);
      setTimesheet([]);
    }
  };

  const totalHours = timesheet?.timesheetEntries?.reduce(
    (sum, day) =>
      sum + day.tasks.reduce((s, t) => (s >= 8 ? 8 : s + t.hours), 0),
    0
  );
  const maxHours = 40;

  const handleDelete = (dayIndex, taskId) => {
    const updated = [...timesheet?.timesheetEntries];
    updated[dayIndex].tasks = updated[dayIndex].tasks.filter(
      (t) => t.id !== taskId
    );
    setTimesheet(updated);
  };

  return (
    <div className=" pt-[27px] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-35 ">
      {/* Header */}
      <div className="bg-white p-6 rounded-[8px]">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">This week’s timesheet</h2>
          {/* Progress bar */}
          <div className="mt-4 w-[188px]">
            <div className="flex justify-between flex-col text-sm mb-1">
              <span className="text-center">
                {totalHours}/{maxHours} hrs
              </span>
              <span className="text-end">
                {Math.round((totalHours / maxHours) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: `${(totalHours / maxHours) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600">21 - 26 January, 2024</div>

        {/* Days + Tasks */}
        <div className="mt-6 space-y-6">
          {timesheet?.timesheetEntries?.map((day, dayIndex) => (
            <div key={day.date}>
              <h3 className="text-gray-700 font-medium">{day.date}</h3>
              <div className="mt-2 space-y-2">
                {day.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex justify-between items-center border rounded-lg px-3 py-2 bg-gray-50"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{task.title}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-600">
                        {task.hours} hrs
                      </span>
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                        {task.project}
                      </span>

                      {/* Dropdown Menu */}
                      <div className="relative inline-block">
                        <MoreVertical
                          className="w-5 h-5 text-gray-500 cursor-pointer"
                          onClick={() =>
                            setOpenMenu(openMenu === task.id ? null : task.id)
                          }
                        />

                        {openMenu === task.id && (
                          <div className="absolute right-0 mt-1 w-28 bg-white  rounded shadow-lg z-10">
                            <button className="flex items-center gap-2 w-full px-3 py-1.5 text-sm hover:bg-gray-100">
                              <Edit size={14} /> Edit
                            </button>
                            <button
                              className="flex items-center gap-2 w-full px-3 py-1.5 text-sm text-red-600 hover:bg-gray-100"
                              onClick={() => handleDelete(dayIndex, task.id)}
                            >
                              <Trash size={14} /> Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add new task */}
                <button className="w-full text-blue-600 border border-dashed border-blue-300 rounded-lg py-2 text-sm hover:bg-blue-50">
                  + Add new task
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekTimesheet;
