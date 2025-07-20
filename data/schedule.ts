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
    seminar: "-",
    assignment: "Exercise Set 1"
  },
  {
    week: 2,
    lectureTopic: "Strings & DNA Analysis",
    seminar: "Sequence Analysis Workshop",
    assignment: "ORF Finder Project"
  },
  {
    week: 3,
    lectureTopic: "Functions & Dictionaries",
    seminar: "Codon Table Implementation",
    assignment: "Translation Tool"
  },
  {
    week: 4,
    lectureTopic: "Lists & File I/O",
    seminar: "FASTA Processing Lab",
    assignment: "Multi-file Parser"
  },
  {
    week: 5,
    lectureTopic: "Data Analysis & Visualization",
    seminar: "Final Project Workshop",
    assignment: "Final Project"
  }
]