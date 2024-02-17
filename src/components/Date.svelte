<script>
  let date = getDate();

  setInterval(() => {
    date = getDate();
  }, 1000);

  function getDate() {
    const now = new Date();
    const date = now.getDate();
    const month = now.toLocaleString("default", { month: "long" });

    const dateString = `${date} ${month}`;

    return dateString;
  }
</script>

<div class="date">
  <p>{date}</p>
</div>
