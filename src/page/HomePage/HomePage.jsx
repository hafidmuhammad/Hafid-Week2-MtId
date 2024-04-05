import React from 'react'



import Homepagelogo from './Homepagelogo'
import HomePageTab from './HomePageTab'
import HomepageCardTop from './HomepageCardTop'
import HomeCardCenter from './HomeCardCenter'
import HomeContainerCard from './HomeContainerCard'
import { Box, Flex } from '@chakra-ui/react'

const HomePage = () => {
    return (
        <Flex direction="column" alignItems="center">
            <Box mb={8}>
                <HomepageCardTop />
            </Box>
            <Box mb={8}>
                <Homepagelogo />
            </Box>
            <Box mb={8}>
                <HomeCardCenter />
            </Box>
            <Box mb={15}>
                <HomePageTab />
            </Box>
            <Box mb={8}>
                <HomeContainerCard />
            </Box>
        </Flex>
    )
}

export default HomePage