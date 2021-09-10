export const calcDate = (date) => {

  const currDate = new Date();
  const dateOfPost = new Date(date * 1000)

  var diff = Math.floor(currDate.getTime() - dateOfPost.getTime());
  var day = 1000 * 60 * 60 * 24;
  var hour = 1000 * 60 * 60;
  var minute = 1000 * 60 * 60;
  var second = 1000 * 60;

  var seconds = Math.floor(diff / second);
  var minutes = Math.floor(diff / minute);
  var hours = Math.floor(diff / hour);
  var days = Math.floor(diff / day);
  var months = Math.floor(days / 31);
  var years = Math.floor(months / 12);
  var message = "";
  if (years > 0) message = `${years} years ago`;
  else if (months > 0) message = `${months} months ago`;
  else if (days > 0) message = `${days} days ago`;
  else if (hours > 0) message = `${hours} hours ago`;
  else if (minutes > 0) message = `${minutes} minutes ago`;
  else message = `${seconds} seconds ago`;

  return message;
};