"use server"
export const getCustomer = async () => {
    //, {next: { revalidate: 20 },}
    try {
      const response = await fetch(`${process.env.API_BASE_URL}customer/`, {next: { revalidate: 20 },});
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
  