import React from 'react';
import { Box, Image, Heading, Text, FormControl, Input, FormLabel, Button, Checkbox } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignUp() {

    const [email, setemail] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    // form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '') {
            alert('Email is required')
        }
        else if (username === '') {
            alert('Username is required')
        }
        else if (password === '') {
            alert('password is required')
        }
        else {
            localStorage.setItem('email', email);
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('SignUp Success')
            navigate('/login');
        }
    }

    return (
        <>
            <Box w={'100%'} bg={'#FFE01B'}>
                <Box w={'100%'} backgroundImage="url('https://login.mailchimp.com/release/1.1.12db68f65958dbea8011b2efdf4e026e5d28738e2/images/brand_assets/illos/art-hero-flowers.png')" zIndex={1} objectFit={'cover'} >
                    <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '90%', xl: '70%', '2xl': '70%' }} bg={'white'} p={'1rem'} ml={{ base: '0px', sm: '0px', md: '0px', lg: '10px', xl: '10px', '2xl': '10px' }}>
                        <Box w={'100%'} mb={'2rem'}>
                            <Link to={'/'}>
                                <Image src='https://login.mailchimp.com/release/1.1.12db68f65958dbea8011b2efdf4e026e5d28738e2/images/brand_assets/logos/mc-freddie-dark.svg' w={38} h={38} cursor={'pointer'} />
                            </Link>
                        </Box>

                        <Box w={{ base: '90%', sm: '90%', md: '90%', lg: '80%', xl: '50%', '2xl': '50%' }} m={'auto'}>
                            <Box w={'100%'}>
                                <Heading as={'h1'} textAlign={'unset !important'} fontFamily={'"Means Web",Georgia,Times,"Times New Roman",serif'} fontWeight={'500'} fontSize={'2.5rem'} lineHeight={1.1} color={'#241c15'} mb={'15px'}>
                                    Sign up for Mailchimp</Heading>
                                <Box display={'flex'} columnGap={'5px'} fontSize={'1.3rem'}>
                                    <Text>Create a free account or</Text>
                                    <Link to={'/login'}><Text color={'teal.600'}>log in</Text></Link>
                                </Box>
                            </Box>

                            <Box w={'100%'}>
                                <FormControl>
                                    <Box mt={'25px'} w={'100%'}>
                                        <FormLabel color={'#241c15'} fontWeight={'500'} pb={'12px'} fontSize={'1.3rem'} lineHeight={'18px'}>Email</FormLabel>
                                        <Input type='email' value={email} onChange={e => setemail(e.target.value)} />
                                    </Box>

                                    <Box mt={'25px'} w={'100%'}>
                                        <FormLabel color={'#241c15'} fontWeight={'500'} pb={'12px'} fontSize={'1.3rem'} lineHeight={'18px'}>Username</FormLabel>
                                        <Input type='text' value={username} onChange={e => setusername(e.target.value)} />
                                    </Box>

                                    <Box mt={'25px'} w={'100%'}>
                                        <FormLabel color={'#241c15'} fontWeight={'500'} pb={'12px'} fontSize={'1.3rem'} lineHeight={'18px'}>Password</FormLabel>
                                        <Input type='password' value={password} onChange={e => setpassword(e.target.value)} />
                                    </Box>

                                    <Box mt={'25px'} w={'100%'} display={'flex'} columnGap={'10px'}>
                                        <Checkbox size={'lg'}></Checkbox>
                                        <Text fontSize={'0.8rem'}> I don't want to receive emails about Mailchimp and related Intuit product and feature updates, marketing best practices, and promotions from Mailchimp. </Text>
                                    </Box>

                                    <Box mt={'25px'} w={'100%'}>
                                        <Text fontSize={'0.8rem'}>By creating an account, you agree to our Terms and have read and acknowledge the Global Privacy Statement.</Text>
                                    </Box>

                                    <Box mt={'40px'} w={'100%'}>
                                        <Button onClick={handleSubmit} bg={'#007C89'} color={'white'} borderRadius={'3px'} p={'20px'} fontSize={'1.2rem'} _hover={{ bg: '#015e69' }}>Sign Up</Button>
                                    </Box>

                                    <Box mt={'40px'} w={'100%'}>
                                        <Text fontSize={'0.8rem'}>Invisible reCAPTCHA by Google Privacy Policy and Terms of Use.</Text>
                                    </Box>
                                </FormControl>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default SignUp;