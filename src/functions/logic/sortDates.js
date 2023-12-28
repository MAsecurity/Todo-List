import { compareAsc, format } from 'date-fns';

function dates(date){ 
  const dates = [
  ]
  dates.push(new Date(date));
  let currentDate = dates.sort(compareAsc);
  return currentDate;
}
function getCurrentDate(){
  const date = new Date();
  const day = date.getDate()
  const month = date.getMonth()+1;
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}
export{dates, getCurrentDate};