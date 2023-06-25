function calculatePace(time, distance) {
    // 将时间转换为秒
    const timeInSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds;
  
    // 计算配速（每公里/每英里所需时间）
    const pacePerKilometer = timeInSeconds / distance.kilometers;
    const pacePerMile = timeInSeconds / distance.miles;
  
    // 将配速转换为时间格式（分钟:秒）
    const pacePerKilometerFormatted = formatTime(pacePerKilometer);
    const pacePerMileFormatted = formatTime(pacePerMile);
  
    // 返回配速对象
    return {
      pacePerKilometer: pacePerKilometerFormatted,
      pacePerMile: pacePerMileFormatted
    };
  }
  
  // 辅助函数：将时间（以秒为单位）格式化为分钟:秒的字符串
  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  
  // 示例用法
  const time = { hours: 0, minutes: 13, seconds: 55 };
  const distance = { kilometers: 3, miles: 6.21 };
  const pace = calculatePace(time, distance);
  console.log(`配速（每公里）：${pace.pacePerKilometer} /km`);
  console.log(`配速（每英里）：${pace.pacePerMile} /mi`);