"use server";
export const getCustomers = async () => {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}customer/`, {
      next: { revalidate: 20 },
    });
    if (response.ok) {
      const data = response.json();
      console.log(data);
      return data;
    }
    return [];
  } catch (error) {
    return [];
  }
};