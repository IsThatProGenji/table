import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize={{ base: 'xs', sm: 'xs', md: 'sm' }} color={'black'} mt={8} mr={20}>
      &copy; {new Date().getFullYear()} Farcraft. All Rights Reserved. Inspired by www.craftz.dog
    </Box>
  )
}

export default Footer
