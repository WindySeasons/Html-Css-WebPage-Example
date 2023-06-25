function calculateDistance(time, pace) {
    // 将时间转换为秒
    const timeInSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds;
  
    // 将配速转换为秒/公里
    const paceInSeconds = pace.minutes * 60 + pace.seconds;
    
    // 计算距离（公里）
    const distanceInKilometers = timeInSeconds / paceInSeconds;
  
    return distanceInKilometers;
  }
  
  // 示例用法
  const time = { hours: 1, minutes: 30, seconds: 0 };
  const pace = { minutes: 6, seconds: 0 };
  const distance = calculateDistance(time, pace);
  console.log(`距离：${distance.toFixed(2)} 公里`);