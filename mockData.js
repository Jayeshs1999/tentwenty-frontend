export const users = [
  { email: "jayeshsevatkar55@gmail.com", password: "1234" },
];

export const timesheets = [
  { id: 1, userId: 1, week: "2025-W38", totalHours: 40 },
  { id: 2, userId: 1, week: "2025-W39", totalHours: 35 },
  { id: 3, userId: 2, week: "2025-W39", totalHours: 42 },
];

export const timesheetListData = [
  {
    no: "1",
    date: "1 - 5 January, 2024",
    status: "Completed",
    action: "View",
    timesheetEntries: [
      {
        date: "Jan 1",
        tasks: [
          {
            id: 1,
            title: "Homepage Development",
            hours: 4,
            project: "Project Name",
          },
          {
            id: 2,
            title: "Homepage Development",
            hours: 4,
            project: "Project Name",
          },
        ],
      },
      {
        date: "Jan 2",
        tasks: [
          {
            id: 3,
            title: "Homepage Development",
            hours: 4,
            project: "Project Name",
          },
          {
            id: 4,
            title: "Homepage Development",
            hours: 4,
            project: "Project Name",
          },
          {
            id: 5,
            title: "Homepage Development",
            hours: 4,
            project: "Project Name",
          },
        ],
      },
      {
        date: "Jan 3",
        tasks: [
          {
            id: 6,
            title: "Homepage Development",
            hours: 4,
            project: "Project Name",
          },
          {
            id: 7,
            title: "Homepage Development",
            hours: 4,
            project: "Project Name",
          },
          {
            id: 8,
            title: "Homepage Development",
            hours: 4,
            project: "Project Name",
          },
        ],
      },
      {
        date: "Jan 4",
        tasks: [
          {
            id: 9,
            title: "Homepage Development",
            hours: 4,
            project: "Project Name",
          },
          {
            id: 10,
            title: "Homepage Development",
            hours: 4,
            project: "Project Name",
          },
          {
            id: 11,
            title: "Homepage Development",
            hours: 4,
            project: "Project Name",
          },
        ],
      },
      { date: "Jan 5", tasks: [] },
    ],
  },
  {
    no: "2",
    date: "8 - 12 January, 2024",
    status: "Incomplete",
    action: "Edit",
    timesheetEntries: [
      {
        date: "Jan 8",
        tasks: [
          { id: 12, title: "UI Fixes", hours: 2, project: "Website Revamp" },
        ],
      },
      { date: "Jan 9", tasks: [] },
      { date: "Jan 10", tasks: [] },
      { date: "Jan 11", tasks: [] },
      { date: "Jan 12", tasks: [] },
    ],
  },
  {
    no: "3",
    date: "15 - 19 January, 2024",
    status: "Completed",
    action: "View",
    timesheetEntries: [
      {
        date: "Jan 15",
        tasks: [
          {
            id: 13,
            title: "API Integration",
            hours: 5,
            project: "Backend Services",
          },
        ],
      },
      { date: "Jan 16", tasks: [] },
      { date: "Jan 17", tasks: [] },
      { date: "Jan 18", tasks: [] },
      { date: "Jan 19", tasks: [] },
    ],
  },
  {
    no: "4",
    date: "22 - 26 January, 2024",
    status: "Missing",
    action: "Create",
    timesheetEntries: [
      { date: "Jan 22", tasks: [] },
      { date: "Jan 23", tasks: [] },
      { date: "Jan 24", tasks: [] },
      { date: "Jan 25", tasks: [] },
      { date: "Jan 26", tasks: [] },
    ],
  },
  {
    no: "5",
    date: "29 Jan - 2 Feb, 2024",
    status: "Completed",
    action: "View",
    timesheetEntries: [
      {
        date: "Jan 29",
        tasks: [
          { id: 14, title: "Bug Fixing", hours: 3, project: "Mobile App" },
        ],
      },
      { date: "Jan 30", tasks: [] },
      { date: "Jan 31", tasks: [] },
      { date: "Feb 1", tasks: [] },
      { date: "Feb 2", tasks: [] },
    ],
  },
  {
    no: "6",
    date: "5 - 9 February, 2024",
    status: "Completed",
    action: "View",
    timesheetEntries: [
      {
        date: "Feb 5",
        tasks: [
          {
            id: 15,
            title: "Database Optimization",
            hours: 4,
            project: "Backend Services",
          },
        ],
      },
      {
        date: "Feb 6",
        tasks: [
          {
            id: 16,
            title: "Database Optimization",
            hours: 4,
            project: "Backend Services",
          },
        ],
      },
      { date: "Feb 7", tasks: [] },
      {
        date: "Feb 8",
        tasks: [{ id: 17, title: "Testing", hours: 3, project: "QA" }],
      },
      { date: "Feb 9", tasks: [] },
    ],
  },
  {
    no: "7",
    date: "12 - 16 February, 2024",
    status: "Incomplete",
    action: "Edit",
    timesheetEntries: [
      {
        date: "Feb 12",
        tasks: [
          {
            id: 18,
            title: "Frontend Bug Fix",
            hours: 2,
            project: "Website Revamp",
          },
        ],
      },
      { date: "Feb 13", tasks: [] },
      { date: "Feb 14", tasks: [] },
      { date: "Feb 15", tasks: [] },
      { date: "Feb 16", tasks: [] },
    ],
  },
  {
    no: "8",
    date: "19 - 23 February, 2024",
    status: "Completed",
    action: "View",
    timesheetEntries: [
      {
        date: "Feb 19",
        tasks: [
          { id: 19, title: "UI Design", hours: 5, project: "Mobile App" },
        ],
      },
      { date: "Feb 20", tasks: [] },
      { date: "Feb 21", tasks: [] },
      { date: "Feb 22", tasks: [] },
      { date: "Feb 23", tasks: [] },
    ],
  },
  {
    no: "9",
    date: "26 Feb - 1 Mar, 2024",
    status: "Missing",
    action: "Create",
    timesheetEntries: [
      { date: "Feb 26", tasks: [] },
      { date: "Feb 27", tasks: [] },
      { date: "Feb 28", tasks: [] },
      { date: "Feb 29", tasks: [] },
      { date: "Mar 1", tasks: [] },
    ],
  },
  {
    no: "10",
    date: "4 - 8 March, 2024",
    status: "Completed",
    action: "View",
    timesheetEntries: [
      {
        date: "Mar 4",
        tasks: [
          {
            id: 20,
            title: "API Testing",
            hours: 4,
            project: "Backend Services",
          },
        ],
      },
      {
        date: "Mar 5",
        tasks: [
          {
            id: 21,
            title: "API Testing",
            hours: 3,
            project: "Backend Services",
          },
        ],
      },
      { date: "Mar 6", tasks: [] },
      { date: "Mar 7", tasks: [] },
      { date: "Mar 8", tasks: [] },
    ],
  },
  {
    no: "11",
    date: "11 - 15 March, 2024",
    status: "Incomplete",
    action: "Edit",
    timesheetEntries: [
      {
        date: "Mar 11",
        tasks: [
          {
            id: 22,
            title: "Frontend Integration",
            hours: 4,
            project: "Website Revamp",
          },
        ],
      },
      { date: "Mar 12", tasks: [] },
      { date: "Mar 13", tasks: [] },
      { date: "Mar 14", tasks: [] },
      { date: "Mar 15", tasks: [] },
    ],
  },
  {
    no: "12",
    date: "18 - 22 March, 2024",
    status: "Completed",
    action: "View",
    timesheetEntries: [
      {
        date: "Mar 18",
        tasks: [
          {
            id: 23,
            title: "Module Development",
            hours: 5,
            project: "Backend Services",
          },
        ],
      },
      { date: "Mar 19", tasks: [] },
      { date: "Mar 20", tasks: [] },
      { date: "Mar 21", tasks: [] },
      { date: "Mar 22", tasks: [] },
    ],
  },
  {
    no: "13",
    date: "25 - 29 March, 2024",
    status: "Missing",
    action: "Create",
    timesheetEntries: [
      { date: "Mar 25", tasks: [] },
      { date: "Mar 26", tasks: [] },
      { date: "Mar 27", tasks: [] },
      { date: "Mar 28", tasks: [] },
      { date: "Mar 29", tasks: [] },
    ],
  },
  {
    no: "14",
    date: "1 - 5 April, 2024",
    status: "Completed",
    action: "View",
    timesheetEntries: [
      {
        date: "Apr 1",
        tasks: [
          {
            id: 24,
            title: "Feature Implementation",
            hours: 6,
            project: "Mobile App",
          },
        ],
      },
      { date: "Apr 2", tasks: [] },
      { date: "Apr 3", tasks: [] },
      { date: "Apr 4", tasks: [] },
      { date: "Apr 5", tasks: [] },
    ],
  },
  {
    no: "15",
    date: "8 - 12 April, 2024",
    status: "Incomplete",
    action: "Edit",
    timesheetEntries: [
      {
        date: "Apr 8",
        tasks: [
          { id: 25, title: "Bug Fixes", hours: 3, project: "Website Revamp" },
        ],
      },
      { date: "Apr 9", tasks: [] },
      { date: "Apr 10", tasks: [] },
      { date: "Apr 11", tasks: [] },
      { date: "Apr 12", tasks: [] },
    ],
  },
  {
    no: "16",
    date: "15 - 19 April, 2024",
    status: "Completed",
    action: "View",
    timesheetEntries: [
      {
        date: "Apr 15",
        tasks: [
          {
            id: 26,
            title: "Code Review",
            hours: 4,
            project: "Backend Services",
          },
        ],
      },
      { date: "Apr 16", tasks: [] },
      { date: "Apr 17", tasks: [] },
      { date: "Apr 18", tasks: [] },
      { date: "Apr 19", tasks: [] },
    ],
  },
  {
    no: "17",
    date: "22 - 26 April, 2024",
    status: "Missing",
    action: "Create",
    timesheetEntries: [
      { date: "Apr 22", tasks: [] },
      { date: "Apr 23", tasks: [] },
      { date: "Apr 24", tasks: [] },
      { date: "Apr 25", tasks: [] },
      { date: "Apr 26", tasks: [] },
    ],
  },
  {
    no: "18",
    date: "29 April - 3 May, 2024",
    status: "Completed",
    action: "View",
    timesheetEntries: [
      {
        date: "Apr 29",
        tasks: [
          {
            id: 27,
            title: "Module Testing",
            hours: 5,
            project: "Backend Services",
          },
        ],
      },
      { date: "Apr 30", tasks: [] },
      { date: "May 1", tasks: [] },
      { date: "May 2", tasks: [] },
      { date: "May 3", tasks: [] },
    ],
  },
  {
    no: "19",
    date: "6 - 10 May, 2024",
    status: "Incomplete",
    action: "Edit",
    timesheetEntries: [
      {
        date: "May 6",
        tasks: [
          {
            id: 28,
            title: "Frontend Updates",
            hours: 3,
            project: "Mobile App",
          },
        ],
      },
      { date: "May 7", tasks: [] },
      { date: "May 8", tasks: [] },
      { date: "May 9", tasks: [] },
      { date: "May 10", tasks: [] },
    ],
  },
  {
    no: "20",
    date: "13 - 17 May, 2024",
    status: "Completed",
    action: "View",
    timesheetEntries: [
      {
        date: "May 13",
        tasks: [
          {
            id: 29,
            title: "Deployment",
            hours: 4,
            project: "Backend Services",
          },
        ],
      },
      { date: "May 14", tasks: [] },
      { date: "May 15", tasks: [] },
      { date: "May 16", tasks: [] },
      { date: "May 17", tasks: [] },
    ],
  },
];
