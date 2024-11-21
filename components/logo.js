import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 0px;
  line-height: 20px;
  padding: 10px;


`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Image
          src="logo.svg" // Path to the SVG
          alt="Logo"
          width={100}
          height={10}
        />
        {/* <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c, sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Takuya Matsuyama
        </Text> */}
      </LogoBox>
    </Link>
  );
}

export default Logo;
