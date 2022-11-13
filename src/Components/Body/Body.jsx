import React from 'react';
import { Box, Heading, Text, Button, Image, AspectRatio, UnorderedList, ListItem, ListIcon } from '@chakra-ui/react';
import { GiCheckMark, GiTireIronCross } from 'react-icons/gi';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <>
            {/* Section 1 */}

            <Box w={'100%'} m={'auto'} mt={'6%'} >
                <Box w={{ base: '85%', sm: '85%', md: '85%', lg: '85%', xl: '60%', '2xl': '60%' }} m={'auto'} textAlign={'center!important'}>
                    <Heading as='h1' fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#241c15'} letterSpacing={'-.0625rem'} fontSize={{ base: '2.5rem', sm: '2.5rem', md: '2.5rem', lg: '2.5rem', xl: '3rem', '2xl': '3rem' }} lineHeight={{ base: '35px', sm: '35px', md: '35px', lg: '35px', xl: '40px', '2xl': '40px' }} marginBottom={'10px'}>Turn Emails into Revenue</Heading>
                    <Text fontSize={{ base: '1.125rem', sm: '1.125rem', md: '1.125rem', lg: '1.5rem', xl: '1.5rem', '2xl': '1.5rem' }} marginBottom={'20px'}>Win new customers with the #1 email marketing and automations brand* that recommends ways to get more opens, clicks, and sales.</Text>
                   <Link to={'/signup'}><Button border={'1.60px solid black'} fontSize={'14px'} borderRadius={'2em'} px={'24px'} py={'22px'} bg={'#ffe01b'} _hover={{ bg: '#ffe01b', boxShadow: '0px 6px 0px -2px rgba(0,0,0,1)', transform: 'translateY(0)', transition: 'transform .3s cubic-bezier(.5,2.5,.7,.7),box-shadow .3s cubic-bezier(.5,2.5,.7,.7)' }} cursor={'pointer'}>Sign Up</Button></Link>
                </Box>
            </Box>

            {/* Section 2 */}

            <Box w={'100%'} mt={'5%'} display={'grid'} gridTemplateRows={'auto'} gridTemplateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(4,1fr)', xl: 'repeat(4,1fr)', '2xl': 'repeat(4,1fr)' }}>

                <Box cursor={'pointer'}>
                    <Heading as='h2' marginBottom={'5px'} textAlign={'center'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} fontSize={'1rem'} textDecoration={'underline'}>Convert with Automations</Heading>
                    <Box overflow={'hidden'} margin={'0 auto'}>
                        <Image src='https://eep.io/images/yzco4xsimv0y/33f3mgIWbzKjIpIRJi2f5v/6bd36bba38b7f6a94d587605ab9a7d75/Desktop_Feature_Cards_1_Automations.jpeg?w=630&fm=webp&q=80' w={'100%'} h={'auto'} transition={'0.3s all ease-in-out'} _hover={{ transform: 'scale(1.05)', transformOrigin: 'center' }} />
                    </Box>
                    <Box bg={'#D99536'} p={'10%'} fontSize={'1rem'} lineHeight={'1.75rem'} color={'#241c15'} fontWeight={'500'} fontFamily={'Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif'}>
                        <Text marginBottom={'20px'}>Send the right message at the right time to convert more.</Text>
                        <Button border={'1px solid black'} fontWeight={'500'} fontSize={'14px'} borderRadius={'2em'} px={'24px'} py={'22px'} bg={'transparent'} _hover={{ bg: 'transparent', boxShadow: '0px 6px 0px -2px rgba(0,0,0,1)', transform: 'translateY(0)', transition: 'transform .3s cubic-bezier(.5,2.5,.7,.7),box-shadow .3s cubic-bezier(.5,2.5,.7,.7)' }} cursor={'pointer'}>Learn More</Button>
                    </Box>
                </Box>

                <Box cursor={'pointer'}>
                    <Heading as='h2' marginBottom={'5px'} textAlign={'center'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} fontSize={'1rem'} textDecoration={'underline'}>Optimize with AI & Analytics</Heading>
                    <Box overflow={'hidden'} margin={'0 auto'}>
                        <Image src='https://eep.io/images/yzco4xsimv0y/hBcOt3RZ5DOhMJD2Hi2Z2/96b28d17c45e9376731ad825b002b0ff/Desktop_Feature_Cards_2_Analytics.png?w=630&fm=webp&q=80' w={'100%'} h={'auto'} transition={'0.3s all ease-in-out'} _hover={{ transform: 'scale(1.05)', transformOrigin: 'center' }} />
                    </Box>
                    <Box bg={'#E7B75F'} p={'10%'} fontSize={'1rem'} lineHeight={'1.75rem'} color={'#241c15'} fontWeight={'500'} fontFamily={'Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif'}>
                        <Text marginBottom={'20px'}>Get AI-assisted suggestions to help make your content more.</Text>
                        <Button border={'1px solid black'} fontWeight={'500'} fontSize={'14px'} borderRadius={'2em'} px={'24px'} py={'22px'} bg={'transparent'} _hover={{ bg: 'transparent', boxShadow: '0px 6px 0px -2px rgba(0,0,0,1)', transform: 'translateY(0)', transition: 'transform .3s cubic-bezier(.5,2.5,.7,.7),box-shadow .3s cubic-bezier(.5,2.5,.7,.7)' }} cursor={'pointer'}>Learn More</Button>
                    </Box>
                </Box>

                <Box cursor={'pointer'}>
                    <Heading as='h2' marginBottom={'5px'} textAlign={'center'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} fontSize={'1rem'} textDecoration={'underline'}>Target with Segmentation</Heading>
                    <Box overflow={'hidden'} margin={'0 auto'}>
                        <Image src='https://eep.io/images/yzco4xsimv0y/5xqzo6y8Z7anw9VQXJarpj/5f91182af7bf16ecc34b487a619d0a54/Desktop_Feature_Cards_3_Segmentation.jpeg?w=630&fm=webp&q=80' w={'100%'} h={'auto'} transition={'0.3s all ease-in-out'} _hover={{ transform: 'scale(1.05)', transformOrigin: 'center' }} />
                    </Box>
                    <Box bg={'#FDF8EA'} p={'10%'} fontSize={'1rem'} lineHeight={'1.75rem'} color={'#241c15'} fontWeight={'500'} fontFamily={'Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif'}>
                        <Text marginBottom={'20px'}>Boost customer loyalty by predicting the right ones to target.</Text>
                        <Button border={'1px solid black'} fontWeight={'500'} fontSize={'14px'} borderRadius={'2em'} px={'24px'} py={'22px'} bg={'transparent'} _hover={{ bg: 'transparent', boxShadow: '0px 6px 0px -2px rgba(0,0,0,1)', transform: 'translateY(0)', transition: 'transform .3s cubic-bezier(.5,2.5,.7,.7),box-shadow .3s cubic-bezier(.5,2.5,.7,.7)' }} cursor={'pointer'}>Learn More</Button>
                    </Box>
                </Box>

                <Box cursor={'pointer'}>
                    <Heading as='h2' marginBottom={'5px'} textAlign={'center'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} fontSize={'1rem'} textDecoration={'underline'}>Sync with Integrations</Heading>
                    <Box overflow={'hidden'} margin={'0 auto'}>
                        <Image src='https://eep.io/images/yzco4xsimv0y/lsHRpmOI81ZcFS1Yld0Bs/1e2812587cd0f3089061bd4b513fd6d0/Desktop_Feature_Cards_4_Integrations.png?w=630&fm=webp&q=80' w={'100%'} h={'auto'} transition={'0.3s all ease-in-out'} _hover={{ transform: 'scale(1.05)', transformOrigin: 'center' }} />
                    </Box>
                    <Box bg={'#FFFFFF'} p={'10%'} fontSize={'1rem'} lineHeight={'1.75rem'} color={'#241c15'} fontWeight={'500'} fontFamily={'Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif'}>
                        <Text marginBottom={'20px'}>Connect more tools, get more data, save time, and make better.</Text>
                        <Button border={'1px solid black'} fontWeight={'500'} fontSize={'14px'} borderRadius={'2em'} px={'24px'} py={'22px'} bg={'transparent'} _hover={{ bg: 'transparent', boxShadow: '0px 6px 0px -2px rgba(0,0,0,1)', transform: 'translateY(0)', transition: 'transform .3s cubic-bezier(.5,2.5,.7,.7),box-shadow .3s cubic-bezier(.5,2.5,.7,.7)' }} cursor={'pointer'}>Learn More</Button>
                    </Box>
                </Box>
            </Box>

            {/* Section 3 */}

            <Box w={'100%'} bg={'#241C15'} p={'3rem'}>
                <AspectRatio maxW={{ base: '500px', sm: '600px', md: '700px', lg: '800px', xl: '1100px', '2xl': '1200px' }} ratio={2 / 1} m={'auto'}>
                    <iframe
                        title='Mailchimp'
                        src='https://www.youtube.com/embed/vv9xAfKdBk4'
                        allowFullScreen
                        loading
                    />
                </AspectRatio>
                <Text color={'white'} maxW={{ base: '400px', sm: '500px', md: '600px', lg: '700px', xl: '1000px', '2xl': '1100px' }} m={'auto'} mt={'50px'} lineHeight={'30px'} fontSize={{ base: '1rem', sm: '1rem', md: '1rem', lg: '1.5rem', xl: '1.5rem', '2xl': '1.5rem' }} letterSpacing={'-.02rem'} fontFamily={'Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif'}>Most email marketing platforms tell you how your campaigns perform. We analyze the data from the billions of emails we send to give you personalized recommendations for improving your content, targeting, and automations.</Text>
            </Box>

            {/* Section 4 */}

            <Box w={'100%'} bg={'#F6F6F4'} p={'3rem'}>
                <Box w={'90%'} m={'auto'}>
                    <Heading as={'h2'} textAlign={'center'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} fontWeight={'300'} fontSize={{ base: '7.5vw', sm: '7.5vw', md: '2.5rem', lg: '2.5rem', xl: '2.5rem', '2xl': '2.5rem' }} color={'#241c15'} lineHeight={1}>Find the right plan</Heading>
                    <Box mt={'50px'} display={'grid'} gridTemplateRows={'auto'} gridTemplateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(4,1fr)', xl: 'repeat(4,1fr)', '2xl': 'repeat(4,1fr)' }} columnGap={{ base: '0', sm: '0', md: '1.5rem', lg: '0', xl: '0', '2xl': '0' }} rowGap={{ base: '1.5rem', sm: '1.5rem', md: '1.5rem', lg: '0', xl: '0', '2xl': '0' }}>
                        <Box px={'1.5rem'} py={'1.5rem'} border={'.0625rem solid #bcbab8'} cursor={'pointer'} _hover={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                            <Box maxWidth={'80rem'}>
                                <Heading as={'h3'} fontSize={'1.25rem'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} fontWeight={'300'}>Premium</Heading>
                                <Text h={'60px'} fontSize={'0.8125rem'} lineHeight={'1.53846'} color={'#241c15'} fontWeight={'400'} mt={'0.5rem'}>Our most advanced tools, unlimited contacts, and priority support; built for teams.</Text>
                                <Box h={'72px'} display={'flex'} flexDirection={'column'}>
                                    <Text fontSize={'0.8125rem'} lineHeight={'1.53846'} color={'#241c15'} fontWeight={'400'}>Starts at</Text>
                                    <Box fontSize={'2.125rem'} fontWeight={'400'} lineHeight={'.7'} color={'#241c15'}>₹23,000</Box>
                                    <Text color={'rgba(36,28,21,.65)'} fontSize={'0.8125rem'} lineHeight={'1.53846'} fontWeight={'400'}>/month based on 10,000 contacts*</Text>
                                </Box>
                            </Box>
                            <UnorderedList w={'100%'} m={[0, 'auto']} color={'#241c15'} listStyleType={'none'}>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Phone & Priority Support
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Max Contacts: Unlimited
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Custom-Coded and Pre-built
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Multivariate and A/B Testing
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Enhanced Automated Customer
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Predictive Segmentation
                                </ListItem>
                                <ListItem py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Dedicated Onboarding Specialist
                                </ListItem>
                            </UnorderedList>
                        </Box>

                        <Box px={'1.5rem'} py={'1.5rem'} border={'.0625rem solid #bcbab8'} cursor={'pointer'} _hover={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                            <Box maxWidth={'80rem'}>
                                <Heading as={'h3'} fontSize={'1.25rem'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} fontWeight={'300'}>Standard</Heading>
                                <Text h={'60px'} fontSize={'0.8125rem'} lineHeight={'1.53846'} color={'#241c15'} fontWeight={'400'} mt={'0.5rem'}>Sell even more with personalization, optimization tools, and enhanced.</Text>
                                <Box h={'72px'} display={'flex'} flexDirection={'column'}>
                                    <Text fontSize={'0.8125rem'} lineHeight={'1.53846'} color={'#241c15'} fontWeight={'400'}>Starts at</Text>
                                    <Box fontSize={'2.125rem'} fontWeight={'400'} lineHeight={'.7'} color={'#241c15'}>₹1,150</Box>
                                    <Text color={'rgba(36,28,21,.65)'} fontSize={'0.8125rem'} lineHeight={'1.53846'} fontWeight={'400'}>/month based on 500 contacts*</Text>
                                </Box>
                            </Box>
                            <UnorderedList w={'100%'} m={[0, 'auto']} color={'#241c15'} listStyleType={'none'}>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    24/7 Email & Chat Support
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Max Contacts: 100,000
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Custom-Coded and Pre-built Email
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    A/B Testing
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Enhanced Automated Customer
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Predictive Segmentation
                                </ListItem>
                                <ListItem py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#00000057'}>
                                    <ListIcon as={GiTireIronCross} color={'black.500'} />
                                    Dedicated Onboarding Specialist
                                </ListItem>
                            </UnorderedList>
                        </Box>

                        <Box px={'1.5rem'} py={'1.5rem'} border={'.0625rem solid #bcbab8'} cursor={'pointer'} _hover={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                            <Box maxWidth={'80rem'}>
                                <Heading as={'h3'} fontSize={'1.25rem'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} fontWeight={'300'}>Essentials</Heading>
                                <Text h={'60px'} fontSize={'0.8125rem'} lineHeight={'1.53846'} color={'#241c15'} fontWeight={'400'} mt={'0.5rem'}>Send the right content at the right time with testing and scheduling features.</Text>
                                <Box h={'72px'} display={'flex'} flexDirection={'column'}>
                                    <Text fontSize={'0.8125rem'} lineHeight={'1.53846'} color={'#241c15'} fontWeight={'400'}>Starts at</Text>
                                    <Box fontSize={'2.125rem'} fontWeight={'400'} lineHeight={'.7'} color={'#241c15'}>₹770</Box>
                                    <Text color={'rgba(36,28,21,.65)'} fontSize={'0.8125rem'} lineHeight={'1.53846'} fontWeight={'400'}>/month based on 10,000 contacts*</Text>
                                </Box>
                            </Box>
                            <UnorderedList w={'100%'} m={[0, 'auto']} color={'#241c15'} listStyleType={'none'}>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    24/7 Email & Chat Support
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Max Contacts: 50,000
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Pre-built Email Templates
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    A/B Testing
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Basic Automated Customer
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#00000057'}>
                                    <ListIcon as={GiTireIronCross} color={'black.500'} />
                                    Predictive Segmentation
                                </ListItem>
                                <ListItem py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#00000057'}>
                                    <ListIcon as={GiTireIronCross} color={'black.500'} />
                                    Dedicated Onboarding Specialist
                                </ListItem>
                            </UnorderedList>
                        </Box>

                        <Box px={'1.5rem'} py={'1.5rem'} border={'.0625rem solid #bcbab8'} cursor={'pointer'} _hover={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                            <Box maxWidth={'80rem'}>
                                <Heading as={'h3'} fontSize={'1.25rem'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} fontWeight={'300'}>Free</Heading>
                                <Text h={'60px'} fontSize={'0.8125rem'} lineHeight={'1.53846'} color={'#241c15'} fontWeight={'400'} mt={'0.5rem'}>Easily create email campaigns and learn more about your customers.</Text>
                                <Box h={'72px'} display={'flex'} flexDirection={'column'}>
                                    <Text fontSize={'0.8125rem'} lineHeight={'1.53846'} color={'#241c15'} fontWeight={'400'}>Starts at</Text>
                                    <Box fontSize={'2.125rem'} fontWeight={'400'} lineHeight={'.7'} color={'#241c15'}>₹0</Box>
                                    <Text color={'rgba(36,28,21,.65)'} fontSize={'0.8125rem'} lineHeight={'1.53846'} fontWeight={'400'}>/month based on 10,000 contacts*</Text>
                                </Box>
                            </Box>
                            <UnorderedList w={'100%'} m={[0, 'auto']} color={'#241c15'} listStyleType={'none'}>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Email support for first 30 days
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Max Contacts: 500
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#000000ad'}>
                                    <ListIcon as={GiCheckMark} color={'black.500'} />
                                    Pre-built Email Templates
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#00000057'}>
                                    <ListIcon as={GiTireIronCross} color={'black.500'} />
                                    A/B Testing
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#00000057'}>
                                    <ListIcon as={GiTireIronCross} color={'black.500'} />
                                    Basic Automated Customer
                                </ListItem>
                                <ListItem borderBottom={'1px solid rgb(130 125 121 / 65%)'} py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#00000057'}>
                                    <ListIcon as={GiTireIronCross} color={'black.500'} />
                                    Predictive Segmentation
                                </ListItem>
                                <ListItem py={'15px'} fontSize={'0.9rem'} fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#00000057'}>
                                    <ListIcon as={GiTireIronCross} color={'black.500'} />
                                    Dedicated Onboarding Specialist
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box w={'100%'} m={'auto'} mt={'1rem'} mb={'1.5rem'} textAlign={'center'}>
                        <Text fontSize={'0.8125rem'} lineHeight={'1.53846'} fontWeight={'400'} color={'#241c15'}>*Overages apply if contact or email send limit is exceeded. Free plan sending will be paused if contact or email send limit is exceeded. Learn more</Text>
                    </Box>
                    <Box w={'100%'} m={'auto'} textAlign={'center'}>
                        <Button border={'1.60px solid black'} fontSize={'14px'} borderRadius={'2em'} px={'24px'} py={'22px'} bg={'#ffe01b'} _hover={{ bg: '#ffe01b', boxShadow: '0px 6px 0px -2px rgba(0,0,0,1)', transform: 'translateY(0)', transition: 'transform .3s cubic-bezier(.5,2.5,.7,.7),box-shadow .3s cubic-bezier(.5,2.5,.7,.7)' }} cursor={'pointer'}>See all plan details</Button>
                    </Box>
                </Box>
            </Box>

            {/* Section 5 */}

            <Box w={'100%'} py={{ base: '2rem', sm: '2rem', md: '2rem', lg: '2rem', xl: '2rem', '2xl': '2rem' }}>
                <Box w={{ base: '90%', sm: '80%', md: '70%', lg: '60%', xl: '50%', '2xl': '50%' }} m={'auto'}>
                    <Heading fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} fontSize={{ base: '1.5rem', sm: '1.6rem', md: '2rem', lg: '2.3rem', xl: '2.5rem', '2xl': '2.5rem' }} lineHeight={1} color={'#241c15'} letterSpacing={'-.03125rem'} textAlign={'center'}>Generate up to 4x more orders* with Customer Journey Builder automations</Heading>
                </Box>
            </Box>

            <Box w={'100%'}>
                <Box display={'grid'} gridTemplateRows={'auto'} gridTemplateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(1,1fr)', md: 'repeat(1,1fr)', lg: 'repeat(2,1fr)', xl: 'repeat(2,1fr)', '2xl': 'repeat(2,1fr)' }}>
                    <Box px={{ base: '3rem', sm: '3rem', md: '5rem', lg: '6rem', xl: '7rem', '2xl': '8rem' }} py={{ base: '2rem', sm: '2rem', md: '3rem', lg: '4rem', xl: '5rem', '2xl': '5rem' }}>
                        <Heading as={'h3'} mb={'0.5rem'} fontWeight={'400'} fontSize={'2rem'} lineHeight={1.25} color={'#241c15'} letterSpacing={0}>Convert more customers at scale</Heading>
                        <Box fontSize={'1.25rem'} lineHeight={1.4} color={'#241c15'} fontWeight={'400'} letterSpacing={0}>
                            <Text>Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.</Text>
                        </Box>
                        <Box mt={'2.5rem'}>
                            <Button border={'1.60px solid black'} fontSize={'14px'} borderRadius={'2em'} px={'24px'} py={'22px'} bg={'#ffe01b'} _hover={{ bg: '#ffe01b', boxShadow: '0px 6px 0px -2px rgba(0,0,0,1)', transform: 'translateY(0)', transition: 'transform .3s cubic-bezier(.5,2.5,.7,.7),box-shadow .3s cubic-bezier(.5,2.5,.7,.7)' }} cursor={'pointer'}>Learn More</Button>
                        </Box>
                    </Box>

                    <Box px={{ base: '3rem', sm: '3rem', md: '5rem', lg: '6rem', xl: '7rem', '2xl': '8rem' }} py={{ base: '2rem', sm: '2rem', md: '3rem', lg: '4rem', xl: '5rem', '2xl': '5rem' }}>
                        <Heading as={'h3'} mb={'0.5rem'} fontWeight={'400'} fontSize={'2rem'} lineHeight={1.25} color={'#241c15'} letterSpacing={0}>Discover new ways to automate</Heading>
                        <Box fontSize={'1.25rem'} lineHeight={1.4} color={'#241c15'} fontWeight={'400'} letterSpacing={0}>
                            <Text>Get a head start with pre-built journeys that help you cross-sell your products, recover abandoned carts, re-engage existing customers.</Text>
                        </Box>
                        <Box mt={'2.5rem'}>
                            <Button border={'1.60px solid black'} fontSize={'14px'} borderRadius={'2em'} px={'24px'} py={'22px'} bg={'#ffe01b'} _hover={{ bg: '#ffe01b', boxShadow: '0px 6px 0px -2px rgba(0,0,0,1)', transform: 'translateY(0)', transition: 'transform .3s cubic-bezier(.5,2.5,.7,.7),box-shadow .3s cubic-bezier(.5,2.5,.7,.7)' }} cursor={'pointer'}>Learn More</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Section 6 */}

            <Box w={'100%'} py={{ base: '2rem', sm: '2rem', md: '2rem', lg: '2rem', xl: '2rem', '2xl': '2rem' }}>
                <Box w={{ base: '90%', sm: '80%', md: '70%', lg: '60%', xl: '50%', '2xl': '50%' }} m={'auto'}>
                    <Heading fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} fontSize={{ base: '1.5rem', sm: '1.6rem', md: '2rem', lg: '2.3rem', xl: '2.5rem', '2xl': '2.5rem' }} lineHeight={1} color={'#241c15'} letterSpacing={'-.03125rem'} textAlign={'center'}>Get up to 88% more revenue* with our Customer Lifetime Value and Likelihood to Purchase segments</Heading>
                </Box>
            </Box>

            <Box w={'100%'}>
                <Box display={'grid'} gridTemplateRows={'auto'} gridTemplateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(1,1fr)', md: 'repeat(1,1fr)', lg: 'repeat(2,1fr)', xl: 'repeat(2,1fr)', '2xl': 'repeat(2,1fr)' }}>
                    <Box px={{ base: '3rem', sm: '3rem', md: '5rem', lg: '6rem', xl: '7rem', '2xl': '8rem' }} py={{ base: '2rem', sm: '2rem', md: '3rem', lg: '4rem', xl: '5rem', '2xl': '5rem' }}>
                        <Heading as={'h3'} mb={'0.5rem'} fontWeight={'400'} fontSize={'2rem'} lineHeight={1.25} color={'#241c15'} letterSpacing={0}>Predict who’s likely to buy again</Heading>
                        <Box fontSize={'1.25rem'} lineHeight={1.4} color={'#241c15'} fontWeight={'400'} letterSpacing={0}>
                            <Text>Create segments of customers based on their lifetime value and likelihood to purchase.</Text>
                        </Box>
                        <Box mt={'2.5rem'}>
                            <Button border={'1.60px solid black'} fontSize={'14px'} borderRadius={'2em'} px={'24px'} py={'22px'} bg={'#ffe01b'} _hover={{ bg: '#ffe01b', boxShadow: '0px 6px 0px -2px rgba(0,0,0,1)', transform: 'translateY(0)', transition: 'transform .3s cubic-bezier(.5,2.5,.7,.7),box-shadow .3s cubic-bezier(.5,2.5,.7,.7)' }} cursor={'pointer'}>Learn More</Button>
                        </Box>
                    </Box>

                    <Box px={{ base: '3rem', sm: '3rem', md: '5rem', lg: '6rem', xl: '7rem', '2xl': '8rem' }} py={{ base: '2rem', sm: '2rem', md: '3rem', lg: '4rem', xl: '5rem', '2xl': '5rem' }}>
                        <Heading as={'h3'} mb={'0.5rem'} fontWeight={'400'} fontSize={'2rem'} lineHeight={1.25} color={'#241c15'} letterSpacing={0}>Build customers for life</Heading>
                        <Box fontSize={'1.25rem'} lineHeight={1.4} color={'#241c15'} fontWeight={'400'} letterSpacing={0}>
                            <Text>Use our intelligent predictions to tighten your targeting strategy, strengthen customer relationships.</Text>
                        </Box>
                        <Box mt={'2.5rem'}>
                            <Button border={'1.60px solid black'} fontSize={'14px'} borderRadius={'2em'} px={'24px'} py={'22px'} bg={'#ffe01b'} _hover={{ bg: '#ffe01b', boxShadow: '0px 6px 0px -2px rgba(0,0,0,1)', transform: 'translateY(0)', transition: 'transform .3s cubic-bezier(.5,2.5,.7,.7),box-shadow .3s cubic-bezier(.5,2.5,.7,.7)' }} cursor={'pointer'}>Learn More</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Section 7 */}

            <Box w={'100%'} mt={'10px'}>
                <Box w={'85%'} m={'auto'}>
                    <Box pb={'2rem'} w={{ base: '90%', sm: '90%', md: '70%', lg: '60%', xl: '40%', '2xl': '40%' }} mb={'10px'}>
                        <Heading as={'h2'} fontWeight={'500'} >Bring in more data, drive more growth with our integrations</Heading>
                    </Box>
                    <Box display={'grid'} gridTemplateRows={'auto'} gridTemplateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)', xl: 'repeat(3,1fr)', '2xl': 'repeat(3,1fr)' }}>
                        <Box display={'flex'} p={'20px'} columnGap={'20px'} _hover={{ bg: '#F6F6F4' }} cursor={'pointer'}>
                            <Box>
                                <Image src='https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&fm=webp&q=80' maxWidth={'7rem'} h={'auto'} />
                            </Box>
                            <Box m={'auto'}>
                                <Heading as={'h3'} textAlign={'start'} p={['0.25rem', 0]} fontWeight={'500'} fontSize={'1rem'} lineHeight={1.75} color={'#241c15'}>Canva</Heading>
                                <Text fontSize={'0.8125rem'} lineHeight={1.52846} color={'#241c15'} fontWeight={'400'}>Create compelling visuals for your marketing.</Text>
                            </Box>
                        </Box>

                        <Box display={'flex'} p={'20px'} columnGap={'20px'} _hover={{ bg: '#F6F6F4' }} cursor={'pointer'}>
                            <Box>
                                <Image src='https://eep.io/images/yzco4xsimv0y/51oq4AakIqo8fATlHgqHK0/02a750b1c1a16745296dca6fa7cb830c/Salesforce__1_.jpg?w=196&fm=webp&q=80' maxWidth={'7rem'} h={'auto'} />
                            </Box>
                            <Box m={'auto'}>
                                <Heading as={'h3'} textAlign={'start'} p={['0.25rem', 0]} fontWeight={'500'} fontSize={'1rem'} lineHeight={1.75} color={'#241c15'}>Mailchimp for Salesforce</Heading>
                                <Text fontSize={'0.8125rem'} lineHeight={1.52846} color={'#241c15'} fontWeight={'400'}>Sync your Mailchimp subscribers and Salesforce® leads across platforms.</Text>
                            </Box>
                        </Box>

                        <Box display={'flex'} p={'20px'} columnGap={'20px'} _hover={{ bg: '#F6F6F4' }} cursor={'pointer'}>
                            <Box>
                                <Image src='https://eep.io/images/yzco4xsimv0y/67trWJLKtKcvrqlKYSlskE/696ad499e0cc60aa7392521a6a7cfd90/Instagram__1_.jpg?w=196&fm=webp&q=80' maxWidth={'7rem'} h={'auto'} />
                            </Box>
                            <Box m={'auto'}>
                                <Heading as={'h3'} textAlign={'start'} p={['0.25rem', 0]} fontWeight={'500'} fontSize={'1rem'} lineHeight={1.75} color={'#241c15'}>Instagram</Heading>
                                <Text fontSize={'0.8125rem'} lineHeight={1.52846} color={'#241c15'} fontWeight={'400'}>Promote and share your Instagram posts in email campaigns.</Text>
                            </Box>
                        </Box>

                        <Box display={'flex'} p={'20px'} columnGap={'20px'} _hover={{ bg: '#F6F6F4' }} cursor={'pointer'}>
                            <Box>
                                <Image src='https://eep.io/images/yzco4xsimv0y/44dW9Z4hibyDYi0qggfets/b01884985e996ffb5dc133556b92bb7a/Shopify__1_.jpg?w=196&fm=webp&q=80' maxWidth={'7rem'} h={'auto'} />
                            </Box>
                            <Box m={'auto'}>
                                <Heading as={'h3'} textAlign={'start'} p={['0.25rem', 0]} fontWeight={'500'} fontSize={'1rem'} lineHeight={1.75} color={'#241c15'}>Shopify</Heading>
                                <Text fontSize={'0.8125rem'} lineHeight={1.52846} color={'#241c15'} fontWeight={'400'}>Create compelling visuals for your marketing.</Text>
                            </Box>
                        </Box>

                        <Box display={'flex'} p={'20px'} columnGap={'20px'} _hover={{ bg: '#F6F6F4' }} cursor={'pointer'}>
                            <Box>
                                <Image src='https://eep.io/images/yzco4xsimv0y/7mpZ7UZrdzk2BmWX1OnRvb/5e610ecd21eeb25d0b82b098ce424e34/Google_Analytics2.jpg?w=196&fm=webp&q=80' maxWidth={'7rem'} h={'auto'} />
                            </Box>
                            <Box m={'auto'}>
                                <Heading as={'h3'} textAlign={'start'} p={['0.25rem', 0]} fontWeight={'500'} fontSize={'1rem'} lineHeight={1.75} color={'#241c15'}>Google Analytics</Heading>
                                <Text fontSize={'0.8125rem'} lineHeight={1.52846} color={'#241c15'} fontWeight={'400'}>Unlock powerful insights with campaign, website, or landing page data.</Text>
                            </Box>
                        </Box>

                        <Box display={'flex'} p={'20px'} columnGap={'20px'} _hover={{ bg: '#F6F6F4' }} cursor={'pointer'}>
                            <Box>
                                <Image src='https://eep.io/images/yzco4xsimv0y/2uruOq31Y1FKdghFWn5zMg/8a35f3f9e463ba34038f3c3f16ccb635/WooCommerce.jpg?w=196&fm=webp&q=80' maxWidth={'7rem'} h={'auto'} />
                            </Box>
                            <Box m={'auto'}>
                                <Heading as={'h3'} textAlign={'start'} p={['0.25rem', 0]} fontWeight={'500'} fontSize={'1rem'} lineHeight={1.75} color={'#241c15'}>WooCommerce</Heading>
                                <Text fontSize={'0.8125rem'} lineHeight={1.52846} color={'#241c15'} fontWeight={'400'}>Power your ecommerce store with smart marketing features.</Text>
                            </Box>
                        </Box>

                        <Box display={'flex'} p={'20px'} columnGap={'20px'} _hover={{ bg: '#F6F6F4' }} cursor={'pointer'}>
                            <Box>
                                <Image src='https://eep.io/images/yzco4xsimv0y/uZVnrVt3DO1G4Ec5G4pvs/e6c9d3c2613827f7dd238f1c5e0b02d9/Quickbooks.jpg?w=196&fm=webp&q=80' maxWidth={'7rem'} h={'auto'} />
                            </Box>
                            <Box m={'auto'}>
                                <Heading as={'h3'} textAlign={'start'} p={['0.25rem', 0]} fontWeight={'500'} fontSize={'1rem'} lineHeight={1.75} color={'#241c15'}>QuickBooks Online</Heading>
                                <Text fontSize={'0.8125rem'} lineHeight={1.52846} color={'#241c15'} fontWeight={'400'}>Bring together your marketing tools and invoice data.</Text>
                            </Box>
                        </Box>

                        <Box display={'flex'} p={'20px'} columnGap={'20px'} _hover={{ bg: '#F6F6F4' }} cursor={'pointer'}>
                            <Box>
                                <Image src='https://eep.io/images/yzco4xsimv0y/2klSrOoLZKmLuGKZjKT9o3/ca400f60c2f3673f3ab9b52f4d03360d/Squarespace.jpg?w=196&fm=webp&q=80' maxWidth={'7rem'} h={'auto'} />
                            </Box>
                            <Box m={'auto'}>
                                <Heading as={'h3'} textAlign={'start'} p={['0.25rem', 0]} fontWeight={'500'} fontSize={'1rem'} lineHeight={1.75} color={'#241c15'}>Squarespace Commerce</Heading>
                                <Text fontSize={'0.8125rem'} lineHeight={1.52846} color={'#241c15'} fontWeight={'400'}>Market your ecommerce business and drive sales.</Text>
                            </Box>
                        </Box>

                        <Box display={'flex'} p={'20px'} columnGap={'20px'} _hover={{ bg: '#F6F6F4' }} cursor={'pointer'}>
                            <Box>
                                <Image src='https://eep.io/images/yzco4xsimv0y/26deBkGp3A5Pj7suZ9oV7V/858e8a4603707166988a3282bca7e29b/Zapier.jpg?w=196&fm=webp&q=80' maxWidth={'7rem'} h={'auto'} />
                            </Box>
                            <Box m={'auto'}>
                                <Heading as={'h3'} textAlign={'start'} p={['0.25rem', 0]} fontWeight={'500'} fontSize={'1rem'} lineHeight={1.75} color={'#241c15'}>Zapier</Heading>
                                <Text fontSize={'0.8125rem'} lineHeight={1.52846} color={'#241c15'} fontWeight={'400'}>Automatically pass data between web services without a single line of code.</Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box mt={'40px'} mb={'80px'}>
                        <Button border={'1.60px solid black'} fontSize={'14px'} borderRadius={'2em'} px={'24px'} py={'22px'} bg={'#ffe01b'} _hover={{ bg: '#ffe01b', boxShadow: '0px 6px 0px -2px rgba(0,0,0,1)', transform: 'translateY(0)', transition: 'transform .3s cubic-bezier(.5,2.5,.7,.7),box-shadow .3s cubic-bezier(.5,2.5,.7,.7)' }} cursor={'pointer'}>View all 300+ integrations</Button>
                    </Box>
                </Box>
            </Box>

            {/* Section 8 */}

            <Box w={'100%'} bg={'#f6f6f4'} py={'2.5rem'}>
                <Box w={'85%'} m={'auto'} fontSize={'0.6875rem'} lineHeight={1.45455} color={'#241c15'} fontWeight={'400'} letterSpacing={0}>
                    <Text><strong fontWeight={'500'}>*Disclaimers</strong></Text>
                    <Text>1. Mailchimp is the #1 email marketing and automation brand based on competitor brands' publicly available data on worldwide numbers of customers in 2021 / 2022.</Text>
                    <Text>2. Generate up to 4X more orders with Customer Journey Builder automations based on orders generated through user's connected stores with automations versus when they used bulk emails.</Text>
                    <Text>3. Get up to 88% more revenue based on emails sent with predicted segments against non-predictive segmented emails for users with connected stores only. Standard or Premium Plans only.</Text>
                    <Text mb={'10px'}>Availability of features and functionality varies by plan type. For details, view plans and pricing.</Text>
                    <Text>*Valid only for account holders who: (1) have a Free plan account associated with in-app, web or email promo message and (2) upgrade to [Standard] plan and enter valid payment information through the “Redeem Offer” button. If you receive the offer in-app, you are no longer eligible once you dismiss the in-app message unless you snooze the offer, in which case it will be offered again 24+ hours later. Offer ends at 11:59 PM ET on 11/14/2022. Depending on how many contacts you have when you redeem, you will be placed into different [Standard] plan tiers with different monthly send limits. Offset includes a 100% discount to your recurring monthly plan charges for first 2 monthly bills on promo plan, not including add-on fees or one-time fees. You will lose the offer if you change your plan type, pause, or cancel your account. One offer redemption per Mailchimp account. <strong>Once discount ends, you will be automatically charged the [Standard] plan rate currently in effect without the discount based on your contacts and email sends, which will automatically renew monthly. See full offer terms here.</strong></Text>
                </Box>
            </Box>
        </>
    )
}

export default Body;

// {base:'',sm:'', md:'',lg:'', xl:'','2xl':''}