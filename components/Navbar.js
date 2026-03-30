import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { FaListUl, FaSearch, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { products } from "./ProductData";

const CATEGORIES = [
  { label: "All Products", href: "/products" },
  { label: "T-Shirts", href: "/products?category=t-shirts" },
  { label: "Shorts", href: "/products?category=shorts" },
  { label: "Sportswear", href: "/products?category=sportswear" },
  { label: "Accessories", href: "/products?category=accessories" },
];

const NAV_LINKS = [
  { label: "Fabrics", href: "/fabrics" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "#" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const dropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setMobileProductsOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Handle Search Logic
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.id.toString().includes(query)
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu or search is open
  useEffect(() => {
    if (mobileMenuOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen, searchOpen]);

  const isActive = (href) => {
    if (href === "/products") return pathname.startsWith("/products");
    return pathname === href;
  };

  return (
    <>
      <header className={`navbar-header ${scrolled ? "scrolled" : "transparent"}`}>
        <div className="navbar-container">
          {/* Main Grid Layout */}
          <div className="navbar-grid">
            
            {/* LEFT: Navigation (Desktop) + Mobile Menu Button */}
            <div className="navbar-section-left">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="mobile-menu-btn"
                aria-label="Open Menu"
                aria-expanded={mobileMenuOpen}
              >
                <FaBars size={16} />
              </button>

              {/* Desktop Navigation */}
              <nav className="desktop-nav">
                <div className="nav-pill-container">
                  {/* Products Dropdown */}
                  <div className="dropdown-relative" ref={dropdownRef}>
                    <button
                      onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                      className={`nav-pill-link ${pathname.startsWith("/products") ? "active" : "inactive"}`}
                      aria-expanded={productsDropdownOpen}
                      aria-haspopup="true"
                    >
                      Products
                      <FaChevronDown 
                        size={10} 
                        className={`transition-transform ${productsDropdownOpen ? "rotate-180" : ""}`} 
                      />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={`dropdown-menu-container ${productsDropdownOpen ? "open" : "closed"}`}>
                      <div style={{ padding: '0.25rem 0' }}>
                        {CATEGORIES.map((cat) => (
                          <Link
                            key={cat.href}
                            href={cat.href}
                            onClick={() => setProductsDropdownOpen(false)}
                            className="dropdown-menu-link"
                          >
                            {cat.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Other Nav Links */}
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`nav-pill-link ${isActive(link.href) ? "active" : "inactive"}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            {/* CENTER: Logo */}
            <div className="navbar-section-center">
              <Link href="/" className="navbar-logo-container flex items-center justify-center">
                <Image 
                  src="/logo.svg" 
                  alt="Zali Industry" 
                  width={120} 
                  height={45} 
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* RIGHT: Action Icons */}
            <div className="action-icon-container">
              <button 
                aria-label="Search" 
                className="action-icon-btn"
                onClick={() => setSearchOpen(true)}
              >
                <FaSearch size={15} />
              </button>
              
              <Link href="/cart" aria-label="Quote Request List" className="action-icon-btn">
                <FaListUl size={15} />
                <span className="action-icon-badge">0</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* SEARCH OVERLAY */}
      <div className={`search-overlay-wrapper ${searchOpen ? "open" : "closed"}`}>
        <div className="search-backdrop" onClick={() => setSearchOpen(false)} />
        <div className="search-modal">
            <div className="search-modal-header">
                <div className="search-input-group">
                    <FaSearch className="search-input-icon" />
                    <input 
                        type="text" 
                        placeholder="Search gear by name or ID..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus={searchOpen}
                    />
                </div>
                <button className="search-modal-close" onClick={() => setSearchOpen(false)}>
                    <FaTimes size={18} />
                </button>
            </div>
            
            <div className="search-results-list">
                {searchQuery.trim() === "" ? (
                  <div className="search-state-msg">Enter product name or ID to search our collection</div>
                ) : searchResults.length > 0 ? (
                  searchResults.map(p => (
                    <Link 
                      key={p.id} 
                      href={`/product?id=${p.id}`} 
                      className="search-result-row"
                      onClick={() => setSearchOpen(false)}
                    >
                      <img src={p.image} alt={p.name} className="search-result-img" />
                      <div className="search-result-details">
                        <div className="search-result-name">{p.name}</div>
                        <div className="search-result-id">ID: #{p.id}</div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="search-state-msg">No products match your search</div>
                )}
            </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-overlay-wrapper ${mobileMenuOpen ? "open" : "closed"}`}>
        {/* Backdrop */}
        <div className="mobile-backdrop" onClick={() => setMobileMenuOpen(false)} />
        
        {/* Menu Panel */}
        <div className={`mobile-panel ${mobileMenuOpen ? "open" : "closed"}`}>
          {/* Header */}
          <div className="mobile-panel-header">
            <Link href="/" className="navbar-logo-container" onClick={() => setMobileMenuOpen(false)}>
              <Image 
                src="/logo.svg" 
                alt="Zali Industry" 
                width={120} 
                height={45} 
                className="object-contain"
              />
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="mobile-close-btn" aria-label="Close Menu">
              <FaTimes size={16} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="mobile-nav-container">
            {/* Mobile Products Accordion */}
            <div className="mobile-accordion-container">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="mobile-accordion-btn"
                aria-expanded={mobileProductsOpen}
              >
                <span className={`mobile-accordion-label ${pathname.startsWith("/products") ? "active-text" : "text-black"}`}>
                  Products
                </span>
                <div className={`mobile-accordion-icon-wrapper ${mobileProductsOpen ? "open" : ""}`}>
                  <FaChevronDown size={12} className={mobileProductsOpen ? "active-icon" : "inactive-icon"} />
                </div>
              </button>
              
              <div className={`mobile-accordion-content ${mobileProductsOpen ? "open" : "closed"}`}>
                <div className="mobile-accordion-inner">
                  <div className="mobile-accordion-links">
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="mobile-accordion-link"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Other Links */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-link ${isActive(link.href) ? "active" : "inactive"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
