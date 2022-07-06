import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav() {
    return (
        <Stack spacing='12' align='flex-start'  position='absolute' >
            <NavSection title='GERAL'>
                <NavLink children='dashboard' Icon={RiDashboardLine} href='/dashboard'/>
                <NavLink children='Usuários' Icon={RiContactsLine} href='/users'/>
            </NavSection>
            <NavSection title='AUTOMAÇÃO' >
                <NavLink children='dashboard' Icon={RiInputMethodLine} href='/forms'/>
                <NavLink children='Usuários' Icon={RiGitMergeLine}  href='/automation'/>
            </NavSection>
        </Stack>
    )
}