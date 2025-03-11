import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';

export interface MenuListItemProps {
    icon?: React.ReactElement;
    to?: string;
    external?: boolean;
    label?: React.ReactElement | string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
}

export function MenuListItem(props: MenuListItemProps) {
    const content = (
        <>
            {props.icon && <ListItemIcon>{props.icon}</ListItemIcon>}
            {props.label && <ListItemText data-testid="sidebar-button">{props.label}</ListItemText>}
        </>
    );

    return props.to ? (
        <ListItemButton
            component={!props.external ? Link : 'a'}
            href={props.to}
            target={props.target}
            onClick={props.onClick}
            // not sure if any of this is actually needed; needs testing
            onKeyDown={props.onKeyDown}
        >
            {content}
        </ListItemButton>
    ) : (
        <ListItemButton onClick={props.onClick} onKeyDown={props.onKeyDown}>
            {content}
        </ListItemButton>
    );
}
