import { Container,Image,Flex, Box,Text } from "@chakra-ui/react"
import blackLogo from "../Media/blackLogo.png"
export const Footer=()=>{


    return <>
    <Container mt={8}  maxW='100%' bg='#F8F8F8' p={0}>
        <Flex justifyContent='space-around'>
        <Image w='15%' mt={0} src={blackLogo}></Image>
            <Box mt={6}>
                <Text fontSize='15px' fontFamily='Okra, Helvetica, sans-serif;'>ABOUT DAVAT</Text>
                <Text fontFamily='Okra, Helvetica, sans-serif;' fontSize='13px' color='#4F4F4F'>Blog</Text>
                <Text fontFamily='Okra, Helvetica, sans-serif;' fontSize='13px' color='#4F4F4F'>Work With Us</Text>
                <Text fontFamily='Okra, Helvetica, sans-serif;' fontSize='13px' color='#4F4F4F'>Investor Relations</Text>
                <Text fontFamily='Okra, Helvetica, sans-serif;' fontSize='13px' color='#4F4F4F'>Report Fraud</Text>
                <Text fontFamily='Okra, Helvetica, sans-serif;' fontSize='13px' color='#4F4F4F'>Contact Us</Text>
            </Box>
            <Box mt={6}>
                <Text fontSize='15px'  fontFamily='Okra, Helvetica, sans-serif;'>FOR RESTAURANTS</Text>
                <Text fontFamily='Okra, Helvetica, sans-serif;' fontSize='13px' color='#4F4F4F'>Partner With Us</Text>
                <Text fontFamily='Okra, Helvetica, sans-serif;' fontSize='13px' color='#4F4F4F'>Apps For You</Text>
                <Text fontSize='15px'  fontFamily='Okra, Helvetica, sans-serif;'>FOR ENTERPRISES</Text>
                <Text fontFamily='Okra, Helvetica, sans-serif;' fontSize='13px' color='#4F4F4F'>Davat For Work</Text>
            </Box>
            <Box mt={6}>
                <Text fontSize='15px' fontFamily='Okra, Helvetica, sans-serif;'>LEARN MORE</Text>
                <Text fontFamily='Okra, Helvetica, sans-serif;' fontSize='13px' color='#4F4F4F'>Privacy</Text>
                <Text fontFamily='Okra, Helvetica, sans-serif;' fontSize='13px' color='#4F4F4F'>Security</Text>
                <Text fontFamily='Okra, Helvetica, sans-serif;' fontSize='13px' color='#4F4F4F'>Terms</Text>
                <Text fontFamily='Okra, Helvetica, sans-serif;' fontSize='13px' color='#4F4F4F'>Sitemap</Text>
            </Box>
        </Flex>
    </Container>
    </>
}