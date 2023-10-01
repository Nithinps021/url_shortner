
import {Navbar,Typography} from "./components"
export function NavbarDark() {
    return (
        <Navbar
            variant="gradient"
            className="sticky m-auto top-0 z-10 h-max max-w-auto mt-2 rounded-2xl py-2 px-4 lg:px-8 lg:py-4 shadow-xl bg-gradient-to-r from-blue to-blueGrotto "
        >
            <div className="flex flex-wrap items-center justify-between text-white">
                <Typography
                    as="a"
                    color="white"
                    href="#"
                    variant="h4"
                    className="mr-4 ml-2 cursor-pointer py-1.5"
                >
                    ShortUrl
                </Typography>
            </div>
        </Navbar>
    );
}