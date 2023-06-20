import { PortableTextBlock } from "sanity";

export type Hero={
    _id: string;
    createdAt: Date;
    heroSectionText: string;
    heroSectionImages:string[];
    content: PortableTextBlock[];
}