export function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning

    document.getElementById('header').style.backgroundImage =
      "url('../img/morning.jpg')";
  } else if (hour < 18) {
    // Afternoon
    document.getElementById('header').style.backgroundImage =
      "url('../img/afternoon.jpg')";
  } else {
    // Evening
    document.getElementById('header').style.backgroundImage =
      "url('../img/night.jpg')";
  }
}
