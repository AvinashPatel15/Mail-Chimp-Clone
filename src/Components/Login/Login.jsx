import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Heading, Image, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // getting email and password
    const userName = localStorage.getItem('email') ? localStorage.getItem('email') : 'admin@gmail.com';
    const userPassword = localStorage.getItem('password') ? localStorage.getItem('password') : 'admin';

    // Submit Function
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === userName && password === userPassword) {
            alert('Login success')
            navigate('/');
        }
        else {
            alert('Invalid Email OR Password')
        }
    }

    return (
        <>
            <Box backgroundImage="url('https://cdn-images.mailchimp.com/billboards/phpza0iJx.jpeg')" w={'100%'}>
                <Box p={'1rem'} bg={'white'} w={{ base: '100%', sm: '100%', md: '100%', lg: '50%', xl: '35%', '2xl': '35%' }} ml={{ base: '0px', sm: '0px', md: '0px', lg: '20px', xl: '20px', '2xl': '20px' }}>
                    <Box w={'100%'} mb={'8rem'}>
                        <Link to={'/'}>
                            <Image src='https://login.mailchimp.com/release/1.1.12db68f65958dbea8011b2efdf4e026e5d28738e2/images/brand_assets/logos/mc-freddie-dark.svg' w={38} h={38} cursor={'pointer'} />
                        </Link>
                    </Box>

                    <Box w={'100%'}>
                        <Heading as={'h1'} textAlign={'unset !important'} fontFamily={'"Means Web",Georgia,Times,"Times New Roman",serif'} fontWeight={'500'} fontSize={'3rem'} lineHeight={1.1} color={'#241c15'} mb={'15px'}>Log In</Heading>
                        <Box display={'flex'} columnGap={'5px'}>
                            <Text>Need a Mailchimp account?</Text>
                            <Link to={'/signup'}><Text color={'teal.600'} textDecoration={'underline'}>Create an account</Text></Link>
                        </Box>
                    </Box>

                    <Box w={'100%'}>
                        <FormControl>
                            <Box mt={'25px'} w={'100%'}>
                                <FormLabel color={'#241c15'} fontWeight={'500'} pb={'12px'} fontSize={'1.3rem'} lineHeight={'18px'}>Username or Email</FormLabel>
                                <Input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                            </Box>
                            <Box mt={'25px'} w={'100%'}>
                                <FormLabel color={'#241c15'} fontWeight={'500'} pb={'12px'} fontSize={'1.3rem'} lineHeight={'18px'}>Password</FormLabel>
                                <Input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                            </Box>
                            <Box mt={'40px'} w={'100%'}>
                                <Button type='submit' onClick={handleSubmit} bg={'#007C89'} color={'white'} borderRadius={'3px'} w={'100%'} fontSize={'1.2rem'} _hover={{ bg: '#015e69' }}>Log In</Button>
                            </Box>
                        </FormControl>
                    </Box>

                    <Box w={'100%'} mt={'50px'} pb={'15px'}>
                        <Text>©2001–2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group, LLC. Cookie Preferences, Privacy, and Terms.</Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Login;