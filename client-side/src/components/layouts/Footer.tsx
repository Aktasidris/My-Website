import Social from "../../components/common/Social";
function Footer() {
  return (
    <footer className="mt-8 p-4 text-sm text-center text-gray-400">
      <div className="mb-2 flex justify-center">
        <Social direction="row"></Social>
      </div>
      © 2025 İdris Aktas. All rights reserved.
    </footer>
  );
}

export default Footer;
