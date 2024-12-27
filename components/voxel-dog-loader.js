import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - xvar(--spinner-size))"
    color="black"
  />
)

export const DogContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    // mt={['-20px', '-60px', '-120px']}
    // mb={['-40px', '-140px', '-200px']}

    // maxW={{ lg: '750', md: '500', sm: '500', base: '500' }}
    w={{ lg: 610, md: 620, sm: 350, base: 290 }}
    h={{ lg: 640, md: 650, sm: 400, base: 330 }}
    position="relative"
    bg="#F4EDE4" // Set background color to #F3F3F3
    borderRadius="30px"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  )
}

export default Loader
