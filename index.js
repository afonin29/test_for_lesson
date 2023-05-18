function addDivToPage() {
  // Create a new div element
  const div = document.createElement("div");

  div.id = "myDiv";

  // Set any desired attributes, styles, or content for the div
  div.textContent = "This is a new div";
  div.style.backgroundColor = "lightblue";
  div.style.padding = "10px";

  // Append the div to the body or any other desired element
  document.body.appendChild(div);
}

// Call the function to add the div to the page
addDivToPage();
