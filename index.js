document.querySelector('.btn').addEventListener('click', () => {
    document.querySelectorAll('.toggle').forEach(el => {
        if(el.classList.contains('hidden')) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });
})