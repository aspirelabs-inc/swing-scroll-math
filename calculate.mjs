export function calculate({before, after, days}) {
  for (const [key,value] of Object.entries({before,after,days})) {
    if (typeof value !== 'number' || !Number.isFinite(value)) throw new TypeError(`${key}: enter a number`);
  }
  if (before < 0 || before > 1440 || after < 0 || after > 1440) throw new RangeError('Minutes per day must be between 0 and 1,440.');
  if (!Number.isInteger(days) || days < 1 || days > 366) throw new RangeError('Choose between 1 and 366 whole days.');
  const dailyMinutes = before - after;
  return {dailyMinutes, totalMinutes: dailyMinutes * days, hours: dailyMinutes * days / 60};
}
