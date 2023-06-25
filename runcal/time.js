function calculateTime(distance, pace) {
    // 将配速转换为秒/单位距离
    const paceInSeconds = pace.minutes * 60 + pace.seconds;
  
    // 计算总时间（秒）
    const timeInSeconds = distance * paceInSeconds;
  
    // 将总时间转换为时、分、秒
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
  
    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  
  // 示例用法
  const distance = 15; // 单位：公里
  const pace = { minutes: 5, seconds: 59 };
  const time = calculateTime(distance, pace);
  console.log(`时间：${time.hours} 小时 ${time.minutes} 分钟 ${time.seconds} 秒`);