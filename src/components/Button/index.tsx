import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

interface IButton {
    label: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ label, onClick }: IButton) => {
    const [loading, setLoading] = React.useState(false);
    function handleClick() {
        setLoading(true);
    }

    return (
        <Box>
            <FormControlLabel
                label={'Loading'}
                sx={{
                    display: 'none',
                }}
                control={
                    <Switch
                        checked={loading}
                        onChange={() => setLoading(!loading)}
                        name="loading"
                        color="primary"
                    />
                }

            />
            <Box sx={{ '& > button': { m: 6 } }}>
                <LoadingButton size="large" onClick={onClick} loading={loading} loadingIndicator="Loading…" variant="contained">
                    <span>{label}</span>
                </LoadingButton>
            </Box>
        </Box>
    );
}

export default Button;