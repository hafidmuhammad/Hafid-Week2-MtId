import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'

const Logo = (props) => {
    return (
        <svg class="c-white display-block" viewBox="0 0 75 32" width="75" height="32" aria-label="Marvel App Logo" data-reactid="755"><path fill="currentColor" d="M58.6,19.4c-25.1-2-45.8,4.1-50.5,6.4c-2.6,1.2-2.8,2.7-2.4,3.5c0.3,0.6,1.6,1,2.9,0.3 c10-5.4,30.1-9.7,50-8.5c0.5,0,0.9-0.4,0.9-0.9C59.5,19.8,59.1,19.4,58.6,19.4L58.6,19.4z M64.8,11.8c-1.1,1.2-2.6,2.1-3.1,1.7 s0-1.9,0-1.9C64.2,10,69,5.9,69,2.7c0-2.9-2.6-3.8-5.3-1.1C61.5,4,59.9,7,59,10.2c-1.4,1.4-3.7,3.2-5.7,3.2c-1.1,0-1.3-0.8-1.2-1.8 c1.7,0,6.5-1.4,6.5-5.4c0-0.7-0.3-1.3-0.8-1.8c-0.5-0.5-1.1-0.7-1.8-0.6c-2.2,0-4.9,2.2-6.3,5.4C49.4,9.1,49,9,48.7,8.8 c0.4-0.8,0.6-1.6,0.9-2.4c0.3-1.7-0.4-2.7-1.7-2.5C47,3.9,46,4.7,45.7,6.4c-0.1,0.9,0.1,1.8,0.4,2.5c-0.6,1.9-3,4.2-3.8,4.1 c-0.8-0.1,0.1-3.4,0.9-5.9c0.5-0.5,0.8-1,1.1-1.7c0.2-0.5,0.1-1.1-0.4-1.3c-1.2-0.5-2.6,0.1-3.1,1.3c-0.3,0.6-0.6,1.2-0.9,1.9 c-0.7,0.8-1.7,1.9-2,1.8c-0.4-0.3,1.1-2.3,0.9-3.5c-0.1-0.9-1-1.6-1.9-1.5c-1.4,0.2-3.1,2.8-3.1,2.8c0.2-0.5,0.3-1,0.4-1.5 c-0.1-1-1.9-1.4-2.8,0.4c-0.6,1.7-1.1,3.5-1.3,5.3c-0.4,0.8-1.9,3.2-3.1,3.3c-1,0.1,0.2-4.3,0.4-4.5c0.5-0.8,1.2-2.5,1.1-3.3 c0-0.4-0.1-0.7-0.4-0.9c-0.3-0.2-0.7-0.3-1-0.2c-0.6,0.2-1.1,0.6-1.4,1.1c-0.4-0.5-1.1-0.8-1.8-0.7c-4,0.4-6.5,7.4-6.2,10.7 c0.2,1.8,1.1,2.9,2.6,2.6c1.7-0.2,3.1-2.8,3.1-2.8s0.4,2.1,2.3,1.9c1.4-0.4,2.6-1.3,3.5-2.5c0,0.1-0.1,0.2-0.1,0.4 c-0.3,1.8,2.6,1.6,2.8,0.2c0.9-6.7,3.1-9.4,3.7-9.4c0.5,0-1.4,3.1-0.3,4.4c0.9,1,2.4,0.2,3.7-0.9c-0.2,0.8-0.3,1.7-0.4,2.5 c-0.1,1.9,0.6,3.4,2.4,3.3c2.4-0.1,4.9-3.1,6.6-5.9c0.4,0.3,0.9,0.5,1.4,0.6c-0.2,0.7-0.2,1.4-0.2,2c0.1,2.2,1.6,3,3.4,2.9 c2-0.1,4.4-1.6,6-3.1c0,0.1,0,0.2-0.1,0.2c-0.1,1.1,0.1,3,1.6,3.1c1.7,0.1,4.7-1.6,6.2-3.5C67,12,65.7,10.8,64.8,11.8L64.8,11.8 L64.8,11.8z M66.4,2.8c0.2,0,0.3,0.2,0.3,0.4c0,1.9-4.6,5.8-4.6,5.8S65.1,2.8,66.4,2.8L66.4,2.8z M55.2,6.7c0.2,0,0.3,0,0.4,0.2 s0.1,0.3,0.1,0.4c0,1.1-1.4,1.9-3,1.9C53.6,7.9,54.5,6.7,55.2,6.7L55.2,6.7z M24.2,9.6c-0.1,1.1-2.1,6.2-3.1,6.2 c-1.3,0.1,0.7-7.1,2.8-7.1C24.3,8.7,24.3,9,24.2,9.6L24.2,9.6z M7.3,11c1.3,0-1.1,6.7-0.8,9.6s3.5,2.1,3.3,0.4 C9.4,18.1,11.4,9,13.3,9c1.4,0-1.6,6.2-1,10.1c0.4,2.5,3.8,1.8,3.4,0.1c-1.1-5.1,2.5-10,2-13.6c-0.2-1.5-1.1-2.3-2-2.3 c-3.2,0-5.8,6.6-5.8,6.6S10.3,6.2,7.6,6C3.8,5.8-0.1,15.4,0,24.1c0.1,2.8,3.5,2.3,3.3,0.1C3.1,20.3,5.3,11,7.3,11L7.3,11z" data-reactid="756"></path></svg>
    )
}

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'bold'} fontSize={'sm'} mb={2}>
            {children}
        </Text>
    )
}

