import Customers from "@/components/customers/customers";
import { getCustomers } from "./action";

export default async function CustomerPage(){
    const customers=await getCustomers();
    return <Customers customers={customers} />;
}