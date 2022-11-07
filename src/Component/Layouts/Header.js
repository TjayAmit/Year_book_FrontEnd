import { useState } from 'react';
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === 'light';
  const [display, changeDisplay] = useState('none');
  const navigate = useNavigate();
  return (
    <Flex>
      <Flex position="fixed" top="1rem" right="1rem" align="center">
        {/* Desktop */}
        <Flex display={['none', 'none', 'flex', 'flex']}>
          <Link href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </Link>

          <Link href="/about" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>

          <Link href="/contact" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </Link>
          <Link href="/yearbook" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Year Book"
              my={5}
              w="100%"
            >
              Year Book
            </Button>
          </Link>
          <Link href="/login" passHref>
            <Button
              onClick={() => {
                navigate('/login');
              }}
              as="a"
              variant="ghost"
              aria-label="Login"
              my={5}
              w="100%"
            >
              Login
            </Button>
          </Link>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
        <Switch color="green" isChecked={isLight} onChange={toggleColorMode} />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            color="blackAlpha.800"
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Link href="/" passHref>
            <Button
              as="a"
              aria-label="Home"
              my={5}
              w="100%"
              color="blackAlpha.800"
            >
              Home
            </Button>
          </Link>

          <Link href="/about" passHref>
            <Button
              as="a"
              aria-label="About"
              my={5}
              w="100%"
              color="blackAlpha.800"
            >
              About
            </Button>
          </Link>

          <Link href="/contact" passHref>
            <Button
              as="a"
              aria-label="Contact"
              my={5}
              w="100%"
              color="blackAlpha.800"
            >
              Contact
            </Button>
          </Link>
          <Link href="/yearbook" passHref>
            <Button
              as="a"
              aria-label="Year Book"
              my={5}
              w="100%"
              color="blackAlpha.800"
            >
              Year Book
            </Button>
          </Link>
          <Link href="/login" passHref>
            <Button
              as="a"
              aria-label="Login"
              my={5}
              w="100%"
              color="blackAlpha.800"
            >
              Login
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
