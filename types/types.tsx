export interface IIconProps {
    type: "arrowNext"
    | "arrowPrev"
    | "chevronNext"
    | "chevronDown"
    | "code"
    | "css"
    | "django"
    | "frojd"
    | "github"
    | "html"
    | "javascript"
    | "linkedIn"
    | "menu"
    | "moon"
    | "mysql"
    | "nextjs"
    | "nodejs"
    | "npm"
    | "php"
    | "postgresql"
    | "python"
    | "react"
    | "reactSpring"
    | "redux"
    | "sass"
    | "typescript"
    | "wagtail"
    | "wordpress";
    color?: "White" | "Black" | "Yellow" | "Primary";
    modifier?: any[];
    hoverEffect?: boolean;
}

export interface IMediaQueries {
    minWidth: number;
    src: string;
}

export interface IFocal {
    x: string,
    y: string,
}

export interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    mediaQueries?: IMediaQueries[];
    onLoadFade?: boolean;
    round?: boolean;
    pTHeight?: number;
    modifier?: any[];
}
