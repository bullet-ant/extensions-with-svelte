<script>
  let time = getCurrentTime();

  setInterval(() => {
    time = getCurrentTime();
  }, 1000);

  function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    let time = "";
    time += hours;
    time += ":";
    time += minutes < 10 ? "0" + minutes : minutes;

    return time;
  }
</script>

<div class="clock">
  {time}
</div>

<style>
  .clock {
    font-size: 8rem;
  }
</style>