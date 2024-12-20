import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import { useMode } from '../pages/ModeContext';  // Import the useMode hook to access the context

export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - xvar(--spinner-size))"
  />
)

export const DogContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    // mt={['-20px', '-60px', '-120px']}
    // mb={['-40px', '-140px', '-200px']}
    w={[400, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
    bg='#F4EDE4' // Set background color to #F3F3F3

    borderRadius='30px'
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
