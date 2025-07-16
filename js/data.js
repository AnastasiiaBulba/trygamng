// Sample data structure - in real implementation this would be loaded from JSON files
const siteData = {
  reviews: [
    {
      id: 1,
      author: "Sarah Johnson",
      text: "This game is absolutely amazing! I use it every evening to relax after work. The colors are so vibrant and the interface is so intuitive. It's like having a digital art studio in my pocket!",
      rating: 5,
    },
    {
      id: 2,
      author: "Michael Chen",
      text: "As someone who struggles with stress, this coloring game has been a lifesaver. The simple tap-to-color mechanic makes it so easy to create beautiful artwork without any mess. Highly recommend!",
      rating: 5,
    },
    {
      id: 3,
      author: "Emma Rodriguez",
      text: "My kids love this game and I love that it's educational and calming. We spend quality time together coloring beautiful illustrations. The variety of designs keeps them engaged for hours.",
      rating: 5,
    },
    {
      id: 4,
      author: "David Thompson",
      text: "Perfect for commuting! I use it on the train every morning and it helps me start the day with a calm mind. The artwork is stunning and the color palette is extensive.",
      rating: 5,
    },
    {
      id: 5,
      author: "Lisa Park",
      text: "I'm not artistic at all, but this game makes me feel like a real artist! The one-tap coloring is genius and the results are always beautiful. It's my go-to stress relief activity.",
      rating: 5,
    },
    {
      id: 6,
      author: "Robert Wilson",
      text: "This is the best digital coloring app I've ever used. The interface is clean, the colors are rich, and the illustrations are diverse. It's become my daily meditation practice.",
      rating: 5,
    },
  ],

  news: [
    {
      id: 1,
      title: "New Color Palette Update",
      category: "Painting Studio Updates",
      icon: "🎨",
      excerpt:
        "We've added 50 new vibrant colors to our palette, including metallic shades and neon tones. Now you can create even more stunning artwork with our expanded color selection.",
      fullText:
        "We're excited to announce our biggest color update yet! We've added 50 new vibrant colors to our palette, including metallic shades and neon tones. These new colors will allow you to create even more stunning and unique artwork. The metallic colors add a beautiful shimmer effect to your creations, while the neon tones make your artwork pop with vibrant energy. All existing artwork will remain unchanged, and you can start using these new colors immediately. We've also improved the color selection interface to make it easier to find and organize your favorite colors. Stay tuned for more updates coming soon!<br><br><img src='./img/new2.jpg' alt='New Color Palette' style='width: 100%; max-width: 500px; border-radius: 8px; margin: 20px 0;'>",
    },
    {
      id: 2,
      title: "Artist Spotlight: Community Creations",
      category: "Color Diaries",
      icon: "👥",
      excerpt:
        "Discover amazing artwork created by our community members. From intricate mandalas to whimsical landscapes, see how players are using Tap To Color to express their creativity.",
      fullText:
        "We're absolutely blown away by the incredible artwork our community has been creating! This month, we're featuring some of the most stunning pieces shared by our players. From intricate mandalas that showcase incredible attention to detail, to whimsical landscapes that tell beautiful stories, our community continues to amaze us with their creativity. We've seen everything from peaceful nature scenes to vibrant abstract designs, proving that Tap To Color is truly a platform for artistic expression. Many players have shared that the game has helped them discover their artistic side, with some even using their digital creations as inspiration for traditional art projects. We love seeing how each person brings their unique perspective to the same illustrations, creating completely different and beautiful results.",
    },
    {
      id: 3,
      title: "Performance Improvements & Bug Fixes",
      category: "Painting Studio Updates",
      icon: "⚡",
      excerpt:
        "We've optimized the game for smoother performance and fixed several minor bugs. Your coloring experience should now be even more fluid and enjoyable.",
      fullText:
        "We're constantly working to improve your Tap To Color experience, and this update brings significant performance improvements and bug fixes. We've optimized the rendering engine to provide smoother coloring animations, especially on older devices. The color application is now more responsive, and we've reduced loading times between different illustrations. We've also fixed several minor bugs that were affecting the user experience, including issues with color selection and save functionality. The game should now run more smoothly across all devices, providing an even more enjoyable coloring experience. We've also improved the auto-save feature to ensure your artwork is always protected. These updates are part of our ongoing commitment to providing the best possible digital coloring experience.",
    },
    {
      id: 4,
      title: "New Mandala Collection Released",
      category: "Painting Studio Updates",
      icon: "🕉️",
      excerpt:
        "Introducing our new mandala collection with 20 intricate designs perfect for meditation and stress relief. Each mandala is carefully crafted for the ultimate coloring experience.",
      fullText:
        "We're thrilled to introduce our brand new mandala collection! This special release features 20 intricately designed mandalas that are perfect for meditation and stress relief. Each mandala has been carefully crafted with attention to detail, providing the perfect balance of complexity and accessibility. The designs range from simple geometric patterns to complex floral arrangements, ensuring there's something for every skill level. Many of our players have found that coloring these mandalas helps them achieve a meditative state, making it the perfect activity for unwinding after a long day. The mandalas are designed to be colored in any order, allowing for complete creative freedom. We've also included special color suggestions for each design to help you get started. This collection represents our commitment to providing not just entertainment, but also therapeutic benefits through digital art.<br><br><img src='./img/new3.jpg' alt='Mandala Collection' style='width: 100%; max-width: 500px; border-radius: 8px; margin: 20px 0;'>",
    },
    {
      id: 5,
      title: "Player Story: Finding Peace Through Colors",
      category: "Color Diaries",
      icon: "🧘",
      excerpt:
        "Read the inspiring story of Maria, a nurse who discovered the therapeutic benefits of digital coloring during her stressful work schedule.",
      fullText:
        "Today we want to share the inspiring story of Maria, a dedicated nurse who discovered the therapeutic benefits of digital coloring. Maria works long shifts in a busy hospital and was struggling with stress and anxiety. She discovered Tap To Color during a particularly difficult period and found that the simple act of coloring helped her relax and clear her mind. 'I started coloring during my breaks at work,' Maria shares. 'Even just 10 minutes of coloring helped me feel more centered and ready to face the challenges of my day.' Maria's story is just one example of how our game is helping people find peace and relaxation in their daily lives. She has since completed over 50 illustrations and has even started a small coloring group with her colleagues. 'It's amazing how something so simple can have such a profound impact on your mental health,' she says. Stories like Maria's remind us why we created this game and inspire us to continue improving the experience for all our players.",
    },
    {
      id: 6,
      title: "Advanced Color Tools Released",
      category: "Painting Studio Updates",
      icon: "✨",
      excerpt:
        "New advanced color tools including gradients, textures, and special effects are now available for premium users. Transform your artwork with professional-grade features.",
      fullText:
        "We're excited to announce the release of our advanced color tools for premium users! This major update introduces professional-grade features that will take your artwork to the next level. The new gradient tool allows you to create beautiful color transitions, while the texture feature adds depth and dimension to your creations. Special effects include sparkles, metallic finishes, and glow effects that make your artwork truly unique. We've also added a color history feature that remembers your favorite color combinations, making it easier to maintain consistency across multiple projects. The tools are designed to be intuitive while providing powerful creative options. Early feedback from our beta testers has been overwhelmingly positive, with many users reporting that these new features have inspired them to create more complex and beautiful artwork. The advanced tools are available immediately for all premium subscribers, and we're offering a special discount for new users who want to try these features.",
    },
  ],

  contact: {
    email: "connection@trygamng.com",
    phone: "+1 (403) 555-0123",
    address: "100 Queen Street West, Toronto, Ontario M5H 2N2, Canada",
    mapLocation: "100 Queen Street West, Toronto, Ontario M5H 2N2, Canada",
  },
};

