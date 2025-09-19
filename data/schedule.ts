export interface ScheduleWeek {
  week: number
  lectureTopic: string
  seminar: string
  assignment: string
}

export const scheduleData: ScheduleWeek[] = [
  {
    week: 1,
    lectureTopic: "Introduction to Python & Setup",
    seminar: "Lab calculator workshop",
    assignment: ""
  },
  {
    week: 2,
    lectureTopic: "Strings & DNA Analysis",
    seminar: "Sequence Analysis Workshop",
    assignment: ""
  },
  {
    week: 3,
    lectureTopic: "Object Oriented Programming and intro to Pandas",
    seminar: "Depmap Data Workshop",
    assignment: "Python Basics Test"
  },
  {
    week: 4,
    lectureTopic: "Linear Regression and Data Visualisation",
    seminar: "Matplotlin Seaborn Workshop",
    assignment: "DNA Analysis Project"
  },
  {
    week: 5,
    lectureTopic: "Image Analysis and Statistics with Python",
    seminar: "Image Analysis Workshop",
    assignment: "Final Project"
  }
]