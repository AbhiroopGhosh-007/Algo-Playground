export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand + Description */}
        <div className="footer-section">
          <h2 className="footer-logo">DSA DOMAIN</h2>
          <p className="footer-text">
            Master data structures, algorithms, and interview patterns with our AI-powered
            recommendation platform.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/Home">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/update-scores">Update Scores</a></li>
            <li><a href="/recommendations">Recommendations</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h3 className="footer-title">Resources</h3>
          <ul className="footer-links">
            <li><a href="#">DSA Roadmap</a></li>
            <li><a href="#">Interview Tips</a></li>
            <li><a href="#">Top 150 Questions</a></li>
            <li><a href="#">Mock Tests</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3 className="footer-title">Connect</h3>
          <ul className="footer-links">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Email Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DSA Domain. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
