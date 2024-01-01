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
  if (month < 10 && day < 10){
    return `${year}-0${month}-0${day}`
  }else if(month < 10){
    return `${year}-0${month}-${day}`
  }else if(day < 10){
    return `${year}-${month}-0${day}`
  }else{
    return `${year}-${month}-${day}`
  }
}
export{dates, getCurrentDate};