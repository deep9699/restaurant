import { bill_details } from "../Class_models/bill_details_class";
export class bill__details
{
  constructor(
   public  amount:number,
   public user_id:string,
   public arr:bill_details[]

  ){}


}
