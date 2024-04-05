import { Box, Flex, Text, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as Logo } from '../Assets/crown.svg'
import { useNavigate } from 'react-router-dom';


// Komponen navigasi utama
const NavComponen = (props) => {
    // State untuk mengatur keadaan buka/tutup menu
    const [isOpen, setIsOpen] = React.useState(false);

    // Fungsi untuk mengubah keadaan buka/tutup menu
    const toggle = () => setIsOpen(!isOpen);

    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <NavBarContainer {...props}>
            <Logo onClick={handleLogoClick} /> {/* Logo */}
            <MenuToggle toggle={toggle} isOpen={isOpen} /> {/* Tombol menu toggle */}
            <MenuLinks isOpen={isOpen} /> {/* Tautan menu */}
        </NavBarContainer>
    );
};

// Ikon tombol tutup menu
const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="black"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

// Ikon tombol menu
const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="black"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

// Komponen tombol menu toggle
const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MenuIcon />} {/* Memilih ikon berdasarkan keadaan menu */}
        </Box>
    );
};

// Komponen untuk satu item menu
const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };

    return (
        <Text
            as="button"
            display="block"
            _hover={{ color: "blue.500" }}
            py={1}
            px={2}
            cursor="pointer"
            onClick={handleClick}
            {...rest}
        >
            {children}
        </Text>
    );
};

// Komponen untuk menampilkan tautan menu
// Wadah untuk komponen navigasi utama
const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={2}
            p={8}
            bg={["transparent"]}
            color={["cyan.500"]}
            {...props}
        >
            {children}
        </Flex>
    );
};

// Komponen untuk menampilkan tautan menu
const MenuLinks = ({ isOpen }) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={2}
                align="center"
                color={["black"]}
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[3, 3, 0, 0]}

            >
                {/* Tautan menu */}
                <MenuItem to="/features">Feature</MenuItem>
                <MenuItem to="/blogAndmore">Blog and more </MenuItem>
                <MenuItem to="/example">Examples</MenuItem>
                <MenuItem to="/enterprise">Enterprise</MenuItem>
                <MenuItem to="/pricing">Pricing</MenuItem>
                <MenuItem to="/Sigin">Sign in</MenuItem>
                <MenuItem to="/signup" isLast>
                    <Button
                        size="sm"
                        borderRadius={"20px"}
                        colorScheme='blue'
                    >
                        Sign Up Free
                    </Button>
                </MenuItem>
            </Stack>
        </Box>
    );
};


export default NavComponen; // Ekspor komponen navigasi utama
