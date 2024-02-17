<script>
  import Clock from "./components/Clock.svelte";
  import Date from "./components/Date.svelte";
  import Greetings from "./components/Greetings.svelte";
  import Quote from "./components/Quote.svelte";
  import Todos from "./components/Todos.svelte";
</script>

<main>
  <div class="header">
    <Date />
    <Todos />
  </div>
  <div class="body">
    <Clock />
    <Greetings />
  </div>
  <div class="footer">
    <Quote />
  </div>
</main>

<style>
  main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transform: translateY(-1.5rem);
  }
  .footer {
    display: flex;
    justify-content: center;
  }
</style>
