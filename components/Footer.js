import Image from 'next/image';

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
          <ul>
            <li>Find a Store</li>
            <li>Become a Member</li>
            <li>Send Us Feedback</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>GET HELP</h4>
          <ul>
            <li>Order Status</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>ABOUT US</h4>
          <ul>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>SOCIAL</h4>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>YouTube</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Zali Industry, Inc. All Rights Reserved</p>
          <div className="footer-policies" style={{ display: 'flex', gap: '1rem' }}>
            <span>Guides</span>
            <span>Terms of Sale</span>
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
