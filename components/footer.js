import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" color={'black'} mt={8}>
      &copy; {new Date().getFullYear()} Farcraft. All Rights Reserved.
    </Box>
  )
}

export default Footer
