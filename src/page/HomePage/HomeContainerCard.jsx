import { Flex, Box, Image, Text, Button, Center } from '@chakra-ui/react'
import baru from '../../Assets/05.png'
import baru1 from '../../Assets/07.jpg'

import React from 'react'

const HomeContainerCard = () => {
    return (
        <div>
            <div>
                <Flex flexDirection={['column', null, 'row']} alignItems={['center', null, 'flex-start']} mt={[4, null, 0]}>
                    <Box mr={[0, null, '40px']} mb={['20px', null, 0]}>
                        <Center>
                            <Image src={baru} alt='Dan Abramov' sizes='80%' />
                        </Center>
                    </Box>
                    <Box p={'40px'} width={['100%', null, '50%']} mt={[0, null, 4]}>
                        <Text fontWeight='bold' fontSize='xl' mb={4}>The world's most innovative companies use Marvel everyday to scale design</Text>
                        <Text mb={2}>
                            The digital products, from around the world, that you know and love have been built with Marvel.
                        </Text>
                        <Text mb={2}>
                            Our customers range from Fortune 100 companies, to startups and schools - all using our online design platform to ideate fast, collaborate and optimise prototypes before development.
                        </Text>

                        <Button
                            borderRadius={'15px'}
                            fontSize={'sm'}
                            Width={'30%'}
                            _hover={{
                                bg: 'blue.500',
                                color: 'white',
                            }}>
                            Sign up free with email
                        </Button>
                    </Box>
                </Flex>
            </div>
            <div>
                <Flex flexDirection={['column', null, 'row']} mt={[4, null, 0]}>
                    <Box p={'40px'} width={['100%', null, '50%']} mt={[0, null, 4]}>
                        <Text fontWeight='bold' fontSize='xl' mb={4}>The world's most innovative companies use Marvel everyday to scale design</Text>
                        <Text mb={2}>
                            Scale Design with Marvel Enterprise 3
                        </Text>
                        <Text mb={2}>
                            Built to help large teams create amazing products at scale. Marvel Enterprise 3 is built on blazing fast technology with features that focus on helping large teams make design more productive.
                        </Text>

                        <Button
                            borderRadius={'15px'}
                            fontSize={'sm'}
                            minWidth={'30%'}
                            _hover={{
                                bg: 'blue.500',
                                color: 'white',
                            }}>
                            Learn more
                        </Button>
                    </Box>
                    <Box mr={[0, null, '40px']} mb={['20px', null, 0]}>
                        <Center>
                            <Image src={baru1} alt='Dan Abramov' sizes='80%' />
                        </Center>
                    </Box>
                </Flex>
            </div></div>
    )
}

export default HomeContainerCard