import { useEffect, useState } from "react";

export function DateFormat() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [sevenDaysLater, setSevenDaysLater] = useState(null);
  // const groupedDataByDay = {};

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 7);
    setSevenDaysLater(endDate);
    setCurrentDate(today);
  }, []);

  const todayTimestamp = currentDate
    ? encodeURIComponent(currentDate.toISOString())
    : null;
  const sevenDaysLaterTimestamp = sevenDaysLater
    ? encodeURIComponent(sevenDaysLater.toISOString())
    : null;

  return {
    currentDate,
    sevenDaysLater,
    todayTimestamp,
    sevenDaysLaterTimestamp,
  };
}
