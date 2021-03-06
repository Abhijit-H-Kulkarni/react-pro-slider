import React from 'react';
export interface Props {
    children?: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
    active?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    firstchild?: boolean;
    popperarrow?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default _default;
