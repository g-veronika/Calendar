import * as React from 'react';

export const ChevronLeftIcon = ({
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
        <path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41l14 6L-6 6 6 6 1.41-1.4"/>
    </svg>
}