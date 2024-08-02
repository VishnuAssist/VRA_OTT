import { TaskType } from "../../../Models/TaskType"

export const filterbystatus=(data:any[],status:number)=>{
   const filterddata= data?.filter(
        (data: TaskType) => data.status === status
      )

    
return filterddata;
}

 export const getProgressColor = (progress: number) => {
    switch (progress) {
      case 0:
        return "violet";
      case 1:
        return "orange";
      case 2:
        return "green";
      default:
        return "grey";
    }
  };
  export const taskProgressName = (progress: number) => {
    switch (progress) {
      case 0:
        return "To Do";
      case 1:
        return "In Progress";
      case 2:
        return "Completed";
      default:
        return "Undefined";
    }
  };
