// Retrieve the codeEditor element
const codeEditor = document.getElementById("codeEditor");

// Initialize CodeMirror
const editor = CodeMirror(codeEditor, {
  lineNumbers: true,
  mode: "javascript", // Set the programming language mode
  // Add any other desired configuration options
});

// Add an event listener to capture changes in the code editor
editor.on("change", () => {
  const code = editor.getValue();
  // Perform further processing or update the UI based on the code input
});

// Implementing button
const shareButton = document.getElementById("shareButton");
shareButton.addEventListener("click", () => {
  const code = editor.getValue();
  // Perform code sharing functionality here, such as generating a URL and updating the UI

  // Generate a unique URL for code sharing
  const generatedUrl = generateUniqueUrl();

  const shareLinkElement = document.getElementById("shareLink");
  shareLinkElement.textContent = generatedUrl;

  // Copy the generated URL to the clipboard
  navigator.clipboard
    .writeText(generatedUrl)
    .then(() => {
      console.log("URL copied to clipboard");
    })
    .catch((error) => {
      console.error("Failed to copy URL to clipboard:", error);
    });
});

function generateUniqueUrl() {
  // Generate a random identifier
  const randomId = Math.random().toString(36).substring(7);
  const baseUrl = "https://example.com/share/";
  const generatedUrl = baseUrl + randomId;
  return generatedUrl;
}
