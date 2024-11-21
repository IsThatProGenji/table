import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import NavBar from '../navbar';
import Footer from '../footer';
import VoxelDogLoader from '../voxel-dog-loader';
import Image from 'next/image';
import Section from '../section';
import { useMode } from '../../pages/ModeContext';  // Import the custom hook


const Main = ({ children, router }) => {
  const { mode, setMode } = useMode();  // Get mode and setMode (renamed changeMode) from context
  const LazyVoxelDog = dynamic(() => {
    return import(`../voxel-dog${mode === 2 ? 's' : ''}`); // Conditionally import voxel-dog or voxel-dogs
  }, {
    ssr: false,
    loading: () => <VoxelDogLoader />,
  });
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

      <Container maxW="100%" pt={14}>
        <Box flexGrow={1} position="relative">
          <Box display="flex" justifyContent="center" flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
            <Section delay={0.2}>
              <Image src="/images/far.png" alt="Profile image" width="700" height="100" />
            </Section>
          </Box>
        </Box>

        <Box display="flex" alignItems="flex-start" mt={8} justifyContent="center">
          <Box mr={6}>
            <LazyVoxelDog />
          </Box>

          <Box display="flex" flexDirection="column" alignItems="flex-start" spacing={4}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Box
                key={num}
                bg={mode === num ? 'teal.700' : 'teal.500'}  // Highlight the box based on current mode
                w={'70px'}
                my={2}
                p={4}
                height={'60px'}
                borderRadius="md"
                color="white"
                textAlign="center"
                lineHeight="60px"
                onClick={() => setMode(num)}  // Change mode when clicked
                cursor="pointer"
              >
                {num}
              </Box>
            ))}
          </Box>
        </Box>

        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
