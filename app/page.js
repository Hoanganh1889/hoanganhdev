// ╔════════════════════════════════════════╗
// ║  hoanganhdev.id.vn — Portfolio Page    ║
// ║  Chỉnh sửa thông tin của bạn bên dưới ║
// ╚════════════════════════════════════════╝

// ─── DỮ LIỆU CỦA BẠN — SỬA Ở ĐÂY ───────
const DATA = {
  name: 'Nguyễn Hoàng Anh',
  title: 'Full-stack Developer',
  tagline: 'Mong muốn xây dựng web, phân tích yêu cầu, thiết kế hệ thống đến phát triển và triển khai sản phẩm.\nĐam mê UX/UI tốt và code sạch.',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'cualonghean2004@gmail.com',
  github: 'https://github.com/Hoanganh1889',   
  linkedin: 'https://www.linkedin.com/in/hoang-anh-nguyen-21b650403/', 
  facebook: 'https://www.facebook.com/hank.1801', 

  stats: [
    { num: '+84', label: '0586294633' },
    { num: 'Education', label: 'Đại học Công Nghệ Thành Phố Hồ Chí Minh (Hutech)' },
    { num: '∞', label: 'Thu Duc, Ho Chi Minh City' },
  ],

  skills: [
    { name: 'React', highlight: true },
    { name: 'Next.js', highlight: true },
    { name: 'TypeScript', highlight: true },
    { name: 'Node.js', highlight: false },
    { name: 'Tailwind CSS', highlight: false },
    { name: 'PostgreSQL', highlight: false },
    { name: 'Docker', highlight: false },
    { name: 'Figma', highlight: false },
    { name: 'Git', highlight: false },
    { name: 'REST API', highlight: false },
  ],

    projects:[
    {
      tag: 'Web App',
      title: 'Hệ thống phân tích dự án & giám sát công việc',
      desc: 'Xây dựng hệ thống quản lý công việc theo mô hình Kanban (Todo, In Progress, Done), hỗ trợ theo dõi tiến độ và phân tích hiệu suất dự án. Tích hợp dashboard thống kê giúp quản lý dễ dàng đánh giá tình trạng công việc.',
      stack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      link: 'https://github.com/Hoanganh1889/qldacntt.git',
    },
    {
      tag: 'Full-stack',
      title: 'Website bán hàng thời trang',
      desc: 'Phát triển hệ thống bán hàng với chức năng. Thiết kế giao diện responsive và tối ưu trải nghiệm người dùng.',
      stack: ['React.js', 'Node.js', 'RESTful API', 'MySQL'],
      link: 'https://github.com/Hoanganh1889',
    },
    {
      tag: 'Full-stack',
      title: 'Website bán hàng điện tử',
      desc: 'Xây dựng website thương mại điện tử cho sản phẩm điện tử. Tối ưu truy vấn dữ liệu giúp cải thiện tốc độ tải trang.',
      stack: ['React.js', 'Node.js', 'RESTful API', 'MySQL'],
      link: 'https://github.com/Hoanganh1889/Storeteck.git',
    },
    {
      tag: 'Web App',
      title: 'Hệ thống quản lý nhà hàng',
      desc: 'Phát triển hệ thống quản lý menu, đặt bàn và xử lý đơn hàng. Tích hợp các chức năng, dashboard quản lý giúp theo dõi hoạt động hiệu quả.',
      stack: ['Spring boot', 'MySQL', 'JavaScript', 'Bootstrap'],
      link: 'https://github.com/Hoanganh1889/HankFoods.git',
    },
  ],
}
// ─────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ── NAV ── */}
      <header>
        <div className="container">
          <nav>
            <a href="/" className="nav-logo">hoanganhdev</a>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section className="hero">
          <div className="container">
            <div className="badge">
              <div className="badge-dot" />
              <span className="badge-text">Open to work &amp; Collab</span>
            </div>

            <h1>
              {DATA.name}<br />
              <span className="accent">{DATA.title}.</span>
            </h1>

            <p className="subtitle">
              {DATA.tagline.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href={`mailto:${DATA.email}`} className="btn-secondary">Get In Touch</a>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── STATS ── */}
        <div className="container">
          <div className="stats">
            {DATA.stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <hr className="divider" />

        {/* ── ABOUT ── */}
        <section id="about">
          <div className="container">
            <div className="section-label">// About me</div>
            <div className="section-title">Who I Am</div>

            <div className="about-grid">
              <div className="about-text">
                <p>
                  Xin chào! Tôi là {DATA.name}, một developer đam mê xây dựng những sản phẩm web
                  có giao diện đẹp và trải nghiệm người dùng tốt.
                </p>
                <p>
                  Tôi có kinh nghiệm làm việc xuyên suốt từ phân tích yêu cầu, thiết kế hệ thống đến phát triển và triển khai sản phẩm. 
                  Bên cạnh đó, tôi tập trung vào việc hiểu rõ bài toán và nhu cầu người dùng; đồng thời, với vai trò developer, tôi hiện thực hóa các giải pháp đó thành những ứng dụng thực tế, hiệu quả.
                </p>
                <p>
                  Ngoài code, tôi thích đá bóng, xem phim và tham gia các cộng đồng dev
                  tại Việt Nam. 🇻🇳
                </p>
              </div>

              <div>
                <div className="section-label" style={{ marginBottom: '16px' }}>// Tech Stack</div>
                <div className="skills-list">
                  {DATA.skills.map((s) => (
                    <span
                      key={s.name}
                      className={`skill-chip${s.highlight ? ' highlight' : ''}`}
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── PROJECTS ── */}
        <section id="projects">
          <div className="container">
            <div className="section-label">// Selected work</div>
            <div className="section-title">What I've Built</div>

            <div className="projects-grid">
              {DATA.projects.map((p) => (
                <a
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                >
                  <div className="project-tag">{p.tag}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="project-footer">
                    {p.stack.map((tech) => (
                      <span key={tech} className="project-chip">{tech}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── CONTACT ── */}
        <section id="contact">
          <div className="container">
            <div className="contact-inner">
              <div className="section-label" style={{ marginBottom: '12px' }}>Liên Hệ Với Tôi</div>
              <h2>Get In Touch</h2>
              <p>Have a project in mind? Let's build something great together.</p>
              <div className="contact-links">
                <a href={`mailto:${DATA.email}`} className="btn-primary">
                  {DATA.email}
                </a>
                <a href={DATA.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  GitHub ↗
                </a>
                <a href={DATA.facebook} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  Facebook ↗
                </a>
                <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <p> {new Date().getFullYear()} {DATA.name}</p>
          <p>Built with HoangAnh </p>
        </div>
      </footer>
    </>
  )
}
