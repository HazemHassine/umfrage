export async function createUser(userData) {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
  
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Failed to create user")
    }
  
    return response.json()
  }
  
      