# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

### Links

- Solution URL: [Solution]()
- Live Site URL: [Live site]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JS validation
- Mobile-first workflow

### What I learned

I learned a lot through this project especially form validation using JS

```js
form1El.addEventListener("submit", (e) => {
  let flag = true;
  e.preventDefault();
  for (let i = 0; i < 5; i++) {
    const inEl = document.querySelector(`.i${i}`);
    const errEl = document.querySelector(`.e${i}`);
    if (inEl.value == "") {
      inEl.style.border = `1px solid var(--Red)`;
      errEl.style.display = `block`;
      flag = false;
    }
  }
  if (flag) {
    form1El.style.display = "none";
    form2El.style.display = `flex`;
  }
```

## Author

- Frontend Mentor - [@DEEPAK-tech40](https://www.frontendmentor.io/profile/DEEPAK-tech40)
