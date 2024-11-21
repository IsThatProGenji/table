import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      h={'55px'}
     
      sx={{
        backdropFilter: ['blur(10px)', 'blur(10px)', 'none', 'none'] // Apply blur on small screens only
      }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="100%"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5} mt={4}>
        
            <Logo />
    
        </Flex>

      
        <Box flex={1} align="right">
          <ThemeToggleButton />

         
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
