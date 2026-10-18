import { useState } from "react"

type CategoryId = "hot" | "iced" | "cold-brew" | "manual" | "signature" | "zero-sugar" | "shakes"

type MenuItem = {
  name: string
  description: string
  price: string
}

const item = (name: string, description: string, price: string): MenuItem => ({
  name,
  description,
  price,
})

const menuCategories: {
  id: CategoryId
  title: string
  note?: string
  items: MenuItem[]
}[] = [
  {
    id: "hot",
    title: "Hot Coffee",
    note: "Available in Regular Milk / Oat Milk",
    items: [
      item(
        "Espresso",
        "Intense, richly concentrated coffee shot; a pure flavor burst",
        "Regular ₹110 · Large —",
      ),
      item(
        "Double Espresso",
        "Double the pleasure with a robust, velvety coffee experience",
        "Regular ₹130 · Large —",
      ),
      item(
        "Americano",
        "Espresso with hot water; bold, smooth and rich",
        "Regular ₹140 · Large —",
      ),
      item(
        "Cappuccino",
        "Espresso with frothy milk, a dusting of cocoa; creamy delight",
        "Regular ₹140 · Large ₹160",
      ),
      item(
        "Flat White",
        "Espresso with microfoam milk; silky, velvety indulgence",
        "Regular ₹140 · Large —",
      ),
      item(
        "Cafe Latte",
        "A creamy blend of espresso and steamed milk, a comforting classic",
        "Regular ₹150 · Large ₹170",
      ),
      item(
        "Marocchino",
        "Espresso, frothed milk, cocoa powder; an Italian marvel",
        "Regular ₹150 · Large —",
      ),
      item(
        "Cortado",
        "Equal parts espresso and warm milk; perfectly balanced",
        "Regular ₹150 · Large —",
      ),
      item(
        "Macchiato",
        "Espresso marked with a spoonful of foam; simple perfection",
        "Regular ₹150 · Large —",
      ),
      item(
        "Spiced Vanilla Latte",
        "Espresso, vanilla, spices, steamed milk; a cozy, aromatic treat",
        "Regular ₹160 · Large ₹180",
      ),
      item(
        "Hazelnut Latte",
        "Espresso, hazelnut, steamed milk; nutty, sweet charm",
        "Regular ₹160 · Large ₹180",
      ),
      item(
        "Caramel Latte",
        "Espresso, caramel, steamed milk; sweet, creamy bliss",
        "Regular ₹160 · Large ₹180",
      ),
      item(
        "Tangerine Latte",
        "Espresso, tangerine, steamed milk; refreshingly citrusy and unique",
        "Regular ₹160 · Large ₹180",
      ),
      item(
        "Irish Latte",
        "Espresso, whiskey-flavoured, cream; a coffee delight",
        "Regular ₹160 · Large ₹180",
      ),
      item(
        "French Vanilla Latte",
        "Espresso, French vanilla, steamed milk; elegantly sweet",
        "Regular ₹160 · Large ₹180",
      ),
      item(
        "Mocha",
        "Espresso with chocolate, steamed milk; a decadent, rich duo",
        "Regular ₹200 · Large ₹240",
      ),
    ],
  },
  {
    id: "iced",
    title: "Iced Coffee",
    items: [
      item(
        "Iced Americano",
        "Chilled, diluted espresso; bold yet smooth, perfectly refreshing",
        "₹160",
      ),
      item(
        "Iced Latte",
        "Espresso with cold milk and ice; creamy, and utterly satisfying",
        "₹180",
      ),
      item(
        "Affogato",
        "Espresso poured over vanilla ice cream; a sweet contrast",
        "₹200",
      ),
      item(
        "Iced Mocha",
        "Chilled espresso with chocolate and milk; a frosty, sweet treat",
        "₹200",
      ),
      item(
        "Iced Espresso Mojito",
        "Espresso with mint, lime and ice; a cool twist",
        "₹240",
      ),
      item(
        "Sparkling Espresso",
        "Bubbly, chilled espresso; a refreshing coffee experience",
        "₹220",
      ),
      item(
        "Espresso Tonic",
        "Espresso poured over tonic water; a zesty treat",
        "₹220",
      ),
      item(
        "Espresso Ginger Ale",
        "Espresso with ginger ale; spicy, refreshing, and utterly unique",
        "₹220",
      ),
      item(
        "Vietnamese Iced Coffee",
        "Sweetened condensed milk with strong coffee, rich and creamy",
        "₹240",
      ),
      item(
        "Caffeine Rush",
        "Espresso meets Red Bull; a dynamic, electrifying energy boost",
        "₹240",
      ),
      item(
        "Sparkling Strawberry Espresso Iced Coffee",
        "A fruity, fizzy strawberry delight with a rich espresso kick.",
        "₹260",
      ),
      item(
        "Sparkling Blueberry Espresso Iced Coffee",
        "Blueberry bliss meets bold espresso in a refreshing, sparkling blend.",
        "₹260",
      ),
      item(
        "Sparkling Raspberry Espresso Iced Coffee",
        "Tart raspberry sparkle paired with smooth espresso, an invigorating treat.",
        "₹260",
      ),
    ],
  },
  {
    id: "cold-brew",
    title: "Cold Brew",
    items: [
      item(
        "Iced Cold Brew",
        "Smooth, refreshing cold brew perfection, chilled to invigorate your senses.",
        "₹220",
      ),
      item(
        "Whiskey Barrel Cold Brew",
        "A bold and unique blend, crafted by aging premium coffee beans in whiskey barrels for a rich, smoky flavor with hints of caramel and oak.",
        "₹250",
      ),
      item(
        "Rum Barrel Cold Brew",
        "Coffee beans aged in rum barrels, infusing them with rich, complex notes of molasses, brown sugar, tropical spice, oak, and vanilla.",
        "₹250",
      ),
      item(
        "Cold Brew Tonic",
        "Crisp tonic meets robust cold brew for a uniquely zesty refreshment.",
        "₹250 / ₹260",
      ),
      item(
        "Cold Brew Ginger Ale",
        "Spicy ginger ale blends with bold cold brew for a refreshing, invigorating twist.",
        "₹250 / ₹260",
      ),
    ],
  },
  {
    id: "manual",
    title: "Manual Brewing",
    items: [
      item(
        "French Press",
        "A hand-pressed brew boasting bold richness, infused with a velvety undertone.",
        "₹190",
      ),
      item(
        "Moka Pot",
        "Crafted in a traditional Moka Pot, this espresso-like elixir melds intense aroma with a whisper of caramel.",
        "₹190",
      ),
      item(
        "V60 (Hot / Iced)",
        "Manually filtered to capture the essence of precision. Revealing bright citrus notes wrapped in silk, iced & refined, offering a crisp, sweetly acidic sip, a masterful chill for sophisticated palates.",
        "₹190",
      ),
      item(
        "Whiskey Barrel Aged V60 (Hot / Iced)",
        "Exclusively aged in barrels, this iced V60 blend unveils whiskey notes & vanilla nuances.",
        "₹190",
      ),
      item(
        "Rum Barrel Aged V60 (Hot / Iced)",
        "Premium beans aged in oak casks used for aging rum, imparting flavors like vanilla caramel, spice, honey, and oak for a sweet, complex, and boozy profile.",
        "₹190",
      ),
      item(
        "Origami (Hot / Iced)",
        "Artfully folded flavors emerge hot and vibrant, with floral whispers and honeyed depth, chilled to perfection, balancing zest with subtle sweetness, a refreshing masterpiece served in a glass.",
        "₹190",
      ),
      item(
        "Aeropress (Hot / Iced)",
        "A swift, rich plunge through the AeroPress delivers a velvety smooth experience.",
        "₹190",
      ),
    ],
  },
  {
    id: "signature",
    title: "Signature Drinks",
    items: [
      item(
        "Felix Felicia's Fizz",
        "Liquid luck with a hint of vanilla to uplift your spirits.",
        "₹250",
      ),
      item(
        "Watermelon Wisher",
        "Watermelon and a robust coffee blend for a sweet, energizing treat.",
        "₹250",
      ),
      item(
        "Citrus Mint Julep",
        "Zesty citrus with a dash of orange bitters and cool mint.",
        "₹250",
      ),
      item(
        "Crimson Cascade",
        "A magical cold brew mocktail with rose and watermelon, offering sparkling sweetness and vibrant, refreshing flavors.",
        "₹250",
      ),
      item(
        "Sparkling Orange Cold Brew",
        "Effervescent orange honey and cold brew make a fizzy, bold refreshment.",
        "₹250",
      ),
      item(
        "Timamisu Cream Cold Brew",
        "A smooth cold brew coffee layered with a sweet, velvety mascarpone-based cold foam and finished with a dusting of cocoa powder.",
        "₹250",
      ),
      item(
        "Bicerin",
        "A traditional layered Italian hot drink from Turin, featuring distinct strata of rich hot chocolate, espresso, and fresh whipped cream.",
        "₹250",
      ),
      item(
        "Iced Strawberry Mocha Latte",
        "Layered coffee drink that blends the rich, bold flavor of espresso and chocolate with the sweet, fruity essence of strawberries and creamy milk.",
        "₹250",
      ),
    ],
  },
  {
    id: "zero-sugar",
    title: "Zero Sugar Drinks",
    items: [
      item(
        "Zero Sugar Cappuccino (Vanilla / Hazelnut)",
        "Cappuccino enhanced by a specific flavor profile with zero sugar.",
        "Regular ₹240 · Large ₹260",
      ),
      item(
        "Flavored Café Latte (Vanilla / Hazelnut)",
        "Café latte enhanced by a specific flavor profile with zero sugar.",
        "Regular ₹260 · Large ₹280",
      ),
      item(
        "Lemon Iced Tea",
        "Zero sugar zesty lemon in chilled tea; a bright, refreshing citrus quench.",
        "₹250",
      ),
      item(
        "Peach Iced Tea",
        "Zero sugar zesty lemon in chilled tea; a bright, refreshing citrus quench.",
        "₹250",
      ),
      item(
        "Classic Mint Mojito",
        "Zero sugar zesty mix of lime, mint, and soda water, a timeless, refreshing classic.",
        "₹280",
      ),
      item(
        "Green Apple Mojito",
        "Zero sugar, a vibrant, refreshing blend of tart green apple, zesty lime, and cool mint.",
        "₹280",
      ),
      item(
        "Deep Sea",
        "A cool, blue-hued drink with a hint of citrus, evoking ocean depths.",
        "₹280",
      ),
    ],
  },
  {
    id: "shakes",
    title: "Classic Shakes",
    items: [
      item(
        "Vanilla",
        "Classic, rich vanilla flavor; smooth and dreamily soft.",
        "₹220",
      ),
      item(
        "Strawberry",
        "Fresh, strawberries blended into creamy, sweet perfection.",
        "₹220",
      ),
      item(
        "Mango",
        "Tropical bliss; ripe mangoes pureed into a sweet shake.",
        "₹220",
      ),
      item(
        "Blueberry",
        "Sweet and tangy blueberries whipped into a velvety delight.",
        "₹220",
      ),
      item(
        "Irish Cream Classic Shake",
        "Smooth Irish cream flavor in a timeless shake.",
        "₹220",
      ),
      item(
        "Salted Caramel",
        "Sweet meets savory; blended shake with a salted caramel swirl.",
        "₹240",
      ),
    ],
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {open ? (
        <path d="M6 6l12 12M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  )
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("hot")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const activeMenu =
    menuCategories.find((category) => category.id === activeCategory) ??
    menuCategories[0]

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Koa Café home"
        >
          <span className="brand-mark">K</span>
          <span className="brand-name">Koa Café</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#story">Story</a>
          <a href="#visit">Visit us</a>
        </nav>

        <a className="header-cta" href="#visit">
          Find a table
          <ArrowIcon />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <MenuIcon open={mobileMenuOpen} />
        </button>

        <nav
          id="mobile-navigation"
          className={`mobile-nav ${mobileMenuOpen ? "is-open" : ""}`}
          aria-label="Mobile navigation"
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#menu" onClick={closeMenu}>
            Menu
          </a>
          <a href="#story" onClick={closeMenu}>
            Story
          </a>
          <a href="#visit" onClick={closeMenu}>
            Visit us
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <picture>
            <source
              media="(max-width: 600px)"
              srcSet="/images/koa-lounge-portrait.png"
            />
            <img
              className="hero-image"
              src="/images/koa-interior-wide.png"
              alt="Koa Café interior with hanging chairs, plants, books, and sculptural lighting"
            />
          </picture>
          <div className="hero-scrim" />
          <div className="hero-content">
            <p className="eyebrow light">Coffee · Conversation · Calm</p>
            <h1 id="hero-title">
              A slower kind
              <br />
              of morning.
            </h1>
            <p className="hero-copy">
              Thoughtful coffee, seasonal plates, and a room made for lingering.
              Your everyday ritual, poured with care.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#menu">
                Explore menu
                <ArrowIcon />
              </a>
              <a
                className="button button-ghost"
                href="https://www.google.com/maps/search/?api=1&query=Koa+Cafe"
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </a>
            </div>
          </div>
          <p className="hero-note">A space to pause, sip &amp; stay</p>
        </section>

        <section
          className="menu-section"
          id="menu"
          aria-labelledby="menu-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">Koa Café</p>
              <h2 id="menu-title">The menu</h2>
            </div>
            <p className="menu-for-two">₹800 for two</p>
          </div>

          <div
            className="filters"
            role="group"
            aria-label="Filter menu by category"
          >
            {menuCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={activeCategory === category.id ? "active" : ""}
                aria-pressed={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="menu-panel" aria-live="polite">
            <div className="menu-category-heading">
              <p className="eyebrow">Currently viewing</p>
              <h3>{activeMenu.title}</h3>
              {activeMenu.note && <p>{activeMenu.note}</p>}
            </div>
            <div className="menu-list">
              {activeMenu.items.map((item) => (
                <article className="menu-card" key={item.name}>
                  <div className="menu-card-copy">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <p className="menu-price">{item.price}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="story-section"
          id="story"
          aria-labelledby="story-title"
        >
          <div className="story-copy">
            <p className="eyebrow light">Our story</p>
            <h2 id="story-title">Made for the spaces between.</h2>
            <p className="story-lead">
              Koa began with a simple belief: the everyday cup can still feel
              remarkable.
            </p>
            <p>
              We work with independent roasters, nearby growers, and small
              producers who care deeply about their craft. Our menu shifts with
              the seasons, but our approach stays the same—warm service, honest
              food, and no need to hurry.
            </p>
            <a className="text-link" href="#visit">
              Come spend a while
              <ArrowIcon />
            </a>
          </div>
          <div className="story-gallery">
            <figure className="story-image story-image-main">
              <img
                src="/images/koa-window-nook.png"
                alt="A sunlit window nook at Koa Café with green armchairs and planted shelves"
                loading="lazy"
              />
            </figure>
            <figure className="story-image story-image-small">
              <img
                src="/images/koa-brand-wall.png"
                alt="Koa Café's teal lounge seating and illustrated coffee wall"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <section className="gallery-section" aria-labelledby="gallery-title">
          <div className="gallery-heading">
            <p className="eyebrow">Life at Koa</p>
            <h2 id="gallery-title">Stay for another.</h2>
          </div>
          <div className="gallery-grid">
            <figure>
              <img
                src="/images/koa-swings.png"
                alt="Colorful hanging chairs in Koa Café's bright social lounge"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src="/images/koa-seating.png"
                alt="Leather chairs and window counter seating at Koa Café"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src="/images/koa-lounge-portrait.png"
                alt="Koa Café lounge with deep teal sofas, plants, and warm leather seating"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <section
          className="visit-section"
          id="visit"
          aria-labelledby="visit-title"
        >
          <div className="visit-intro">
            <p className="eyebrow light">Visit us</p>
            <h2 id="visit-title">Meet you at Koa.</h2>
            <p>
              A bright, easygoing place to meet, work, and stay awhile. Walk-ins
              are always welcome.
            </p>
          </div>
          <div className="visit-details">
            <div className="detail-block">
              <p className="detail-label">Find us</p>
              <address>
                304/307, Broadway Signature, Fun Park, Canal Ring Road, Bhayli,
                Vadodara
              </address>
              <a
                className="text-link light-link"
                href="https://www.google.com/maps/search/?api=1&query=304%2F307%2C+Broadway+Signature%2C+Fun+Park%2C+Canal+Ring+Road%2C+Bhayli%2C+Vadodara"
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
                <ArrowIcon />
              </a>
            </div>
            <div className="detail-block">
              <p className="detail-label">Hours</p>
              <p>Opens at 9:15 am</p>
              <p className="rating-heading">Customer ratings (out of 5)</p>
              <div className="rating-list">
                <div className="rating-row">
                  <span className="rating-score">4.3</span>
                  <span className="rating-description">
                    <span>Dining</span>
                    <span>413 ratings</span>
                  </span>
                </div>
                <div className="rating-row">
                  <span className="rating-score">4.1</span>
                  <span className="rating-description">
                    <span>Delivery</span>
                    <span>930 ratings</span>
                  </span>
                </div>
              </div>
              <p>₹800 for two</p>
            </div>
            <div className="detail-block">
              <p className="detail-label">Call &amp; explore</p>
              <a href="tel:+917600006311">+91 76000 06311</a>
              <p>koacafe.in</p>
              <a
                href="https://www.zomato.com/it/vadodara/koa-cafe-1-bhayli"
                target="_blank"
                rel="noreferrer"
              >
                Zomato
              </a>
              <p>
                Coffee, tea, shakes, drinks, fast food &amp; dessert
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">K</span>
          <span className="brand-name">Koa Café</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#story">Story</a>
          <a href="#visit">Visit</a>
        </nav>
        <p>© 2025 Koa Café</p>
      </footer>
    </div>
  )
}
