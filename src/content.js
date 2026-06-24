console.log("A11y Extension: content script loaded");

const style = document.createElement("style");
style.textContent = `
  body {
    transform: scale(var(--a11y-scale));
    transform-origin: 0 0;
  }
`;
document.documentElement.appendChild(style);

// Initialize scale variable if not present
if (!document.documentElement.style.getPropertyValue("--a11y-scale")) {
  document.documentElement.style.setProperty("--a11y-scale", 1);
}

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "scale") {
    const current = parseFloat(document.body.style.getPropertyValue("--a11y-scale")) || 1;
    const newScale = current * request.value;
    document.body.style.setProperty("--a11y-scale", newScale);
  }
});
