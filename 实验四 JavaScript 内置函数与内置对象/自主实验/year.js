window.YEAR = {
  // 判断是不是闰年
  isLeapYear : function (year) {
    if((year % 4 == 0 && year % 100 !=0 ) || year % 400 == 0)
      return true;
    else
      return false;
  },
  // 相差的整年数，换算成天数
  yearCount : function (yearBefore, yearAfter) {
    var year = yearBefore + 1;
    var sum = 0;
    while (year < yearAfter) {
      if ( YEAR.isLeapYear(year) )
        sum = sum + 366;
      else
        sum = sum + 365;
      year++;
    }
    return sum;
  },
  // 一年中的第几天，只计算到月份
  dayOfYear : function (year, month ) {
    var myYear = year;
    var sum = 0;
    for(var i = 1; i < month; i++) {
      switch(i) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
          sum = sum + 31;
          break;
        case 4:
        case 6:
        case 9:
        case 11:
          sum = sum + 30;
          break;
        case 2:
          if(YEAR.isLeapYear(myYear))
            sum = sum + 29;
          else
            sum = sum + 28;
          break;
      }
    }
    return sum;
  },
};