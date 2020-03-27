const getInputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    const suffix = this.dataset.sizing  || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

getInputs.forEach(input => input.addEventListener('change', handleUpdate));getInputs.forEach(input => input.addEventListener('mousemove', handleUpdate));





