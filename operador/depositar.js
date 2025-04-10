// Simulador de búsqueda de cuenta
document.getElementById('searchAccountButton').addEventListener('click', () => {
    const accountNumber = document.getElementById('accountNumber').value.trim();
  
    if (accountNumber === '') {
      alert('Por favor, ingrese un número de cuenta.');
      return;
    }
  
    // Simulamos la búsqueda con datos ficticios
    if (accountNumber === '1234567890') {
      document.getElementById('accountHolder').textContent = 'Cliente Demo';
      document.getElementById('accountType').textContent = 'Ahorros';
      document.getElementById('currentBalance').textContent = '$150,000.00';
      document.getElementById('accountStatus').textContent = 'Activa';
      document.getElementById('accountStatus').className = 'status-active';
    } else {
      alert('Cuenta no encontrada.');
    }
  });
  
  document.getElementById('realizarDepositoButton').addEventListener('click', () => {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);
    const holder = document.getElementById('accountHolder').textContent;
  
    if (holder === '—') {
      alert('Primero busque y verifique una cuenta válida.');
      return;
    }
  
    if (isNaN(depositAmount) || depositAmount <= 0) {
      alert('Ingrese un monto válido para el depósito.');
      return;
    }
  
    // Simulamos el depósito
    alert(`Depósito de $${depositAmount.toFixed(2)} realizado con éxito a la cuenta de ${holder}.`);
  
    // Aquí podrías agregar lógica para actualizar el saldo visualmente o enviar datos al backend
    // Limpiar campos si es necesario
    document.getElementById('depositAmount').value = '0.00';
  });
  
  document.getElementById('changeAccountButton').addEventListener('click', () => {
    // Restablecer valores
    document.getElementById('accountNumber').value = '';
    document.getElementById('accountHolder').textContent = '—';
    document.getElementById('accountType').textContent = '—';
    document.getElementById('currentBalance').textContent = '—';
    document.getElementById('accountStatus').textContent = '—';
    document.getElementById('accountStatus').className = 'status-inactive';
  });
  