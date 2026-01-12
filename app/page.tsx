export default function Home() {
  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-left">
          <div className="nav-logo">🎓</div>
          <span>Campus Connect</span>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </nav>
        <div className="nav-cta">
          <button className="btn btn-outline">Log in</button>
          <button className="btn btn-primary">Join campus</button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-left">
          <div className="hero-pill">
            Verified students · Anonymous profiles · Safe connections
          </div>
          <h1>
            Connect with your campus{" "}
            <span className="hero-highlight">anonymously</span>.
          </h1>
          <p className="hero-sub">
            Real students, real vibes. Chat, confess, match and discover your{" "}
            <strong>secret admirers</strong> — all without revealing your
            identity until you&apos;re ready.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Start chatting</button>
            <button className="btn btn-outline">How it works</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="phone-mock">
            <div className="phone-screen">
              <div className="phone-header">
                <span>Anonymous chat · A1</span>
                <div className="status-dot" />
              </div>
              <div className="chat-bubble them">
                Hey! Nice to meet someone from the same college 👋
              </div>
              <div className="chat-bubble me">
                Same! CS major here. How&apos;s college treating you so far?
              </div>
              <div className="chat-bubble them">
                Pretty intense ngl… Data Structures is no joke 😅
                <div className="chat-meta">2:36 PM · identity hidden</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN APP SHELL */}
      <section className="app-shell" id="features">
        {/* Left: students list */}
        <aside className="card">
          <div className="card-header">
            <h2 style={{ fontSize: "15px" }}>Online students</h2>
            <span className="tag">✅ College verified</span>
          </div>

          <div className="students-list">
            <article className="student-card">
              <div className="student-avatar">A1</div>
              <div className="student-main">
                <div className="student-name">Anonymous Student #1</div>
                <div className="student-meta">
                  💻 Computer Science · Online
                </div>
                <div className="mood-pill">😊 Happy</div>
              </div>
            </article>

            <article className="student-card">
              <div className="student-avatar">A2</div>
              <div className="student-main">
                <div className="student-name">Anonymous Student #2</div>
                <div className="student-meta">💼 Business · Online</div>
                <div className="mood-pill">😎 Chill</div>
              </div>
            </article>

            <article className="student-card">
              <div className="student-avatar">A3</div>
              <div className="student-main">
                <div className="student-name">Anonymous Student #3</div>
                <div className="student-meta">⚙️ Engineering · Away</div>
                <div className="mood-pill">📚 Studying</div>
              </div>
            </article>
          </div>

          <div className="section-nav">
            <h2>Navigation</h2>
            <div className="feature-grid">
              <span className="feature-pill active">🚀 Anonymous Chat</span>
              <span className="feature-pill">💘 Match Room</span>
              <span className="feature-pill">📝 Confessions</span>
              <span className="feature-pill">💌 Secret Admirers</span>
              <span className="feature-pill">⚙️ Settings</span>
            </div>
          </div>
        </aside>

        {/* Right: active chat */}
        <main className="card">
          <div className="chat-area">
            <div className="chat-header-line">
              <div
                className="student-avatar"
                style={{ width: 32, height: 32, fontSize: 12 }}
              >
                A1
              </div>
              <div>
                <div
                  style={{ fontSize: "13px", fontWeight: 600 }}
                >
                  Anonymous Student #1
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--muted)",
                  }}
                >
                  🔒 Identity hidden · Building trust…
                </div>
              </div>
              <span
                style={{ marginLeft: "auto" }}
                className="pill-small"
              >
                5 min · 12 messages
              </span>
            </div>

            <div className="chat-log">
              <p>
                <strong>A1:</strong> Hey! Nice to meet someone from the same
                college.
              </p>
              <p>
                <strong>You:</strong> Totally agree! Have you taken Data
                Structures yet?
              </p>
              <p>
                <strong>A1:</strong> Yeah, it&apos;s intense but kind of fun
                once things click 😅
              </p>
            </div>

            <div className="chat-input-row">
              <input
                className="chat-input"
                placeholder="Type your anonymous message…"
              />
              <button className="emoji-btn">😊</button>
              <button className="send-btn">➤</button>
            </div>
          </div>
        </main>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="card">
        <h2 style={{ fontSize: "16px", marginBottom: "6px" }}>
          About Campus Connect
        </h2>
        <p
          style={{
            fontSize: "13px",
            color: "var(--muted)",
            maxWidth: "52rem",
          }}
        >
          Campus Connect is a safe, anonymous space built exclusively for college
          students. Verified with your college email, you can chat, confess,
          match and discover <strong>secret admirers</strong> without pressure.
          Reveal your identity only when you&apos;re comfortable.
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        © 2024 Campus Connect · Connecting students anonymously and safely ·{" "}
        <a href="#">Privacy</a> · <a href="#">Terms</a> ·{" "}
        <a href="#">Support</a>
      </footer>
    </div>
  );
}