import React from 'react';
import { Box, Heading, ListItem, UnorderedList, Link, Image, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'

function Footer() {
    return (
        <>
            <Box w={'100%'} bg={'#E7B75F'} pb={'100px'}>

                <Box w={'100%'} py={'3rem'} borderBottom={'1px solid rgba(36,28,21,.3)'}>
                    <Box w={'85%'} m={'auto'} px={'1.875rem'}>
                        <UnorderedList display={'flex'} justifyContent={'center'} flexWrap={'wrap'} listStyleType={'none'} justifyItems={'center'} alignItems={'center'}>
                            <ListItem whiteSpace={'nowrap'} display={'block'} fontSize={'1rem'} fontWeight={'500'} px={'1rem'}>Related Links:</ListItem>
                            <ListItem whiteSpace={'nowrap'} display={'block'} fontSize={'0.8rem'} textDecoration={'underline'} px={'1.5rem'} _hover={{ cursor: 'pointer', bg: '#FFE01B' }}>Start an Online eCommerce Business</ListItem>
                            <ListItem whiteSpace={'nowrap'} display={'block'} fontSize={'0.8rem'} textDecoration={'underline'} px={'1.5rem'} _hover={{ cursor: 'pointer', bg: '#FFE01B' }}>How to Sell Anything to Any Audience</ListItem>
                            <ListItem whiteSpace={'nowrap'} display={'block'} fontSize={'0.8rem'} textDecoration={'underline'} px={'1.5rem'} _hover={{ cursor: 'pointer', bg: '#FFE01B' }}>How to Build a Great Website</ListItem>
                        </UnorderedList>
                    </Box>
                </Box>

                <Box w={'100%'} py={'3rem'} borderBottom={'1px solid rgba(36,28,21,.3)'}>
                    <Box w={'90%'} m={'auto'} px={'1.875rem'}>
                        <Box display={'grid'} gridTemplateRows={'rows'} gridTemplateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)', xl: 'repeat(6,1fr)', '2xl': 'repeat(6,1fr)' }} justifyContent={'center'}>

                            <Box mx={'1.875rem'}>
                                <Heading as={'h3'} fontSize={'1.1rem'} mb={'1.5rem'} color={'#241c15'} fontWeight={'500'} lineHeight={1} letterSpacing={0}>Products</Heading>
                                <UnorderedList listStyleType={'none'} m={0}>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Why Mailchimp?</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Product Updates</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Email Marketing</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Websites</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Transactional Email</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>How We Compare</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>GDPR Compliance</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Security</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Status</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Mobile App</ListItem>
                                </UnorderedList>
                            </Box>

                            <Box mx={'1.875rem'}>
                                <Heading as={'h3'} fontSize={'1.1rem'} mb={'1.5rem'} color={'#241c15'} fontWeight={'500'} lineHeight={1} letterSpacing={0}>Resources</Heading>
                                <UnorderedList listStyleType={'none'} m={0}>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Marketing Library</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Free Marketing Tools</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Marketing Clossary</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Integrations Directory</ListItem>
                                </UnorderedList>
                            </Box>

                            <Box mx={'1.875rem'}>
                                <Heading as={'h3'} fontSize={'1.1rem'} mb={'1.5rem'} color={'#241c15'} fontWeight={'500'} lineHeight={1} letterSpacing={0}>Community</Heading>
                                <UnorderedList listStyleType={'none'} m={0}>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Agencies & Freelancers</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Developers</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Events</ListItem>
                                </UnorderedList>
                            </Box>

                            <Box mx={'1.875rem'}>
                                <Heading as={'h3'} fontSize={'1.1rem'} mb={'1.5rem'} color={'#241c15'} fontWeight={'500'} lineHeight={1} letterSpacing={0}>Company</Heading>
                                <UnorderedList listStyleType={'none'} m={0}>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Our Story</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Newsroom</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Annual Report</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Careers</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Accessibility</ListItem>
                                </UnorderedList>
                            </Box>

                            <Box mx={'1.875rem'}>
                                <Heading as={'h3'} fontSize={'1.1rem'} mb={'1.5rem'} color={'#241c15'} fontWeight={'500'} lineHeight={1} letterSpacing={0}>Help</Heading>
                                <UnorderedList listStyleType={'none'} m={0}>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Contact Us</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Hire An Expert</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Help Center</ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'} textDecoration={'underline'} cursor={'pointer'} _hover={{ bg: '#FFE01B' }}>Talk to Sales</ListItem>
                                </UnorderedList>
                            </Box>

                            <Box mx={'1.875rem'}>
                                <UnorderedList listStyleType={'none'} m={0} mb={'2rem'}>
                                    <ListItem mb={'0.8rem'}>
                                        <img src="https://eep.io/images/yzco4xsimv0y/73ZAoe8O3Y7SXQLeCNTq5u/8ddf1f63b4abdf7f67149d3a9d74a0bd/MCP.svg?w=260&fm=webp&q=80" width={'100%'} height={'auto'} alt="" />
                                    </ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'}>Films, podcasts, and original series that celebrate the entrepreneurial spirit.</ListItem>
                                </UnorderedList>

                                <UnorderedList listStyleType={'none'} m={0}>
                                    <ListItem mb={'0.8rem'}>
                                        <img src="https://eep.io/images/yzco4xsimv0y/5itQmdXHB6vMuAcvyWp5MR/ef5cd2cecd4c92b7029a22ec67585c65/Courier.svg?w=260&fm=webp&q=80" width={'100%'} height={'auto'} alt="" />
                                    </ListItem>
                                    <ListItem mb={'0.625rem'} fontSize={'0.8rem'} lineHeight={1.75} listStyleType={'none'} textAlign={'left'}>Expert insights, industry trends, and inspiring stories that help you live and work on your own terms.</ListItem>
                                </UnorderedList>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box w={"100%"} py={'3rem'}>
                    <Box w={'90%'} m={'auto'}>
                        <Box display={'grid'} gridTemplateRows={'auto'} gridTemplateColumns={{base:'repeat(1,1fr)',sm:'repeat(1,1fr)', md:'repeat(2,1fr)',lg:'repeat(3,1fr)', xl:'repeat(3,1fr)','2xl':'repeat(3,1fr)'}} justifyContent={'center'} alignItems={'center'} mx={'5rem'}>
                            <UnorderedList display={'flex'} justifyContent={'center'} alignItems={'center'} listStyleType={'none'}>
                                <ListItem display={'flex'} justifyContent={'center'} mx={'0.3125rem'}>
                                    <Link href='https://mailchimp.app.link/9v17ZhaeNR' target={'_blank'} textDecoration={'none'}>
                                        <Image src='https://eep.io/images/yzco4xsimv0y/1u3hha7FE0Q402e2qsMu6a/5e403548149c1618b64034284f692ff1/icon-ios.svg?w=160&fm=webp&q=80' w={'100'} h={'auto'} />
                                    </Link>
                                </ListItem>

                                <ListItem display={'flex'} justifyContent={'center'} mx={'0.3125rem'}>
                                    <Link href='https://play.google.com/store/apps/details?id=com.mailchimp.mailchimp&_branch_match_id=1107237670848052670&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz03MzEnOyMwt0EssKNDLyczL1k%2Bp8LbMcUn1CAkCADfgeWQlAAAA' target={'_blank'} textDecoration={'none'}>
                                        <Image src='https://eep.io/images/yzco4xsimv0y/64EpnI4RsQI66c2y2O60G2/4c34d7bc4dd7a4362c7e19a06c109e21/icon-android.svg?w=160&fm=webp&q=80' w={'100'} h={'auto'} />
                                    </Link>
                                </ListItem>
                            </UnorderedList>

                            <UnorderedList display={'flex'} justifyContent={'center'} alignItems={'center'} listStyleType={'none'}>
                                <ListItem display={'flex'} justifyContent={'center'} mx={'0.75rem'}>
                                    <Link href='https://www.facebook.com/mailchimp/' target={'_blank'} textDecoration={'none'}>
                                        <Image src='https://eep.io/images/yzco4xsimv0y/5daYAeMRSgIUUiSquGwsgI/1904e3f818575ec9625fa15dab193243/icon-facebook.svg?w=160&fm=webp&q=80' w={'100'} h={'auto'} />
                                    </Link>
                                </ListItem>

                                <ListItem display={'flex'} justifyContent={'center'} mx={'0.3125rem'}>
                                    <Link href='https://twitter.com/Mailchimp' target={'_blank'} textDecoration={'none'}>
                                        <Image src='https://eep.io/images/yzco4xsimv0y/3VjJhbqftKuok6gqYuUQKy/328d56c5d13ad50b9679b11e716bb218/icon-twitter.svg?w=160&fm=webp&q=80' w={'100'} h={'auto'} />
                                    </Link>
                                </ListItem>

                                <ListItem display={'flex'} justifyContent={'center'} mx={'0.3125rem'}>
                                    <Link href='https://www.instagram.com/mailchimp/' target={'_blank'} textDecoration={'none'}>
                                        <Image src='https://eep.io/images/yzco4xsimv0y/RlNw7Xkw8uKYAUoYU4aQw/ff3eada8736da9e63fbd9f929c6a677c/icon-instagram.svg?w=320&fm=webp&q=80' w={'100'} h={'auto'} />
                                    </Link>
                                </ListItem>

                                <ListItem display={'flex'} justifyContent={'center'} mx={'0.3125rem'}>
                                    <Link href='https://www.linkedin.com/company/mailchimp' target={'_blank'} textDecoration={'none'}>
                                        <Image src='https://eep.io/images/yzco4xsimv0y/n5saFR4miW4U4ygUIQo0A/8f9c60cb133b80fda2fe9bdb825b4a5f/icon-linkedin.svg?w=320&fm=webp&q=80' w={'100'} h={'auto'} />
                                    </Link>
                                </ListItem>

                                <ListItem display={'flex'} justifyContent={'center'} mx={'0.3125rem'}>
                                    <Link href='https://www.youtube.com/user/Mailchimp' target={'_blank'} textDecoration={'none'}>
                                        <Image src='https://eep.io/images/yzco4xsimv0y/2z1ra9BrgQewIqMQckMasg/58e3e8ec04acd60f0642f89dfbd71218/icon-youtube.svg?w=320&fm=webp&q=80' w={'100'} h={'auto'} />
                                    </Link>
                                </ListItem>

                                <ListItem display={'flex'} justifyContent={'center'} mx={'0.3125rem'}>
                                    <Link href='https://www.pinterest.com/mailchimp/' target={'_blank'} textDecoration={'none'}>
                                        <Image src='https://eep.io/images/yzco4xsimv0y/7nawBEArBKpxRukK66OZtN/af9879112b20982e13748d47b24c8681/pinterest-logo.svg?w=320&fm=webp&q=80' w={'100'} h={'auto'} />
                                    </Link>
                                </ListItem>
                            </UnorderedList>

                            <Box display={'flex'} justifyContent={'left'}>
                                <Box fontSize={'0.812rem'} lineHeight={'1.53846'} color={'#241c15'} fontWeight={'400'} letterSpacing={0}>
                                    <Text>©2001-2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group. Apple and the Apple logo are trademarks of Apple Inc. Mac App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google Inc. <strong style={{cursor:'pointer'}}>Privacy | Terms | Cookie Preferences</strong></Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Footer;
