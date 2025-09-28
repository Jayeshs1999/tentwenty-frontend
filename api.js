import {
  users,
  timesheets,
  timesheetEntries,
  timesheetListData,
} from "./mockData";

const simulateNetwork = (data, delay = 500) =>
  new Promise((resolve) => setTimeout(() => resolve(data), delay));

export const login = async ({ email, password }) => {
  const user = users.some((u) => u.email.includes(email));
  console.log(user, email);
  if (user) {
    const data = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!data) throw new Error("Invalid credentials");
    return simulateNetwork({ email: data.email });
  } else {
    users.push({ email, password });
    return simulateNetwork({ email: user.email });
  }
};

// GET /timesheets/:userId
export const getTimesheets = async (userId) => {
  const data = timesheets.filter((t) => t.userId === userId);
  return simulateNetwork(data);
};

// GET /timesheetEntries/:week
export const getTimesheetEntries = async (week) => {
  const data = timesheetEntries[week] || [];
  return simulateNetwork(data);
};

export const getTimesheetListData = async () => {
  return simulateNetwork(timesheetListData);
};
