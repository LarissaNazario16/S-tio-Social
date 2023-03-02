const btn = document.querySelectorAll('#dados')

    btn.forEach(x => {
        x.addEventListener('click', () => x.innerHTML = "Reservado")
    })
