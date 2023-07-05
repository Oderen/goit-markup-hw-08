const subscribeButton = document.querySelector(".subscribe-button");

subscribeButton.addEventListener("mouseover", () => {
  subscribeButton.style.backgroundColor = "#188ce8";
  subscribeButton.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.15)";
});

subscribeButton.addEventListener("mouseout", () => {
  subscribeButton.style.backgroundColor = "#2196F3";
  subscribeButton.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.15)";
});