const FooterLink = ({ href, children }) => {
    return (
        <Box
            as="a"
            href={href}
            _hover={{ color: 'white' }}
            fontSize="xs"
            fontWeight="normal"
            mb={1}
            transition="color 0.3s"
        >
            {children}
        </Box>
    )
}

const FooterComponen = () => {
    return (
        <Box
            bg={useColorModeValue('black', 'gray.900')}
            color={useColorModeValue('gray.700', 'white')}
            top="0"
            width="100%"
        >
            <Container as={Stack} maxW={'5xl'} py={4}>
                <SimpleGrid
                    templateColumns={{
                        base: '1fr 1fr',
                        sm: '1fr 1fr 1fr',
                        md: '1fr 1fr 1fr 1fr 1fr 1fr'
                    }}
                    spacing={8}>
                    <Stack spacing={10}>
                        <Box>
                            <Logo color={useColorModeValue('white')} />
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Platform</ListHeader>
                        <FooterLink href={'#'}>Overview</FooterLink>
                        <FooterLink href={'#'}>Enterprise</FooterLink>
                        <FooterLink href={'#'}>Ballpark - User research for teams</FooterLink>
                        <FooterLink href={'#'}>Mobile Apps</FooterLink>
                        <FooterLink href={'#'}>Pricing</FooterLink>
                        <FooterLink href={'#'}>Developer API</FooterLink>
                        <FooterLink href={'#'}>Marvel vs InVision</FooterLink>
                        <FooterLink href={'#'}>Marvel vs Zeplin</FooterLink>
                        <FooterLink href={'#'}>Marvel For Finance</FooterLink>
                        <FooterLink href={'#'}>Marvel For Consultancies</FooterLink>
                        <FooterLink href={'#'}>Marvel For Agencies</FooterLink>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Features</ListHeader>
                        <FooterLink href={'#'}>Design</FooterLink>
                        <FooterLink href={'#'}>Wireframing</FooterLink>
                        <FooterLink href={'#'}>Prototyping</FooterLink>
                        <FooterLink href={'#'}>Handoff</FooterLink>
                        <FooterLink href={'#'}>User Testing</FooterLink>
                        <FooterLink href={'#'}>Collaboration</FooterLink>
                        <FooterLink href={'#'}>Integration</FooterLink>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <FooterLink href={'#'}>Help Center</FooterLink>
                        <FooterLink href={'#'}>Terms of Service</FooterLink>
                        <FooterLink href={'#'}>Privacy</FooterLink>
                        <FooterLink href={'#'}>Status</FooterLink>
                        <FooterLink href={'#'}>Security</FooterLink>
                        <FooterLink href={'#'}>Resources</FooterLink>
                        <FooterLink href={'#'}>Design Glossary</FooterLink>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <FooterLink href={'#'}>Blog</FooterLink>
                        <FooterLink href={'#'}>About Us</FooterLink>
                        <FooterLink href={'#'}>Jobs</FooterLink>
                        <FooterLink href={'#'}>Contact Us</FooterLink>
                        <FooterLink href={'#'}>Customer Stories</FooterLink>
                        <FooterLink href={'#'}>Labs</FooterLink>
                        <FooterLink href={'#'}>Careers</FooterLink>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Follow Us</ListHeader>
                        <FooterLink href={'#'}>Facebook</FooterLink>
                        <FooterLink href={'#'}>Twitter</FooterLink>
                        <FooterLink href={'#'}>Dribbble</FooterLink>
                        <FooterLink href={'#'}>Instagram</FooterLink>
                        <FooterLink href={'#'}>LinkedIn</FooterLink>
                    </Stack>

                </SimpleGrid>
            </Container>
        </Box>
    )
}

export default FooterComponen