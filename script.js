localStorage.clear()

document.querySelector('form').addEventListener('submit', (e) =>{
    localStorage.clear()
    e.preventDefault()

    const username = document.getElementById("username").value.trim() || ""
    const senha = document.getElementById("senha").value.trim() || ""
    document.getElementById("erro").innerHTML = ""

    fetch('http://localhost:3000/registro') // Buscando os dados que estão no localhost na porta 3000
    .then(resposta => resposta.json()).then(registros => {

        if (username == "" || senha == ""){
            document.getElementById("erro").innerHTML = "Usuario ou senha faltando"
            return
        }

        let conta = registros.filter(c => c.username === username && c.senha === senha)[0]
        
        if (conta){
            localStorage.setItem('nome', conta.nome)
            localStorage.setItem('sobrenome', conta.sobrenome)
            window.location.href = '../home.html'
        } else {
            document.getElementById("erro").innerHTML = "Conta não encontrada"
            return
        }
    })
})