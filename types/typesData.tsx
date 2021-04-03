import { IIconProps } from "./types";

export interface IInternshipData{
    heading: string;
    html: string;
    html2: string;
    html3: string;
    html4: string;
}

export interface IKnowledge{
    type: IIconProps['type'];
    title: string;
    number: string | number;
    html: string;
    id: number;
}

export interface IKnowledgeData{
    frontend: IKnowledge[];
    backend: IKnowledge[];
}

export interface INavLinks{
    target: string;
    label: string;
}

export interface ILogoData{
    src: string;
    alt: string;
    width: string;
    height: string;
}

export interface IStartContainerData{
    heading: string;
    greeting: string;
    preamble: string;
    entryText: string;
    ctaText: string;
    cta: {
        label: string;
        icon: IIconProps['type'];
        href: string;
    };
    technologies:{
        heading: string;
        html: string;
        html2: string;
    };
    internship: IInternshipData;
}

