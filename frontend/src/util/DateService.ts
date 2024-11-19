export interface DateFormat {
  date: string;
  day: string;
  displaydate: string;
}

export const generateDates = (): DateFormat[] => {
  const currentDate = new Date();
  const dates = [];

  for (let i = -5; i <= 5; i++) {
    const date = new Date();
    date.setDate(currentDate.getDate() + i);
    dates.push(formatDate(date));
  }
  return dates;
};

const formatDate = (generatedDate: Date): DateFormat => {
  let dayAlp = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    generatedDate
  );

  const year = generatedDate.getFullYear();
  const month = String(generatedDate.getMonth() + 1).padStart(2, "0");
  const day = String(generatedDate.getDate()).padStart(2, "0");
  let dayNum = `${year}-${month}-${day}`;

  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    generatedDate
  );
  let dayAlpNume = `${day} -${monthName}`;

  return {
    date: dayNum,
    day: dayAlp,
    displaydate: dayAlpNume,
  };
};
