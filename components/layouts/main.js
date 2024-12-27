import { Box, Container, Text } from '@chakra-ui/react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import Image from 'next/image'
import Section from '../section'
import { useMode } from '../../pages/ModeContext' // Import the custom hook

const Main = ({ children, router }) => {
  const { mode, setMode } = useMode() // Get mode and setMode (renamed changeMode) from context

  const LazyVoxelDog = dynamic(
    () => {
      if (mode === 2) {
        return import(`../voxel-dog2`)
      } else if (mode === 3) {
        return import(`../voxel-dog3`)
      }
      return import(`../voxel-dog`)
    },
    {
      ssr: false,
      loading: () => <VoxelDogLoader />
    }
  )

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Farcraft" />
        <meta name="author" content="Farcraft" />
        <meta name="author" content="Farcraft" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Farcraft" />
        <meta name="og:title" content="Farcraft" />
        <meta property="og:type" content="website" />
        <title>Farcraft</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container
        maxW={{ lg: '750', md: '750', sm: '450', base: '370' }}
        pt={14}
      >
        <Box
          display="flex"
          justifyContent="center"
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          textAlign="center"
        >
          <Section delay={0.2}>
            <Image
              src="/images/far.png"
              alt="Profile image"
              width={1920} // Base width (can match your design)
              height={1080} // Adjust to match aspect ratio
            />
          </Section>
        </Box>
        <Section delay={0.3}>
          <Container
            pt={0}
            display="flex"
            alignItems="flex-start"
            mt={2}
            justifyContent="center"
          >
            <Box mr={{ lg: 6, md: 6, sm: 3, base: 2 }}>
              <LazyVoxelDog />
            </Box>

            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Box
                bg="#f4ede3"
                w={{ lg: '80px', md: '80px', sm: '50px', base: '44px' }} // Fixed width
                h={{ lg: '80px', md: '80px', sm: '50px', base: '45px' }} // Fixed height
                mb={4}
                border={mode === 1 ? '2px solid #000' : 'none'}
                borderRadius="md"
                overflow="hidden"
                position="relative" // Required for layout="fill"
                onClick={() => setMode(1)}
                cursor="pointer"
                _hover={{ filter: 'brightness(0.9)' }}
              >
                <Box
                  ml={{ lg: '7px', md: '7px', sm: '7px', base: '5px' }}
                  mt={{ lg: '7px', md: '7px', sm: '7px', base: '5px' }}
                  w={{ lg: '60px', md: '60px', sm: '35px', base: '30px' }} // Fixed width
                  h={{ lg: '60px', md: '60px', sm: '35px', base: '30px' }} // Fixed height
                  position="relative" // Required for layout="fill"
                  display="flex" // Use flex to center the content
                  alignItems="center" // Vertically centers the image
                  justifyContent="center" // Horizontally centers the image
                >
                  <Image
                    src="/images/normal.png"
                    alt="Profile image"
                    fill={true}
                  />
                </Box>
              </Box>
              <Box
                bg="#f4ede3"
                w={{ lg: '80px', md: '80px', sm: '50px', base: '44px' }} // Fixed width
                h={{ lg: '80px', md: '80px', sm: '50px', base: '45px' }} // Fixed height
                mb={4}
                _hover={{ filter: 'brightness(0.9)' }}
                border={mode === 2 ? '2px solid #000' : 'none'}
                borderRadius="md"
                overflow="hidden"
                position="relative" // Required for layout="fill"
                onClick={() => setMode(2)}
                cursor="pointer"
              >
                <Box
                  ml={{ lg: '14px', md: '14px', sm: '10px', base: '7px' }}
                  mt={{ lg: '14px', md: '14px', sm: '10px', base: '7px' }}
                  w={{ lg: '50px', md: '50px', sm: '30px', base: '30px' }} // Fixed width
                  h={{ lg: '50px', md: '50px', sm: '30px', base: '30px' }} // Fixed height
                  position="relative" // Required for layout="fill"
                  display="flex" // Use flex to center the content
                  alignItems="center" // Vertically centers the image
                  justifyContent="center" // Horizontally centers the image
                >
                  <Image
                    src="/images/leseh.png"
                    alt="Profile image"
                    fill={true}
                  />
                </Box>
              </Box>
              <Box
                bg="#f4ede3"
                w={{ lg: '80px', md: '80px', sm: '50px', base: '44px' }} // Fixed width
                h={{ lg: '80px', md: '80px', sm: '50px', base: '45px' }} // Fixed height
                mb={4}
                _hover={{ filter: 'brightness(0.9)' }}
                border={mode === 3 ? '2px solid #000' : 'none'}
                borderRadius="md"
                overflow="hidden"
                position="relative" // Required for layout="fill"
                onClick={() => setMode(3)}
                cursor="pointer"
              >
                <Box
                  ml={{ lg: '14px', md: '14px', sm: '8px', base: '7px' }}
                  mt={{ lg: '14px', md: '14px', sm: '8px', base: '7px' }}
                  w={{ lg: '50px', md: '50px', sm: '35px', base: '30px' }} // Fixed width
                  h={{ lg: '50px', md: '50px', sm: '35px', base: '30px' }} // Fixed height
                  position="relative" // Required for layout="fill"
                  display="flex" // Use flex to center the content
                  alignItems="center" // Vertically centers the image
                  justifyContent="center" // Horizontally centers the image
                >
                  <Image
                    src="/images/lipet.png"
                    alt="Profile image"
                    fill={true}
                  />
                </Box>
              </Box>
            </Box>
          </Container>
        </Section>
        <Section delay={0.5}>
          <Container
            maxW={{ lg: '750', md: '750', sm: '450', base: '370' }}
            pt={0}
          >
            <Box
              ml={{ lg: '0', md: '0', sm: '0', base: '-3' }}
              mr={{ lg: '95', md: '95', sm: '65', base: '40px' }}
            >
              <Text
                color={'black'}
                fontSize={{ lg: 16, md: 16, sm: 12, base: 12 }}
                fontWeight={400}
                mt={4}
                textAlign={'justify'}
                lineHeight={1.5}
              >
                Transform your workspace with our Compact Laptop Table—perfect
                for your laptop, PC, or gadgets!, it features a space-saving,
                lightweight design with adjustable heights and angles for
                maximum comfort and ergonomics.
              </Text>
            </Box>
          </Container>
        </Section>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
