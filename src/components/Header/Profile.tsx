import { Flex, Box, Text, Avatar } from '@chakra-ui/react'
interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {

    return (
        <Flex align='center'>
            {showProfileData && (<Box mr='4' textAlign='right'>
                <Text>Pedro</Text>
                <Text color='gray.300' fontSize='small'>pedro.lg.oliveira@edu.ufes.br</Text>
            </Box>)}
            <Avatar size='md' name='Pedro' src="https://avatars.githubusercontent.com/u/101609712?s=40&v=4" />
        </Flex>
    )

}