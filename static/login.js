// Create background pattern
const pattern = document.getElementById("pattern");
const patternCount = 20;

for (let i = 0; i < patternCount; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  const size = Math.random() * 150 + 50;
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;

  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;
  dot.style.left = `${posX}%`;
  dot.style.top = `${posY}%`;

  pattern.appendChild(dot);
}

// Form validation & animation
const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const togglePassword = document.getElementById("toggle-password");
const successAnimation = document.getElementById("success-animation");
const inputFields = document.querySelectorAll(".form-control");

// Input animation
inputFields.forEach((input) => {
  input.addEventListener("focus", () => {
    input.parentElement.classList.add("focused");
  });

  input.addEventListener("blur", () => {
    input.parentElement.classList.remove("focused");

    // Add 'has-value' class if input has a value
    if (input.value.trim() !== "") {
      input.classList.add("has-value");
    } else {
      input.classList.remove("has-value");
    }
  });

  // Check for pre-filled values (e.g. on page refresh)
  if (input.value.trim() !== "") {
    input.classList.add("has-value");
  }
});

// Show/hide password
togglePassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>
        `;
  } else {
    password.type = "password";
    togglePassword.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        `;
  }
});

// Form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // let isValid = true;
  // // Validate email
  // if (!validateEmail(email.value)) {
  //   showError(email, emailError);
  //   isValid = false;
  // } else {
  //   hideError(email, emailError);
  // }

  // // Validate password
  // if (password.value.length < 6) {
  //   showError(password, passwordError);
  //   isValid = false;
  // } else {
  //   hideError(password, passwordError);
  // }

  // If form is valid, show success animation
  // if (isValid) {
  //   // Add ripple effect to button on submit
  //   const btn = document.getElementById("login-btn");
  //   const ripple = document.createElement("span");
  //   ripple.classList.add("ripple");
  //   btn.appendChild(ripple);

  //   const btnRect = btn.getBoundingClientRect();
  //   const diameter = Math.max(btnRect.width, btnRect.height);

  //   ripple.style.width = ripple.style.height = `${diameter}px`;
  //   ripple.style.left = `${e.clientX - btnRect.left - diameter / 2}px`;
  //   ripple.style.top = `${e.clientY - btnRect.top - diameter / 2}px`;

  //   setTimeout(() => {
  //     // Show success animation
  //     successAnimation.classList.add("active");

  //     // Redirect or show dashboard after animation
  //     setTimeout(() => {
  //       // Here you would redirect to dashboard or next page
  //       // window.location.href = "/dashboard";
  //       successAnimation.classList.remove("active");
  //       form.reset();
  //       inputFields.forEach((input) => {
  //         input.classList.remove("has-value");
  //       });
  //     }, 1500);
  //   }, 300);
  // }
});

// Helper functions
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function showError(input, errorElement) {
  input.classList.add("error");
  errorElement.classList.add("visible");
}

function hideError(input, errorElement) {
  input.classList.remove("error");
  errorElement.classList.remove("visible");
}
