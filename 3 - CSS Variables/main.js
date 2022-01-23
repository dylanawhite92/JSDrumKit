const inputs = document.querySelectorAll('.controls input');


function handleUpdate() {
    // suffix handles the two inputs that require px to be appended
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// come back and try to work on code to handle mousemove function repeating