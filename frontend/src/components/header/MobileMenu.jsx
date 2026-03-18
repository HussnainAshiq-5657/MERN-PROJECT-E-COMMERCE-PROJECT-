import HeaderData from './headerData';

function MobileMenu({setOpen}) {
  return (
    <>
      <div className="md:hidden flex flex-col gap-2">
        <HeaderData onClick={()=>setOpen(false)} />
      </div>
    </>
  );
}

export default MobileMenu;
