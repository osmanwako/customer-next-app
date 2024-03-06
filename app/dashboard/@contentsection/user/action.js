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