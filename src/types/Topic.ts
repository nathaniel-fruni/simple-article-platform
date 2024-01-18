import type {Article} from "@/types/Article";

export interface Topic {
    id: number,
    name: string,
    slug: string,
    articles: Article[]
}