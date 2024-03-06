"use server"
export const getUsers = async () => {
    //, {next: { revalidate: 20 },}
    try {
      const response = await fetch(`${process.env.API_BASE_URL}user/`, {next: { revalidate: 20 },});
      if (response.ok) {
        const data=response.json();
        return data;
      } 
      console.error('An error occurred during calling API:')
      return [];
    } catch (error) {

      console.error('An error occurred during the fetch operation:', error);
      return [];
    }
  };

  export const createUsers = async (user) => {
    let message='';
    try{
    const response = await fetch(`${process.env.API_BASE_URL}/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } 
    return [];
  } catch (error) {
    message=`An error occurred ${error.message}`;
  }
  return [message];
  };
