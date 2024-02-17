<script>
  let name = "buddy";

  const GREETINGS = {
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
    night: "Good night",
  };
  const greeting = getGreeting(new Date().getHours());

  function getGreeting(hours) {
    if (hours >= 5 && hours < 12) {
      return GREETINGS.morning;
    } else if (hours >= 12 && hours < 17) {
      return GREETINGS.afternoon;
    } else if (hours >= 17 && hours < 22) {
      return GREETINGS.evening;
    } else {
      return GREETINGS.night;
    }
  }
</script>

<div class="greeting">
  {greeting}, {name}!
</div>

<style>
  .greeting {
    font-size: 2.4rem;
  }
</style>