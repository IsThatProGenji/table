import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, Text } from '@chakra-ui/react'

const ThemeToggleButton = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <IconButton
        aria-label="Order Now"
        colorScheme={'white'}
        backgroundColor={'black'}
        borderRadius="full" // This adds a circular border radius
        icon={
          <Text fontWeight="bold" fontSize="10" color={'white'}>
            Order Now
          </Text>
        }
        onClick={() => window.open('https://msha.ke/farcraft', '_blank')}
        px={5}
        mr={2}
      />
    </AnimatePresence>
  )
}

export default ThemeToggleButton
