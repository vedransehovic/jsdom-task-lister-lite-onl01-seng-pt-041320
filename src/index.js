document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", function () {
    event.preventDefault();
    const input = document.getElementById("new-task-description");
    if (input.value !== "") {
      const li = document.createElement("li");
      li.innerText = input.value;
      document.getElementById("tasks").append(li);
      input.value = "";
    }
  });
});
