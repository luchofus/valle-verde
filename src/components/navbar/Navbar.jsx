import ListSectionContainer from "../../pages/ListSectionContainer"
import InstagramWidget from "./InstagramWidget"

export const Navbar = () => {
    return (
        <header>
            <nav>
                <div style={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                        <InstagramWidget/>
                        <ListSectionContainer/>
                </div>
            </nav>
        </header>
    )
}