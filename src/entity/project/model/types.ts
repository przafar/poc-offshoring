export interface IProject {
  name: string;
  type: string;
  revenue: number;
  fromDt: string;
  endDt: string;
  days: number;
  PM: string;
  planPercent: number;
  actualPercent: number;
  status: "Delayed" | "Finish" | "Ongoing" | "Planned";
}
