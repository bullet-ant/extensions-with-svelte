<script>
  import Clock from "./components/Clock.svelte";
  import Date from "./components/Date.svelte";
  import Greetings from "./components/Greetings.svelte";
  import Quote from "./components/Quote.svelte";
  import Todos from "./components/Todos.svelte";

  chrome.runtime
    .sendMessage({
      type: "HELLO",
      message: "Hey Background! I'm the Main app! 👋",
    })
    .then((res) => {
      console.log(res.message);
    })
    .catch((err) => {
      console.error(err);
    });
</script>

<main>
  <div class="header">
    <Date />
    <Todos />
  </div>
  <div class="body">
    <Clock />
    <Greetings />
    <br />
    <p>Start with updating <code>App.svelte</code></p>
  </div>
  <div class="footer">
    <Quote />
  </div>
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
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
    transform: translateY(-2.5rem);
  }
  .footer {
    display: flex;
    justify-content: center;
  }

  code {
    font-size: 0.9rem;
    position: relative;
  }
  code::before {
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: -1;
  }
</style>
