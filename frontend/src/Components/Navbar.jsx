import { Container, Flex,Box, Link } from "@chakra-ui/react"

export const Navbar=()=>{
    return <Container maxW='100%' pt={4} pb={4} color='white'>
        <Flex >
            <Box w={['','30%','40%','50%']}  textAlign='center'>
Get the app
            </Box>
            <Box w={['','70%','60%','50%']} >
                <Flex  justifyContent='space-evenly'>
                <Link>Investor Relations</Link>
                <Link>Add restaurant</Link>
                <Link>Log in</Link>
                <Link>Sign UP</Link>
                </Flex>
                
            </Box>
        </Flex>
    </Container>
}