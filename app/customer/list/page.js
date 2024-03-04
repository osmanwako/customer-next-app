import {getCustomer} from "./action";
import Customers from "@/components/customers/customers";

async function Lists() {
  const customers = await getCustomer();
  if(customers.length==0){
    return <div>Loading...</div>;
  }

  return <Customers customers={customers} />;
}

export default Lists;
