import { Box, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { MnestixLogo } from 'components/basics/MnestixLogo';
import React from 'react';

export function HeaderLogo() {
    const theme = useTheme();
    const navigate = useRouter();

    const goToHome = () => {
        navigate.push('/');
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (!(event.key === 'Enter')) {
            return;
        }
        goToHome();
    };

    return (
        <Box
            data-testid="header-logo"
            onClick={goToHome}
            onKeyDown={handleKeyDown}
            sx={{ height: '100%', cursor: 'pointer' }}
            aria-label="Go to home"
            role="button"
            tabIndex={0}
        >
            {theme?.productLogo?.logo ? (
                <img height="100%" src={theme.productLogo.logo} alt={'default Mnestix logo'} />
            ) : (
                <MnestixLogo />
            )}
        </Box>
    );
}
