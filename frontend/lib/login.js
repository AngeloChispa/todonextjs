const login = async (email, password) => {
    let flag = false;
  
    try {
    
    await fetch('http://localhost:8000/sanctum/csrf-cookie', {
      method: 'GET',
      credentials: 'include',
    });

    const xsrfToken = document.cookie
      .split('; ')
      .find(row => row.startsWith('XSRF-TOKEN='))
      ?.split('=')[1];

    const response = await fetch('http://localhost:8000/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-XSRF-TOKEN': decodeURIComponent(xsrfToken),
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log("¡Inicio de sesión exitoso!");
      flag = true;
    } else {
      const errorData = await response.json();
      console.error("Fallo en las credenciales:", errorData.message);
    }
  } catch (error) {
    console.error("Error de red o servidor:", error);
  }

  return flag;
};