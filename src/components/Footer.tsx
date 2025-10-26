const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <h3 className="text-xl font-bold text-primary">Anubhooti</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Explore India's Rich Cultural Heritage
            </p>
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>© 2025 Anubhooti. Celebrating Unity in Diversity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
