import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-col">
          <div className="footer-logo" style={{ marginBottom: '1.5rem' }}>
            <Image 
              src="/logo.svg" 
              alt="Zali Industry" 
              width={100} 
              height={40} 
              className="object-contain"
            />
          </div>
          <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '2rem', maxWidth: '280px' }}>
            A materials laboratory dedicated to the science of human movement and performance apparel.
          </p>
          <div className="footer-socials" style={{ display: 'flex', gap: '1.25rem' }}>
             <a href="#" className="social-icon-link" aria-label="Instagram">
               <FaInstagram size={20} />
             </a>
             <a href="#" className="social-icon-link" aria-label="WhatsApp">
               <FaWhatsapp size={20} />
             </a>
             <a href="#" className="social-icon-link" aria-label="Facebook">
               <FaFacebookF size={18} />
             </a>
             <a href="#" className="social-icon-link" aria-label="LinkedIn">
               <FaLinkedinIn size={18} />
             </a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>SHOP</h4>
          <ul>
            <li><Link href="/products">ALL PRODUCTS</Link></li>
            <li><Link href="/products?category=t-shirts">T-SHIRTS</Link></li>
            <li><Link href="/products?category=shorts">SHORTS</Link></li>
            <li><Link href="/products?category=sportswear">SPORTSWEAR</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>RESOURCES</h4>
          <ul>
            <li><Link href="/fabrics">TECHNICAL FABRICS</Link></li>
            <li><Link href="/how-it-works">PRODUCTION PROCESS</Link></li>
            <li><Link href="/categories">CATEGORIES</Link></li>
            <li><Link href="/cart">QUOTE LIST</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>COMPANY</h4>
          <ul>
            <li><Link href="/about">OUR STORY</Link></li>
            <li><Link href="/contact">CONTACT ENQUIRIES</Link></li>
            <li><Link href="/about#manufacturing">SIALKOT HUB</Link></li>
            <li><Link href="#">CAREERS (SOON)</Link></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>© 2026 ZALI INDUSTRY, INC. ALL RIGHTS RESERVED</p>
          <div className="footer-policies" style={{ display: 'flex', gap: '1rem' }}>
            <span>GUIDES</span>
            <span>TERMS OF SALE</span>
            <span>TERMS OF USE</span>
            <span>PRIVACY POLICY</span>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
