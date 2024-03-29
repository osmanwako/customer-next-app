"use server";
export const getUsers = async () => {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}user/`, {
      next: { revalidate: 20 },
    });
    if (response.ok) {
      const data = response.json();
      return data;
    }
    return [];
  } catch (error) {
    return [];
  }
};
