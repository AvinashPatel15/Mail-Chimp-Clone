import React from 'react';
import { Box, ListItem, UnorderedList } from '@chakra-ui/react';

function Footer() {
    return (
        <>
            <Box w={'100%'} bg={'#E7B75F'} pb={'100px'}>

                <Box w={'100%'} py={'3rem'} borderBottom={'1px solid rgba(36,28,21,.3)'}>
                    <Box w={'85%'} m={'auto'} px={'1.875rem'}>
                        <UnorderedList display={'flex'} justifyContent={'center'} flexWrap={'wrap'} listStyleType={'none'} justifyItems={'center'} alignItems={'center'}>
                            <ListItem whiteSpace={'nowrap'} display={'block'} fontSize={'1rem'} fontWeight={'500'} px={'1rem'}>Related Links:</ListItem>
                            <ListItem whiteSpace={'nowrap'} display={'block'} fontSize={'0.8rem'} textDecoration={'underline'} px={'1.5rem'} _hover={{cursor:'pointer',bg:'#FFE01B'}}>Start an Online eCommerce Business</ListItem>
                            <ListItem whiteSpace={'nowrap'} display={'block'} fontSize={'0.8rem'} textDecoration={'underline'} px={'1.5rem'} _hover={{cursor:'pointer',bg:'#FFE01B'}}>How to Sell Anything to Any Audience</ListItem>
                            <ListItem whiteSpace={'nowrap'} display={'block'} fontSize={'0.8rem'} textDecoration={'underline'} px={'1.5rem'} _hover={{cursor:'pointer',bg:'#FFE01B'}}>How to Build a Great Website</ListItem>
                        </UnorderedList>
                    </Box>
                </Box>

                <Box>
                    
                </Box>
            </Box>
        </>
    )
}

export default Footer;
