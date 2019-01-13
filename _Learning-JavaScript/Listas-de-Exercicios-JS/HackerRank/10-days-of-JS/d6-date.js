
function getDayName(dateString) {
  let dayName;
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayIndex = new Date(dateString).getDay();
  dayName = days[dayIndex];
  return dayName;
  
  return dayName;
}

// test

console.log(getDayName("10/11/2009"));
console.log(getDayName("11/10/2010"));