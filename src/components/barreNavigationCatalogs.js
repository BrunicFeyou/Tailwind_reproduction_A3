

function NavBarCatalogsPages () {
    return (
        <nav className = "w-full flex justify-between	px-4 h-16 border-b border-inherit	items-center ">
                <button className=" font-sans text-2xl tracking-wider	font-semibold ">My Catalogs</button>
                <button className=" bg-purple flex h-auto w-auto h-7 text-white rounded-md items-center px-4 py-2 text-sm gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                    Create Catalog
                </button>
            </nav>
    )
}

export default NavBarCatalogsPages;