const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-xs text-center p-6 primary-text">
      <div>
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">
          CC BY-NC-SA 4.0
        </a>
        &ensp;{currentYear} &copy; Jaywhen
      </div>
    </footer>
  );
}

export default Footer;
