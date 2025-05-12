import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function ToogleProjectButton({ isMobile, isOpen, onToggleSidebar }) {
  return (
    <div className="p-4 relative">
      {isMobile && (
        <button
          onClick={onToggleSidebar}
          className=" absolute top-2 right-2 z-10 bg-white p-2 rounded-full shadow-md bg-red-300"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      )}
    </div>
  );
}

export default ToogleProjectButton;
