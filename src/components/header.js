

function AllHeader({name, number, color, border, colorNumber, className}) {
  return (
     <button className={`${color} ${border}  lineBottom relative hover:text-textPurple flex gap-2 group px-4 text-center justify-center ${className} `}> {name} 
        <p className={` lineBottom1 rounded-full w-6 h-auto bg-subtilGray text-white text-center group-hover:bg-textPurple ${colorNumber} `}>{number}</p>
     </button>
          
              
  
  );

}

// group-hover:border-b group-hover:border-textPurple

function Header() {
  return (
    <header className={` w-full border-b relative flex py-3 border-bgGray2 `}>
      
      <AllHeader name="All" number = "5" color="text-textPurple" border="" colorNumber="bg-textPurple" className=" after:absolute after:top-9 after:content-[''] after:w-full after:h-0.5 after:bg-textPurple" />
      <AllHeader name="To improve" number = "5" color="text-subtilGray" border="border-none" colorNumber=""/>
      <AllHeader name="Pending" number = "5" color="text-subtilGray" border="border-none" colorNumber=""/>
      <AllHeader name="To review" number = "5" color="text-subtilGray" border="border-none" colorNumber=""/>
      <AllHeader name="Done" number = "5" color="text-subtilGray" border="border-none" colorNumber=""/>
      {/* {AllHeader(["To improve"], 5, "text-subtilGray", "hover:border-b", "bg-subtilGray", "hover:text-textPurple")}  
      {AllHeader(["Pending"], 5, "text-subtilGray", "hover:border-b", "bg-subtilGray")}  
      {AllHeader(["To review"], 5, "text-subtilGray", "hover:border-b", "bg-subtilGray")}  
      {AllHeader(["Done"], 5, "text-subtilGray", " hover:border-b", "bg-subtilGray")}   */}
    </header>
   
  );
}

export default Header;