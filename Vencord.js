// some shiit
const script = document.createElement("script");
script.src = browser.runtime.getURL("C:/Users/HP/AppData/Roaming/BetterDiscord/plugins/chromium-unpacked/dist/vencord.js");

const style = document.createElement("link");
style.type = "text/css";
style.rel = "stylesheet";
style.href = browser.runtime.getURL("C:/Users/HP/AppData/Roaming/BetterDiscord/plugins/chromium-unpacked/dist/vencord.js");

document.documentElement.append(script);

document.addEventListener(
    "DOMContentLoaded",
    () => document.documentElement.append(style),
    { once: true }
);
