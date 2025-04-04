// Cadastro
document.getElementById("formCadastro").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
  
    const lista = document.getElementById("listaUsuarios");
    const li = document.createElement("li");
    li.textContent = `${nome} - ${email}`;
    lista.appendChild(li);
  
    document.getElementById("formCadastro").reset();
  });
  
  // Financeiro
  let transacoes = [];
  
  document.getElementById("formFinanceiro").addEventListener("submit", function (e) {
    e.preventDefault();
    const descricao = document.getElementById("descricao").value;
    const valor = parseFloat(document.getElementById("valor").value);
  
    transacoes.push({ descricao, valor });
  
    atualizarFinanceiro();
    atualizarContabil();
    document.getElementById("formFinanceiro").reset();
  });
  
  function atualizarFinanceiro() {
    const lista = document.getElementById("listaFinanceiro");
    lista.innerHTML = "";
  
    let total = 0;
  
    transacoes.forEach(transacao => {
      const li = document.createElement("li");
      li.textContent = `${transacao.descricao}: R$ ${transacao.valor.toFixed(2)}`;
      lista.appendChild(li);
      total += transacao.valor;
    });
  
    document.getElementById("total").textContent = total.toFixed(2);
  }
  
  function atualizarContabil() {
    const entradas = transacoes
      .filter(t => t.valor > 0)
      .reduce((sum, t) => sum + t.valor, 0);
  
    const saidas = transacoes
      .filter(t => t.valor < 0)
      .reduce((sum, t) => sum + t.valor, 0);
  
    document.getElementById("entradas").textContent = `R$ ${entradas.toFixed(2)}`;
    document.getElementById("saidas").textContent = `R$ ${Math.abs(saidas).toFixed(2)}`;
    document.getElementById("saldoFinal").textContent = `R$ ${(entradas + saidas).toFixed(2)}`;
  }
  