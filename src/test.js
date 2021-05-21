const { animals, employees, prices, hours } = require('./data');

function schedule(dayName) {
  const obj = {};
  Object.keys(hours).map(element => obj[element] = `Open from ${hours[element].open}am until ${(hours[element].close) - 12}pm`);
  obj.Monday = 'CLOSED';
  if (dayName === undefined) return obj;

  return { [dayName]: obj[dayName] };
}

console.log(schedule('Monday'));

/* hours: {
  'Tuesday': { open: 8, close: 18 },
  'Wednesday': { open: 8, close: 18 },
  'Thursday': { open: 10, close: 20 },
  'Friday': { open: 10, close: 20 },
  'Saturday': { open: 8, close: 22 },
  'Sunday': { open: 8, close: 20 },
  'Monday': { open: 0, close: 0 }
} */


