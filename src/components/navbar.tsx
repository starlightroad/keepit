"use client";

import NextLink from "next/link";

import { Container, Flex, Link } from "@radix-ui/themes";

import { APP_NAME, HEADER_HEIGHT } from "@/lib/constants";

export function Navbar() {
  const height = `${HEADER_HEIGHT}px`;

  return (
    <Flex justify="center" width="100%" height={height} asChild>
      <Container px="4">
        <header>
          <Link
            href="/"
            weight="medium"
            underline="none"
            color="gray"
            highContrast
            asChild
          >
            <NextLink href="/">{APP_NAME}</NextLink>
          </Link>
        </header>
      </Container>
    </Flex>
  );
}
