// With background scripts you can communicate extension files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "HELLO") {
    (async () => {
      const message = request.message;
      console.log(message);

      sendResponse({ message: "Hello Main! I'm the Service Worker. Nice to hear from you! 😊" });
    })();

    // Return true to indicate that the response will be sent asynchronously
    return true;
  }
});
