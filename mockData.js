// src/mockData.js

// User data for login
export const users = [
  { email: "jayeshsevatkar55@gmail.com", password: "1234" },
];

// List of weekly timesheets
export const timesheets = [
  { id: 1, userId: 1, week: "2025-W38", totalHours: 40 },
  { id: 2, userId: 1, week: "2025-W39", totalHours: 35 },
  { id: 3, userId: 2, week: "2025-W39", totalHours: 42 },
];

// List of all timesheet entries per week
export const timesheetEntries = {
  "2025-W38": [
    { day: "Monday", hours: 8, project: "Project A" },
    { day: "Tuesday", hours: 8, project: "Project A" },
    { day: "Wednesday", hours: 8, project: "Project B" },
    { day: "Thursday", hours: 8, project: "Project C" },
    { day: "Friday", hours: 8, project: "Project A" },
  ],
  "2025-W39": [
    { day: "Monday", hours: 7, project: "Project A" },
    { day: "Tuesday", hours: 7, project: "Project B" },
    { day: "Wednesday", hours: 7, project: "Project C" },
    { day: "Thursday", hours: 7, project: "Project D" },
    { day: "Friday", hours: 7, project: "Project A" },
  ],
};

export const timesheetListData = [
  { no: "1", date: "1 - 5 January, 2024", status: "Completed", action: "View" },
  {
    no: "2",
    date: "8 - 12 January, 2024",
    status: "Incomplete",
    action: "View",
  },
  {
    no: "3",
    date: "15 - 19 January, 2024",
    status: "Completed",
    action: "View",
  },
  { no: "4", date: "22 - 26 January, 2024", status: "Missing", action: "View" },
  {
    no: "5",
    date: "29 Jan - 2 Feb, 2024",
    status: "Completed",
    action: "View",
  },
  {
    no: "6",
    date: "5 - 9 February, 2024",
    status: "Incomplete",
    action: "View",
  },
  {
    no: "7",
    date: "12 - 16 February, 2024",
    status: "Completed",
    action: "View",
  },
  {
    no: "8",
    date: "19 - 23 February, 2024",
    status: "Completed",
    action: "View",
  },
  { no: "9", date: "26 Feb - 1 Mar, 2024", status: "Missing", action: "View" },
  { no: "10", date: "4 - 8 March, 2024", status: "Completed", action: "View" },
  {
    no: "11",
    date: "11 - 15 March, 2024",
    status: "Incomplete",
    action: "View",
  },
  {
    no: "12",
    date: "18 - 22 March, 2024",
    status: "Completed",
    action: "View",
  },
  {
    no: "13",
    date: "25 - 29 March, 2024",
    status: "Completed",
    action: "View",
  },
  { no: "14", date: "1 - 5 April, 2024", status: "Missing", action: "View" },
  { no: "15", date: "8 - 12 April, 2024", status: "Completed", action: "View" },
  {
    no: "16",
    date: "15 - 19 April, 2024",
    status: "Incomplete",
    action: "View",
  },
  {
    no: "17",
    date: "22 - 26 April, 2024",
    status: "Completed",
    action: "View",
  },
  {
    no: "18",
    date: "29 Apr - 3 May, 2024",
    status: "Completed",
    action: "View",
  },
  { no: "19", date: "6 - 10 May, 2024", status: "Incomplete", action: "View" },
  { no: "20", date: "13 - 17 May, 2024", status: "Completed", action: "View" },
];
