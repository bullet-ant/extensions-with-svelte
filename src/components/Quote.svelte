<script>
  let quote = getQuote();

  function getQuote() {
    const quotes = [
      {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
      },
      {
        text: "The secret to creativity is knowing how to hide your sources.",
        author: "Albert Einstein",
      },
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
</script>

<div class="quote">
  <p>{quote.text}</p>
</div>

<style>
  .quote {
    font-size: 1.1rem;
  }
</style>
