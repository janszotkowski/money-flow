import React from 'react';
import { IconName, Icons } from './IconResources';

type IconProps = Partial<{
    size: number;
}> & {
    iconName: IconName;
};

export const Icon: React.FC<IconProps> = ({size = 24, ...props}: IconProps): React.ReactElement => {
    const SvgIcon = Icons[props.iconName];

    return (
        <SvgIcon
            width={`${size}px`}
            height={`${size}px`}
        />
    );
};
