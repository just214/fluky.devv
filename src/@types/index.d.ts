/// <reference types="styled-components/cssprop" />

// Add support for css prop
declare namespace React {
  interface DOMAttributes<T> {
    css?: any;
  }
}

declare module "*.svg" {
  const content: any;
  export default content;
}

type DifficultyOptions = "Beginner" | "Advanced"
declare interface Question {
  Question: string;
  Type: string;
  Difficulty: DifficultyOptions;
  Category: string;
  Option1: string;
  Option2: string;
  Option3?: string;
  Option4?: string
  Answer: string;
  Explanation: string;
}
