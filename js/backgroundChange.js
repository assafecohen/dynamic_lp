export function setBgGreet() {
  const today = new Date(),
    hour = today.getHours();

  // todo: change the condition to be with other pattern, like:
  const timeConditions = {
    morning: hour < 12,
    afternoon: hour < 18 && hour >= 12,
    night: hour > 18
  };

  for (const currentTime in timeConditions) {
    if (timeConditions[currentTime]) {
      styleByTime(currentTime);
    }
  }
  function styleByTime(currentTime) {
    document.getElementById(
      'header'
    ).style.backgroundImage = `url('../img/${currentTime}.jpg')`;
  }
}
