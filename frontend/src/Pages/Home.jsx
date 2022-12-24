import {Container,Image,Input,Text,InputGroup,InputLeftElement, Flex,Box,Link} from "@chakra-ui/react"
import { Navbar } from "../Components/Navbar"
import styles from "./Home.module.css"
import { Footer } from "../Components/Footer"
export const Home=()=>{

    return <>
        <Container maxW='100%'  p={0}>

                <Container maxW='100%' className={styles.back}  p={0} pb={16}>
                    <Navbar/>
                    <Image w='20%'  m='auto' mt={8} src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png'/>
                    <Text mt={6} color='white' fontSize='28px' textAlign='center'>Discover the best food & drinks in Nagpur</Text>
                    <InputGroup w='55%' m='auto'  >
                        <InputLeftElement
                        pointerEvents='none'
                        children=""
                        />
                        <Input   mt={4} bg='white'   type='tel' placeholder='Search for restaurant, cusine or a dish' />
                </InputGroup >
                </Container>

                <Container mt={8}  maxW={['100%','100%','80%','80%']}>
                    <Flex justifyContent='space-around'>
                        
                    <Box borderRadius={7} w={['30%','30%','30%','30%']} h='230px' border='1px solid #E8E8E8'>
                    <Link>
                            <Image style={{'borderRadius':'7px 7px 0px 0px'}} h='70%' w='100%' src='https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'></Image>
                            <Text color='#363636' mt={4} ml={2}>Order Online</Text>
                            <Text color='#4F4F4F' ml={2} fontSize={12}>Stay home and order to your doorestep</Text>
                            </Link>
                        </Box>
                       
                        <Box borderRadius={7}  w={['30%','30%','30%','30%']} h='230px' border='1px solid #E8E8E8'>
                        <Link>
                            <Image style={{'borderRadius':'7px 7px 0px 0px'}} h='70%' w='100%' src='https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'></Image>                        
                            <Text color='#363636' mt={4} ml={2}>Order Online</Text>
                            <Text color='#4F4F4F' ml={2} fontSize={12}>Stay home and order to your doorestep</Text>
                            </Link>
                        </Box>
                        <Box borderRadius={7}  w={['30%','30%','30%','30%']} h='230px' border='1px solid #E8E8E8'>
                        <Link>
                            <Image style={{'borderRadius':'7px 7px 0px 0px'}} h='70%' w='100%' src='https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'></Image>                        
                            <Text color='#363636' ml={2} mt={4}>Order Online</Text>
                            <Text color='#4F4F4F' ml={2} fontSize={12}>Stay home and order to your doorestep</Text>
                            </Link>
                        </Box>
                    </Flex>

                </Container >
                <Footer/>
    </Container>
    </>
}