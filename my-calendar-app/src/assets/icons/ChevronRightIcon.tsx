import * as React from 'react';

export const ChevronRightIcon = ({
    height = "24px",
    width = "24px",
    color = "black",
    secondaryColor,
    ...props
}: React.SVGProps<SVGSVGElement> & {secondaryColor?: string}) => {
    <svg
        xmlns="http://www.w3.org/200/svg"
        height={height}
        viewBox="0 0 24 24"
        fill={secondaryColor || color}
        {...props}
        >
        <path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59l"/>
    </svg>
}