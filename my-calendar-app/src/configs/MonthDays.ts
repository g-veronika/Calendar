import { Date } from "../../types";
     
function generateDates():Date[] {
    let dates: Date[]=[];

    for(let i=1; i<29; i++){
        let date:Date = {day: i};
        dates.push(date);
    }
    return dates;
}

export const monthDates: Date[] = generateDates();