"use client";
import { set } from "lodash";
import React, { useState, useEffect } from "react";

function AgeCalculator() {
  const today = new Date();
  const initialToDay = today.getDate().toString();
  const initialToMonth = (today.getMonth() + 1).toString(); // Months are 0-based
  const initialToYear = today.getFullYear().toString();

  // State for FROM date
  const [fromDay, setFromDay] = useState("");
  const [fromMonth, setFromMonth] = useState("");
  const [fromYear, setFromYear] = useState("");

  // State for TO date (default to today)
  const [toDay, setToDay] = useState(initialToDay);
  const [toMonth, setToMonth] = useState(initialToMonth);
  const [toYear, setToYear] = useState(initialToYear);

  const [age, setAge] = useState(null);
  const [message, setMessage] = useState("");

  const calculateDuration = () => {
    const fromDate = new Date(`${fromYear}-${fromMonth}-${fromDay}`);
    let toDate;

    // Check if TO date fields are empty
    if (toDay === "" && toMonth === "" && toYear === "") {
      toDate = new Date(); // Use today's date
    } else {
      // Validate TO date
      toDate = new Date(`${toYear}-${toMonth}-${toDay}`);
      if (isNaN(toDate)) {
        setMessage("Invalid To Date!");
        return;
      }
    }

    if (isNaN(fromDate)) {
      setMessage("Please enter a valid Date!");
      return;
    }

    if (toDate < fromDate) {
      setMessage("To Date must be after From Date!");
      return;
    }

    // Calculate years, months, days
    let years = toDate.getFullYear() - fromDate.getFullYear();
    let months = toDate.getMonth() - fromDate.getMonth();
    let days = toDate.getDate() - fromDate.getDate();

    // Adjust for negative months/days
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
    if (days < 0) {
      const lastMonth = new Date(toDate.getFullYear(), toDate.getMonth(), 0);
      days += lastMonth.getDate();
      months--;
    }

    // Calculate totals
    const totalDays = Math.floor((toDate - fromDate) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalSeconds = totalMinutes * 60;

    setAge({
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      totalHours,
      totalMinutes,
      totalSeconds,
    });
  };

  const resetAge = () => {
    setAge(null);
    setFromDay("");
    setFromMonth("");
    setFromYear("");
    setToDay(initialToDay);
    setToMonth(initialToMonth);
    setToYear(initialToYear);
  };

  useEffect(() => {
    setInterval(() => {
      setMessage("");
    }, 5000);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 className="text-3xl font-bold my-5">Age Calculator</h1>

      <div className="border  w-10/12 mx-auto p-5 ">
        <div className="border">
          <h1>Calculate Your Age To Given Date</h1>
        </div>
        <div className="flex gap-5">
          <div className="form flex-1">
            {/* FROM DATE */}
            <div className="grid grid-cols-4 gap-5 my-5">
              <h2 className="text-xl">From Date</h2>
              <select
                value={fromDay}
                onChange={(e) => setFromDay(e.target.value)}
                style={{ padding: "5px" }}
                className="border rounded-md"
              >
                <option value="" disabled>
                  Day
                </option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select
                value={fromMonth}
                onChange={(e) => setFromMonth(e.target.value)}
                style={{ padding: "5px" }}
                className="border rounded-md"
              >
                <option value="" disabled>
                  Month
                </option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {new Date(0, i).toLocaleString("default", {
                      month: "long",
                    })}
                  </option>
                ))}
              </select>

              <input
                type="number"
                value={fromYear}
                onChange={(e) => setFromYear(e.target.value)}
                placeholder="YYYY"
                style={{ padding: "5px" }}
                className="border rounded-md"
              />
            </div>
            {/* TO DATE (defaults to today) */}
            <div style={{ margin: "20px 0" }} className="flex gap-5">
              <div className="grid grid-cols-4 gap-5 my-5">
                {" "}
                <h2 className="text-xl">To Date</h2>
                <select
                  value={toDay}
                  onChange={(e) => setToDay(e.target.value)}
                  style={{ padding: "5px" }}
                  className="border rounded-md"
                >
                  <option value="" disabled>
                    Day
                  </option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <select
                  value={toMonth}
                  onChange={(e) => setToMonth(e.target.value)}
                  style={{ padding: "5px" }}
                  className="border rounded-md"
                >
                  <option value="" disabled>
                    Month
                  </option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {new Date(0, i).toLocaleString("default", {
                        month: "long",
                      })}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  value={toYear}
                  onChange={(e) => setToYear(e.target.value)}
                  placeholder="YYYY"
                  style={{ padding: "5px" }}
                  className="border rounded-md"
                />
              </div>
            </div>
            <button
              onClick={calculateDuration}
              style={{ marginTop: "20px", padding: "10px 20px" }}
              className="bg-blue-500 text-white rounded-md"
            >
              Calculate Duration
            </button>{" "}
            <button
              onClick={resetAge}
              style={{ marginTop: "20px", padding: "10px 20px" }}
              className="bg-blue-500 text-white rounded-md"
            >
              Reset Result
            </button>
          </div>
          <div className="result text-start flex-1">
            {age && (
              <div style={{ marginTop: "20px" }} className="space-y-2">
                <h2>Age:</h2>
                <p className="font-bold">
                  {age.years} years {age.months} months {age.days} days
                </p>
                <p>
                  or {age.years * 12 + age.months} months {age.days} days
                </p>
                <p>
                  or {age.totalWeeks} weeks {age.days % 7} days
                </p>
                <p>or {age.totalDays.toLocaleString()} days</p>
                <p>or {age.totalHours.toLocaleString()} hours</p>
                <p>or {age.totalMinutes.toLocaleString()} minutes</p>
                <p>or {age.totalSeconds.toLocaleString()} seconds</p>
              </div>
            )}
            {message && (
              <p className="bg-red-300 text-black p-3 rounded-md mt-3">
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgeCalculator;
