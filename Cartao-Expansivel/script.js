const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () =>{
        removetheclass()
        panel.classList.add('active')
    } )
})

function removetheclass(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}