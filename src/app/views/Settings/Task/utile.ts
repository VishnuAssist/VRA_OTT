import { TaskType } from "../../../Models/TaskType"

export const filterbystatus=(data:any[],status:number)=>{
   const filterddata= data?.filter(
        (data: TaskType) => data.status === status
      )
return filterddata;
}