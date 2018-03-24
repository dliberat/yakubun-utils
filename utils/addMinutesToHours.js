/**
 * Performs a regex search and replace turning instances of
 * hours without minutes (e.g. 10am, 3pm) into the same time
 * but with a :00 added at the end (10:00am, 3:00pm)
 * @param {string} target
 */
function addMinutesToHours(target) {
  return target.replace(/\s([1]?[0-9])([ap]m)|^([1]?[0-9])([ap]m)/g, ' $1$3:00$2$4');
}

module.exports = addMinutesToHours;
