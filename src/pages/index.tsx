import { Flex, Button, Stack } from "@chakra-ui/react";
import Input from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <Input name="name" label="E-mail" type="email" />
          <Input name="password" label="Senha" type="password" />
        </Stack>
        <Button type="submit" colorScheme="pink" mt={6} size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
