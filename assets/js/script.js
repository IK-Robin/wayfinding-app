const hr_line = document.getElementById("hr_line");
const search_section = document.getElementById("search_section");
const search_section_top = document.getElementById("search_section_top");
const bottom_to_top_arrow = document.getElementById("bottom_to_top_arrow");
const top_to_bottom_down_arrow = document.getElementById(
  "top_to_bottom_down_arrow"
);
const hide_top_accrodion = document.getElementById("hide_top_accrodion");
const close_btn = document.getElementById("close_btn")
  ? document.getElementById("close_btn")
  : "";
let isTopAccordionOpen = false;
let isBottomAccordionOpen = true; // Bottom is open by default

// Function to toggle accordion height
function height_animation(section, type) {
  if (type === "top") {
    if (isTopAccordionOpen) {
      closeTopAccordion();
    } else {
      // Open the top accordion and close the bottom accordion
      section.style.height = section.scrollHeight + "px";
      hide_top_accrodion.style.top = section.scrollHeight - 25 + "px";
      top_to_bottom_down_arrow.style.display = "none";
      bottom_to_top_arrow.style.display = "block";
      isTopAccordionOpen = true;

      // Close the bottom accordion
      if (isBottomAccordionOpen) {
        closeBottomAccordion();
      }
    }
  } else if (type === "bottom") {
    if (isBottomAccordionOpen) {
      closeBottomAccordion();
    } else {
      // Open the bottom accordion and close the top accordion
      section.style.height = section.scrollHeight + "px";
      isBottomAccordionOpen = true;

    
        closeTopAccordion();
      
    }
  }

  // Add transition for smooth animation
  section.style.transition = "height 0.5s ease-in-out";
}

// Function to close the top accordion
function closeTopAccordion() {
  search_section_top.style.height = "72px";
  hide_top_accrodion.style.top = "49px";
  top_to_bottom_down_arrow.style.display = "block";
  bottom_to_top_arrow.style.display = "none";
  isTopAccordionOpen = false;
}

// Function to close the bottom accordion
function closeBottomAccordion() {
  search_section.style.height = "40px";
  isBottomAccordionOpen = false;
}



// Event listener for both the bottom accordion (hr_line) and top accordion (hide_top_accrodion)
hr_line.addEventListener("click", () =>{
  height_animation(search_section, "bottom");
});
hide_top_accrodion.addEventListener("click", ()=>{

  height_animation(search_section_top, "top");
});


const hide_searchsection = document.getElementById("hide_searchsection_top");
// Initialize state on window load
window.onload = () => {
  // Set default heights
  search_section_top.style.height = "72px"; // Default collapsed height for the top accordion
  search_section.style.height = search_section.scrollHeight + "px"; // Bottom is open by default
  hide_top_accrodion.style.top = "49px";
  console.log(window.innerHeight);

  // Set max-height for hide_searchsection based on window height
  if (window.innerHeight < 250) {
    hide_searchsection.style.maxHeight = "30vh";
  } else if (window.innerHeight < 300) {
    hide_searchsection.style.maxHeight = "40vh";
  } else if (window.innerHeight < 500) {
    hide_searchsection.style.maxHeight = "40vh";
  } else if (window.innerHeight < 600) {
    hide_searchsection.style.maxHeight = "50vh";
  } else if (window.innerHeight < 700) {
    hide_searchsection.style.maxHeight = "55vh";
  } else {
    hide_searchsection.style.maxHeight = ""; // Reset max-height for larger windows
  }

  // Adjust the top accordion height based on window height
};

// Event listener for window resize
window.addEventListener("resize", () => {
  console.log(window.innerHeight); // Log the current window height

  // Set max-height for hide_searchsection based on window height
  if (window.innerHeight < 250) {
    hide_searchsection.style.maxHeight = "30vh";
  } else if (window.innerHeight < 300) {
    hide_searchsection.style.maxHeight = "40vh";
  } else if (window.innerHeight < 500) {
    hide_searchsection.style.maxHeight = "40vh";
  } else if (window.innerHeight < 600) {
    hide_searchsection.style.maxHeight = "50vh";
  } else if (window.innerHeight < 700) {
    hide_searchsection.style.maxHeight = "55vh";
  } else {
    hide_searchsection.style.maxHeight = ""; // Reset max-height for larger windows
  }

  // Adjust the top accordion height based on window height
  if (window.innerHeight < 300) {
    search_section_top.style.height = "72px"; // Decrease the top accordion height when the window is smaller
    hide_top_accrodion.style.top = "49px";
  } else if (window.innerHeight < 500) {
    search_section_top.style.height = "72px"; // Default height for the top accordion
    hide_top_accrodion.style.top = "49px";
  } else if (window.innerHeight < 600) {
    search_section_top.style.height = "72px"; // Default height for the top accordion
    hide_top_accrodion.style.top = "49px";
  } else if (window.innerHeight < 800) {
    search_section_top.style.height = "72px"; // Default height for the top accordion
    hide_top_accrodion.style.top = "49px";
  }

  // Adjust the top accordion scroll height when it's open
  // if (isTopAccordionOpen) {
  //   search_section_top.style.height = search_section_top.scrollHeight + "px";
  // }
});
