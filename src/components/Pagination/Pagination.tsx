import { Stack, Button } from '@chakra-ui/react'
interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
    onPageChange: (page: number) => void;
}
export function PaginationPage({ isCurrent = false, number, onPageChange }: PaginationItemProps) {

    if (isCurrent == true) {
        return (
            <Button
                size='sm'
                fontSize='xs'
                colorScheme='pink'
                disabled
                _disabled={{
                    bg: 'pink.300',
                    cursor: 'default'
                }}
            >{number}</Button>
        )
    }
    else {
        return (
            <Button
                size='sm'
                fontSize='xs'
                width='4'
                bg='gray.700'
                _hover={{
                    bg: 'gray.500'
                }}
                onClick={() => onPageChange(number)}
            >{number}</Button>
        )
    }
}