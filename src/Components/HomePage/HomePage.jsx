import React from 'react';
import { Box, Heading, Text, Button, Image, AspectRatio, UnorderedList, ListItem, ListIcon } from '@chakra-ui/react';
import { GiCheckMark, GiTireIronCross } from 'react-icons/gi'

const HomePage = () => {
    return (
        <>
            {/* Section 1 */}

            <Box w={'100%'} m={'auto'} mt={'6%'} >
                <Box w={{ base: '85%', sm: '85%', md: '85%', lg: '85%', xl: '60%', '2xl': '60%' }} m={'auto'} textAlign={'center!important'}>
                    <Heading as='h1' fontWeight={'300'} fontFamily={'Means Web,Georgia,Times,Times New Roman,serif'} color={'#241c15'} letterSpacing={'-.0625rem'} fontSize={{ base: '2.5rem', sm: '2.5rem', md: '2.5rem', lg: '2.5rem', xl: '3rem', '2xl': '3rem' }} lineHeight={{ base: '35px', sm: '35px', md: '35px', lg: '35px', xl: '40px', '2xl': '40px' }} marginBottom={'10px'}>Turn Emails into Revenue</Heading>
                    <Text fontSize={{ base: '1.125rem', sm: '1.125rem', md: '1.125rem', lg: '1.5rem', xl: '1.5rem', '2xl': '1.5rem' }} marginBottom={'20px'}>Win new customers with the #1 email marketing and automations brand* that recommends ways to get more opens, clicks, and sales.</Text>
                    <Button border={'1.60px solid black'} fontSize={'14px'} borderRadius={'2em'} px={'24px'} py={'22px'} bg={'#ffe01b'} _hover={{ bg: '#ffe01b', boxShadow: '0px 6px 0px -2px rgba(0,0,0,1)', transform: 'translateY(0)', transition: 'transform .3s cubic-bezier(.5,2.5,.7,.7),box-shadow .3s cubic-bezier(.5,2.5,.7,.7)' }} cursor={'pointer'}>Sign Up</Button>
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
        </>
    )
}

export default HomePage;

// {base:'',sm:'', md:'',lg:'', xl:'','2xl':''}