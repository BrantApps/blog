export interface Technology {
  type:
    | "node"
    | "java"
    | "android"
    | "react-native"
    | "kotlin"
    | "react"
    | "javascript"
    | "typescript"
    | "gradle"
    | "rxjava"
  primary: "yes" | "no"
}

export interface Skill {
  name: string
  primary: "yes" | "no"
}
