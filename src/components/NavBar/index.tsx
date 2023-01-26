import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { usePokemons } from '../../hooks/usePokemons';
import pokemonImageLogo from '../../assets/pokemon.svg'


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    const { pokemons, setPokemons, pokemonsToRender, setPokemonsToRender } = usePokemons()
    const [pokemonsInput, setPokemonsInput] = React.useState('');

    React.useEffect(() => {

        const filteredPokemons = () => pokemons.filter((pokemon: any) => pokemon.name.toLowerCase().includes(pokemonsInput.toLocaleLowerCase()))

        setPokemonsToRender(filteredPokemons)

    }, [pokemonsInput])
    return (
        <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
            <AppBar position="static" sx={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link to="/">
                            <Box component="img" src={pokemonImageLogo} width="15rem" />
                        </Link>
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            onChange={(e) => setPokemonsInput(e.target.value)}
                            placeholder="Pesquisando…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={pokemonsInput}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box >
    );
};