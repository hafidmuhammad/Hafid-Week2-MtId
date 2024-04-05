import { Container, Heading, Text, Center, Button } from '@chakra-ui/react'
import React from 'react'

const HomeCardCenter = () => {
    return (
        <div>
            <Container maxW="600px" textAlign="center" mt={5}>
                <Heading size="lg" mb={4}>
                    Your design process, in one place
                </Heading>
                <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} lineHeight="200%">
                    Wireframe, design and prototype fast with our intuitive design and
                    prototyping tools. Instantly generate design specs and connect
                    integrations that power up your workflow. From low to high-fidelity,
                    Marvel supports you every step of the way.
                </Text>
                <Center>
                    <Button
                        mt={5}
                        px={2}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        width={'30%'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}>
                        Find out more
                    </Button>
                </Center>
            </Container>
        </div>
    )
}

export default HomeCardCenter