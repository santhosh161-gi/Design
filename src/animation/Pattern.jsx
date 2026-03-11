import React from "react";

function Pattern() {

  const items = [
    { img: "/Hoodie.jpg", name: "Hoodie" },
    { img: "/Joggers.jpg", name: "Joggers" },
    { img: "/Kids Wear.jpg", name: "Kids Wear" },
    { img: "/Polo T-Shirts.png", name: "Polo T-Shirts" },
    { img: "/Shirts.jpg", name: "Shirts" },
    { img: "/Shorts.jpg", name: "Shorts" },
    { img: "/Sweat Shirts.jpg", name: "Sweat Shirts" },
    { img: "/Track Pants.jpg", name: "Track Pants" },
    { img: "/Co Ord Sets for Women.jpg", name: "Women Wear" },
    { img: "/T-Shirts.jpg", name: "T-Shirts" },
    
  ];

  const loopItems = [...items, ...items, ...items];

  return (
    <div className="relative">

      {/* ---------- DESKTOP MARQUEE ---------- */}
      <div className="desktop-marquee w-full overflow-hidden py-10">
        <div className="marquee-track"  style={{ animationDuration: "10s" }}>

          {loopItems.map((item, i) => (
            <div key={i} className="relative flex-shrink-0">

              <img
                src={item.img}
                alt={item.name}
                style={{
                  height: "clamp(250px, 40vh, 500px)",
                 width: "300px",
                  objectFit: "contain"
                }}
              />

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xl font-bold bg-black/40 px-3 py-1 rounded">
                {item.name}
              </div>

            </div>
          ))}

        </div>
      </div>


      {/* ---------- MOBILE SCROLL CAROUSEL ---------- */}
      <div className="mobile-carousel">

        {items.map((item, i) => (
          <div key={i} className="carousel-item">

            <img
              src={item.img}
              alt={item.name}
              className="carousel-img"
            />

            <div className="title">
              {item.name}
            </div>

          </div>
        ))}

      </div>


<style>{`

/* DESKTOP MARQUEE */

.marquee-track{
  display:flex;
  gap:20px;
  animation: marquee-x 10s linear infinite;
  will-change: transform;
  width: max-content;
}

@keyframes marquee-x{
  0%{
    transform:translateX(0);
  }
  100%{
    transform:translateX(-100%);
  }
}

.marquee-track:hover{
  animation-play-state:paused;
}


/* MOBILE CAROUSEL */

.mobile-carousel{
  display:none;
}

@media (max-width:768px){

  .desktop-marquee{
    display:none;
  }

  .mobile-carousel{
    display:flex;
    overflow-x:auto;
    gap:20px;
    padding:20px;
    scroll-snap-type:x mandatory;

    scrollbar-width:none;
    -ms-overflow-style:none;
  }

  .mobile-carousel::-webkit-scrollbar{
    display:none;
  }

  .carousel-item{
    flex:0 0 auto;
    scroll-snap-align:center;
    position:relative;
  }

  .carousel-img{
    height:320px;
    width:240px;
    object-fit:contain;
  }

  .title{
    position:absolute;
    bottom:20px;
    left:50%;
    transform:translateX(-50%);
    color:white;
    font-weight:bold;
    background:rgba(0,0,0,0.4);
    padding:6px 12px;
    border-radius:6px;
  }

}

`}</style>

    </div>
  );
}

export default Pattern;