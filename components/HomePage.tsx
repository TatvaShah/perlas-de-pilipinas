import Image from "next/image";
import { DmButton } from "@/components/DmButton";
import { Header } from "@/components/Header";
import { ReelCard } from "@/components/ReelCard";
import {
  address,
  addressLine,
  breakfast,
  gallery,
  hours,
  kareKareTrays,
  links,
  phone,
  plates,
  reels,
  reviews,
  sweets,
  uberTrays,
  type Dish,
} from "@/lib/site";

function DishList({ items }: { items: Dish[] }) {
  return (
    <ul className="ledger">
      {items.map((item) => (
        <li key={item.name}>
          <div className="ledger-top">
            <h3>{item.name}</h3>
            <span>{item.price}</span>
          </div>
          <p>{item.detail}</p>
        </li>
      ))}
    </ul>
  );
}

export function HomePage() {
  return (
    <>
      <Header />
      <main id="content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="kicker">Scarborough · Brimley and Lawrence</p>
            <h1>Perlas de Pilipinas</h1>
            <p className="lede">Great food makes a great party.</p>
            <p className="intro">
              Authentic Filipino takeout, delivery, and catering from Unit 11 on Lawrence
              Avenue East. Silog breakfasts from 7 in the morning, party trays for the
              barkada, and lechon when the day calls for it.
            </p>
            <div className="cta-row">
              <a className="btn btn-chili" href={phone.href}>
                Call {phone.display}
              </a>
              <a className="btn btn-navy" href={links.uberEats} target="_blank" rel="noopener noreferrer">
                Uber Eats
              </a>
              <a className="btn btn-line" href={links.doorDash} target="_blank" rel="noopener noreferrer">
                DoorDash
              </a>
              <DmButton intent="order" className="btn btn-line">
                Message on Instagram
              </DmButton>
            </div>
            <p className="hours-chip">Wednesday to Sunday, 7 a.m. to 7 p.m.</p>
          </div>
          <div className="hero-photo">
            <Image
              src="/media/hero.webp"
              alt="Palabok on a gold rimmed plate, topped with shrimp, egg, and crushed chicharon"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <span className="photo-tag">Palabok</span>
          </div>
        </section>

        <section className="story">
          <div className="story-photo">
            <Image
              src="/media/counter.webp"
              alt="Service counter at Perlas de Pilipinas, with the Authentic Filipino Cuisine sign above the pass"
              width={1200}
              height={2134}
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
          <div className="story-copy">
            <p className="kicker">The room</p>
            <h2>A counter, a pearl, and a full table.</h2>
            <blockquote>
              Bare walls, dust, and a lot of long days. Now it is a place filled with people,
              good food, and the sound of families eating together.
            </blockquote>
            <p>
              That is how they described the move into this Scarborough kitchen. Walk in for
              takeout, send a car through Uber Eats or DoorDash, or call {phone.display} and
              tell them what the table needs.
            </p>
          </div>
        </section>

        <section className="menu" id="menu">
          <div className="section-head">
            <p className="kicker">The kitchen</p>
            <h2>Come treat yourself today.</h2>
            <p>
              A short list of what they cook, in their own descriptions. Prices are from the
              Uber Eats menu and can differ on DoorDash or at the counter.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <Image
                src="/media/karekare.webp"
                alt="Crispy pork belly kare kare in a black bowl, from a Perlas de Pilipinas post"
                width={1400}
                height={1866}
                sizes="(max-width: 800px) 100vw, 33vw"
              />
              <div>
                <h3>Crispy pork belly kare-kare</h3>
                <p>Peanut sauce, crisp belly, and extra rice. Their weekend post.</p>
              </div>
            </article>
            <article className="feature-card">
              <Image
                src="/media/lumpia.webp"
                alt="Golden lumpiang Shanghai piled on a metal tray"
                width={900}
                height={1600}
                sizes="(max-width: 800px) 100vw, 33vw"
              />
              <div>
                <h3>Lumpiang Shanghai</h3>
                <p>Crispy, golden, and hot from the fryer. Ten pieces, or a tray of fifty.</p>
              </div>
            </article>
            <article className="feature-card">
              <Image
                src="/media/lechon.webp"
                alt="Sliced lechon belly with crackling skin on a wooden board"
                width={900}
                height={1600}
                sizes="(max-width: 800px) 100vw, 33vw"
              />
              <div>
                <h3>Lechon</h3>
                <p>Belly with crackling, and lechon kawali with homemade liver sauce.</p>
              </div>
            </article>
          </div>

          <div className="menu-columns">
            <div>
              <h3 className="menu-label">Filipino breakfast</h3>
              <DishList items={breakfast} />
            </div>
            <div>
              <h3 className="menu-label">Plates, noodles, soup</h3>
              <DishList items={plates} />
            </div>
            <div>
              <h3 className="menu-label">Something sweet</h3>
              <DishList items={sweets} />
            </div>
          </div>
        </section>

        <section className="catering" id="catering">
          <div className="catering-copy">
            <p className="kicker">Takeout and catering</p>
            <h2>Party trays for the people you actually want to feed.</h2>
            <p>
              They cater around Toronto and nearby areas. Birthdays, family gatherings,
              a barkada hangout, or a feast because you felt like it. Message them for lechon.
            </p>
            <blockquote>DM us for your catering with lechon.</blockquote>
            <div className="cta-row">
              <DmButton intent="catering">Ask about catering</DmButton>
              <a className="btn btn-line" href={phone.href}>
                Call {phone.display}
              </a>
            </div>
          </div>
          <div className="catering-board">
            <Image
              src="/media/feast.webp"
              alt="A table of Filipino dishes, rice, and lumpia from a Perlas de Pilipinas reel"
              width={1200}
              height={2134}
              sizes="(max-width: 900px) 100vw, 40vw"
            />
            <div className="tray-card">
              <h3>Crispy pork belly kare-kare</h3>
              <p>Prices they posted on Instagram.</p>
              <ul>
                {kareKareTrays.map((tray) => (
                  <li key={tray.name}>
                    <span>{tray.name}</span>
                    <strong>{tray.price}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tray-list">
            <h3 className="menu-label">Platters on Uber Eats</h3>
            <DishList items={uberTrays} />
          </div>
        </section>

        <section className="reels" id="reels">
          <div className="section-head">
            <p className="kicker">From their kitchen</p>
            <h2>Reels, in their own words.</h2>
            <p>
              Four recent films from @perlasdepilipinas, saved here so they play on the page.
              The account has 1,626 followers.
            </p>
          </div>
          <div className="reel-row">
            {reels.map((reel) => (
              <ReelCard
                key={reel.src}
                src={reel.src}
                poster={reel.poster}
                title={reel.title}
                quote={reel.quote}
                href={reel.href}
              />
            ))}
          </div>
          <div className="gallery">
            {gallery.map((photo) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 700px) 70vw, 22vw"
              />
            ))}
          </div>
          <p className="gallery-note">
            Noodles from their October post: pancit, palabok, lomi, and mami. Warm,
            comforting, and exactly what that kind of day calls for.
          </p>
          <a className="text-link" href={links.instagram} target="_blank" rel="noopener noreferrer">
            Follow @perlasdepilipinas
          </a>
        </section>

        <section className="reviews" id="reviews">
          <div className="section-head light">
            <p className="kicker">Guests</p>
            <h2>What people write after they order.</h2>
            <div className="rating-row">
              <p>
                <strong>4.7</strong>
                <span>Uber Eats · 2,000+ ratings</span>
              </p>
              <p>
                <strong>4.5</strong>
                <span>DoorDash · 500+ ratings</span>
              </p>
            </div>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <figure key={review.author + review.source} className="review">
                <blockquote>{review.quote}</blockquote>
                <figcaption>
                  {review.author}
                  <span>{review.source}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="visit" id="visit">
          <div className="visit-card" id="order">
            <p className="kicker">Visit or send for it</p>
            <h2>Unit 11, Lawrence East.</h2>
            <address>
              {address.street}
              <br />
              {address.city}, {address.region} {address.postal}
            </address>
            <p className="cross">Near {address.cross}.</p>
            <a className="phone-link" href={phone.href}>
              {phone.display}
            </a>
            <table>
              <caption>Hours</caption>
              <tbody>
                {hours.map((row) => (
                  <tr key={row.day}>
                    <th scope="row">{row.day}</th>
                    <td>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="fine">
              Their Instagram posts list Wednesday to Sunday, 7 a.m. to 7 p.m. A public map
              listing shows the same hours, with Monday and Tuesday closed. Call if you
              are on the way.
            </p>
            <div className="cta-row">
              <a className="btn btn-chili" href={phone.href}>
                Tap to call
              </a>
              <a className="btn btn-navy" href={links.uberEats} target="_blank" rel="noopener noreferrer">
                Order Uber Eats
              </a>
              <a className="btn btn-line" href={links.doorDash} target="_blank" rel="noopener noreferrer">
                Order DoorDash
              </a>
              <DmButton intent="catering" className="btn btn-line">
                Instagram DM
              </DmButton>
              <a className="btn btn-line" href={links.maps} target="_blank" rel="noopener noreferrer">
                Google Maps
              </a>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              title="Map of Perlas de Pilipinas at 2893 Lawrence Avenue East, Scarborough"
              src={links.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <Image
            src="/media/logo.webp"
            alt=""
            width={64}
            height={64}
          />
          <div>
            <strong>Perlas de Pilipinas</strong>
            <p>{addressLine}</p>
          </div>
        </div>
        <nav aria-label="Elsewhere">
          <a href={links.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={links.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href={links.uberEats} target="_blank" rel="noopener noreferrer">
            Uber Eats
          </a>
          <a href={links.doorDash} target="_blank" rel="noopener noreferrer">
            DoorDash
          </a>
        </nav>
        <p className="credit">
          Website by <a href={links.claudaura}>ClaudAura</a>
        </p>
      </footer>

      <div className="order-bar">
        <a href={phone.href}>Call</a>
        <a href={links.uberEats} target="_blank" rel="noopener noreferrer">
          Uber Eats
        </a>
        <a href={links.doorDash} target="_blank" rel="noopener noreferrer">
          DoorDash
        </a>
      </div>
    </>
  );
}
