import { compareAsc, format } from 'date-fns';

function dates(date){
  format(new Date(2014, 1, 11), 'yyyy-MM-dd')
  //=> '2014-02-11'
  
  const dates = [
  ]
  dates.push(new Date(date));
  let currentDate = dates.sort(compareAsc);
  return currentDate;
  
  //=> [
  //   Wed Feb 11 1987 00:00:00,
  //   Mon Jul 10 1989 00:00:00,
  //   Sun Jul 02 1995 00:00:00
  // ]
}
export{dates};