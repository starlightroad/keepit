import Link from "next/link";

import Image from "next/image";

import { Button, Container, Flex, Heading, Text } from "@radix-ui/themes";

import { APP_NAME } from "@/lib/constants";

export default function Home() {
  return (
    <Container px="4">
      <main>
        <Flex
          direction={{
            initial: "column",
            md: "row",
          }}
          align="center"
          pt="9"
        >
          <Flex
            direction="column"
            height={{
              sm: "400px",
            }}
            justify="center"
          >
            <Heading
              size={{
                initial: "8",
                sm: "9",
              }}
              weight="medium"
              align={{
                initial: "center",
                sm: "left",
              }}
            >
              Your bookmarks easily accessible wherever you go
            </Heading>
            <Text
              as="p"
              size="5"
              my="4"
              color="gray"
              align={{
                initial: "center",
                sm: "left",
              }}
            >
              {APP_NAME} stores your bookmarks in a safe place readily available
              when you need it.
            </Text>
            <Flex
              direction={{
                initial: "column",
                sm: "row",
              }}
              gap="2"
              align="center"
            >
              <Button type="button" radius="full" size="3" asChild>
                <Link href="#">Sign in</Link>
              </Button>
              <Button
                type="button"
                radius="full"
                size="3"
                variant="ghost"
                asChild
                style={{
                  margin: 0,
                  padding: "0 16px",
                  height: 40,
                }}
              >
                <Link href="#">Create account</Link>
              </Button>
            </Flex>
          </Flex>
          <Image
            src="/human-running.png"
            alt="A human running with coffee"
            width={336}
            height={400}
          />
        </Flex>
      </main>
    </Container>
  );
}
