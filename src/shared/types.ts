export interface BlogType {
  id:number;
  title: string;
  cover: string;
  description: string;
  content: string;
}
export interface ChallengeType {
  date: string;
  name: string;
  grade: string;
}
export interface MemberType {
  picture: string;
  name: string;
  description: string;
  handle: string;
}