import "./BlogSection.css";
import blogBg from "../assets/blog-bg.jpg";

function BlogSection() {
  return (
    <section
      className="blog-section"
      style={{
        backgroundImage: `url(${blogBg})`,
      }}
    >

      <div className="blog-content">
        <h2>
          Hot Insights from
          <span> Recruitment Industry</span>
        </h2>

        <button>
          Explore
        </button>
      </div>
    </section>
  );
}

export default BlogSection;