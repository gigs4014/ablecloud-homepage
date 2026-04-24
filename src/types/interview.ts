export interface InterviewListData {
  img: JSX.Element;
  text: string;
}

export interface InterviewHistoryData {
  category: string;
  data: InterviewListData[]
}
