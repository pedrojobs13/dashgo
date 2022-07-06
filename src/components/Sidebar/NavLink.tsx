import { Link as ChakraLink, Icon, Text, LinkProps as chakraLinkProps } from '@chakra-ui/react'
import Link from 'next/link'
import { ElementType } from 'react'
import { ActiveLink } from '../ActiveLink'
interface NavLinkProps extends chakraLinkProps {
    Icon: ElementType,
    children: string,
    href: string
}

export function NavLink({ Icon, children, href, ...rest }: NavLinkProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display='flex' alignItems='center' {...rest}>
                <Icon as={Icon} font-Size='20' />
                <Text ml='4' fontWeight='medium' >{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}