// Load reviews
function loadReviews() {
  const reviewsContainer = document.getElementById("reviews-container");
  if (!reviewsContainer) return;

  siteData.reviews.forEach((review) => {
    const reviewCard = document.createElement("div");
    reviewCard.className = "review-card";

    const stars = "★".repeat(review.rating);

    reviewCard.innerHTML = `
            <div class="review-rating">
                <span class="star">${stars}</span>
            </div>
            <p class="review-text">"${review.text}"</p>
            <div class="review-author">- ${review.author}</div>
        `;

    reviewsContainer.appendChild(reviewCard);
  });
}

// Load news (for news page)
function loadNews() {
  const newsContainer = document.getElementById("news-container");
  if (!newsContainer) return;

  // Group articles by category
  const paintingUpdates = siteData.news.filter(
    (article) => article.category === "Painting Studio Updates"
  );
  const colorDiaries = siteData.news.filter(
    (article) => article.category === "Color Diaries"
  );

  // Create Painting Studio Updates section
  const updatesSection = document.createElement("div");
  updatesSection.className = "news-section-category";
  updatesSection.innerHTML = `
    <h2 class="category-title">Painting Studio Updates</h2>
    <div class="news-grid-category">
      ${paintingUpdates
        .map(
          (article) => `
        <div class="news-card">
          <div class="news-icon-container">
            <div class="news-icon">${article.icon}</div>
          </div>
          <div class="news-content">
            <div class="news-category">${article.category}</div>
            <h3 class="news-title">${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <button class="btn btn-secondary read-more-btn" data-article-id="${article.id}">Read More</button>
            <div class="news-full-text" id="full-text-${article.id}" style="display: none;">
              <p>${article.fullText}</p>
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  newsContainer.appendChild(updatesSection);

  // Create Color Diaries section
  const diariesSection = document.createElement("div");
  diariesSection.className = "news-section-category";
  diariesSection.innerHTML = `
    <h2 class="category-title">Color Diaries</h2>
    <div class="news-grid-category">
      ${colorDiaries
        .map(
          (article) => `
        <div class="news-card">
          <div class="news-icon-container">
            <div class="news-icon">${article.icon}</div>
          </div>
          <div class="news-content">
            <div class="news-category">${article.category}</div>
            <h3 class="news-title">${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <button class="btn btn-secondary read-more-btn" data-article-id="${article.id}">Read More</button>
            <div class="news-full-text" id="full-text-${article.id}" style="display: none;">
              <p>${article.fullText}</p>
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  newsContainer.appendChild(diariesSection);

  // Add event listeners for read more buttons
  const readMoreBtns = document.querySelectorAll(".read-more-btn");
  readMoreBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const articleId = this.getAttribute("data-article-id");
      const fullText = document.getElementById(`full-text-${articleId}`);
      const btnText = this.textContent;

      if (fullText.style.display === "none") {
        fullText.style.display = "block";
        this.textContent = "Read Less";
        this.classList.add("active");
      } else {
        fullText.style.display = "none";
        this.textContent = "Read More";
        this.classList.remove("active");
      }
    });
  });
}

// Initialize data loading when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  loadReviews();
  loadNews();
});
