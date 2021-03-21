export interface IMediaQueries {
    minWidth: number;
    src: string;
}

export interface IFocal {
    x: string,
    y: string,
}

export interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    focal?: IFocal;
    mediaQueries?: IMediaQueries[];
    onLoadFade?: boolean;
    round?: boolean;
}