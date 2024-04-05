import { Flex, Box, Text, Button, ButtonGroup, Center, Image } from '@chakra-ui/react'
import React from 'react'
import { EmailIcon } from "@chakra-ui/icons";
import { FcGoogle } from 'react-icons/fc';
import gambar from '../../Assets/00.jpg'

const HomepageCardTop = () => {
    return (
        <div>
            <Flex justifyContent="center" alignItems="center" flexDirection={['column', null, 'row']}>
                <Box p={['40px', null, '30px']} m={['auto', null, '1']} width={['100%', null, '40%']} textAlign="start">
                    <Text fontWeight='bold' fontSize={['3xl', null, '4xl']} mt={['20px', null, '0']}>Rapid prototyping, testing and handoff for modern design teams</Text>
                    <Text fontSize={['sm', null, 'md']} mb={4}>Marvel has everything you need to bring ideas to life and transform how you create digital products with your team. Placing the power of design in everyone's hands.</Text>
                    <ButtonGroup
                        spacing={4}
                        flexDirection={['column', 'row', 'column', 'row']}
                        justifyContent={['center', null, 'center', null]}
                    >
                        <Button
                            leftIcon={<EmailIcon />}
                            borderRadius={"20px"}
                            maxW={'md'}
                            variant={'outline'}
                            fontSize={['sm', null, 'md']}
                            size={['sm', null, 'md']}
                            p={[1, null, 4, null]}
                            m={[1, null, 1, null]}
                            pl={[0, null, 2, null]}
                            minWidth={['100%', null, 'auto']}
                        >
                            Sign up free with email
                        </Button>
                        <Button
                            _hover={{ bg: 'red.500' }}
                            borderRadius={"20px"}
                            leftIcon={<FcGoogle />}
                            maxW={'md'}
                            variant={'outline'}
                            fontSize={['sm', null, 'md']}
                            size={['sm', null, 'md']}
                            p={[0, null, 3, null]}
                            m={[1, null, 1, null]}
                            pl={[0, null, 2, null]}
                            minWidth={['100%', null, 'auto']}

                        >
                            Sign up free with Google
                        </Button>
                    </ButtonGroup>
                </Box>
                <Box p='1' width={['100%', null, '60%']}>
                    <Center>
                        <Image src={gambar} alt='Dan Abramov' width={'90%'} height="90%" />
                    </Center>
                </Box>
            </Flex>
        </div>
    )
}

export default HomepageCardTop