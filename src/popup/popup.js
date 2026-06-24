document.getElementById("scaleUp").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "scale", value: 1.2 });
  });
};

document.getElementById("scaleDown").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "scale", value: 0.8 });
  });
};

const toggle = document.getElementById("themeToggle");

// Load saved theme
chrome.storage.sync.get(["theme"], (result) => {
  const theme = result.theme || "dark";
  document.documentElement.classList.toggle("light", theme === "light");
  toggle.checked = theme === "dark";
});

// Toggle theme
toggle.addEventListener("change", () => {
  const theme = toggle.checked ? "dark" : "light";
  document.documentElement.classList.toggle("light", theme === "light");
  chrome.storage.sync.set({ theme });
});
/*
chrome.tabs.query(
  { active: true, lastFocusedWindow: true },
  (tabs) => {
    const tab = tabs[0];

    // Only message real webpages
    if (!tab || !tab.id || !/^https?:/.test(tab.url)) {
      console.warn("Invalid tab for messaging");
      return;
    }

    chrome.tabs.sendMessage(tab.id, { action: "scale", value: 1.2 })
      .catch(() => console.warn("Message failed"));
  }
);
*/
