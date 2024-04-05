import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const HeaderLabelComponen = () => {
    return (
        <div>
            <center>
                <Box bg="purple" w="100%" p={4} color={"white"} fontSize={"12px"}>
                    Introducing Ballpark - Simple surveys and user testing for prototype
                    <Button
                        marginLeft={"10px"}
                        color={"white"}
                        borderRadius={"20px"}
                        fontSize={"9px"}
                        height={"24px"}
                        width={"80px"}
                        border={"2px"}
                        borderColor={"white"}
                        bg={"transparent"}
                        _hover={{ color: "black" }}
                    >
                        Tray For Free
                    </Button>
                </Box>
            </center>
        </div>
    )
}

export default HeaderLabelComponen