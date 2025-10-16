// Lê o access token do localStorage
function getAccessToken() {
    return localStorage.getItem("access_token");
  }
  
  // Renova o access token usando o refresh token
  async function refreshAccessToken() {
    const refreshToken = localStorage.getItem("refresh_token");
  
    const resposta = await fetch("http://soma-development.page.gd/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh: refreshToken }),
      credentials: "include",
    });
  
    if (!resposta.ok) {
      throw new Error("Não foi possível renovar o token. Faça login novamente.");
    }
  
    const data = await resposta.json();
    localStorage.setItem("access_token", data.access);
    return data.access;
  }
  
  // Função que faz requisições com access token e tenta renovar se expirar
  export async function apiFetch(url, options = {}) {
    let token = getAccessToken();
  
    const resposta = await fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
  
    if (resposta.status === 401) {
      try {
        token = await refreshAccessToken();
  
        const novaResposta = await fetch(url, {
          ...options,
          headers: {
            ...(options.headers || {}),
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        });
  
        return novaResposta;
      } catch (error) {
        console.error("Erro ao renovar token:", error);
        localStorage.clear(); // Limpa tokens
        window.location.href = "/login"; // Redireciona para login
        throw error;
      }
    }
  
    return resposta;
  }
  