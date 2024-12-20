import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, Text } from '@chakra-ui/react'

const ThemeToggleButton = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <AnimatePresence mode='wait' initial={false}>
     <IconButton
      aria-label="Toggle theme"
      colorScheme={'white'}
      backgroundColor={'black'}
      borderRadius="full"  // This adds a circular border radius
      icon={
        <Text fontWeight="bold" fontSize="10">
          Order Now
        </Text>
      }
      onClick={toggleColorMode}
      px={5}
    

    />

    </AnimatePresence>
  )
}

export default ThemeToggleButton
