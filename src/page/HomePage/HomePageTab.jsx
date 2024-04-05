import React from 'react'
import Gambar1 from '../../Assets/01.jpg'
import Gambar2 from '../../Assets/02.jpg'
import Gambar3 from '../../Assets/03.jpg'
import Gambar4 from '../../Assets/06.jpg'
import Gambar5 from '../../Assets/04.jpg'
import { Container, Tabs, TabList, Tab, TabPanel, TabPanels, Flex, Text, Image, Center } from '@chakra-ui/react'

const HomePageTab = () => {
    return (
        <div>
            <Container maxW="6xl" textAlign="center" mt={'3xl'} my={10} p={'30px'}>
                <Tabs isFitted variant='enclosed' orientation="vertical">
                    <TabList mb='1em'>
                        <Tab>
                            <Flex flexDirection="column" textAlign={'start'}>
                                <Text fontWeight="bold" fontSize="sm">Design and Wireframe</Text>
                                <Text fontSize="xs">Deskripsi untuk Design and Wireframe</Text>
                            </Flex>
                        </Tab>
                        <Tab>
                            <Flex flexDirection="column" textAlign={'start'}>
                                <Text fontWeight="bold" fontSize="sm">Prototype</Text>
                                <Text fontSize="xs">Deskripsi untuk Design and Wireframe</Text>
                            </Flex>
                        </Tab>
                        <Tab>
                            <Flex flexDirection="column" textAlign={'start'}>
                                <Text fontWeight="bold" fontSize="sm">Handoff</Text>
                                <Text fontSize="xs">Deskripsi untuk Design and Wireframe</Text>
                            </Flex>
                        </Tab>
                        <Tab>
                            <Flex flexDirection="column" textAlign={'start'}>
                                <Text fontWeight="bold" fontSize="sm">User Testing</Text>
                                <Text fontSize="xs">Deskripsi untuk Design and Wireframe</Text>
                            </Flex>
                        </Tab>
                        <Tab>
                            <Flex flexDirection="column" textAlign={'start'}>
                                <Text fontWeight="bold" fontSize="sm">Collaboration</Text>
                                <Text fontSize="xs">Deskripsi untuk Design and Wireframe</Text>
                            </Flex>
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Center>
                                <Image src={Gambar1} alt='Design and Wireframe' width={'100%'} height="100%" />
                            </Center>
                        </TabPanel>
                        <TabPanel>
                            <Center>
                                <Image src={Gambar2} alt='Prototype' width={'100%'} height="100%" />
                            </Center>
                        </TabPanel>
                        <TabPanel>
                            <Center>
                                <Image src={Gambar3} alt='Handof' width={'100%'} height="100%" />
                            </Center>
                        </TabPanel>
                        <TabPanel>
                            <Center>
                                <Image src={Gambar4} alt='User Testing' width={'100%'} height="100%" />
                            </Center>
                        </TabPanel>
                        <TabPanel>
                            <Center>
                                <Image src={Gambar5} alt='Collaboration' width={'100%'} height="100%" />
                            </Center>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </div>
    )
}

export default HomePageTab