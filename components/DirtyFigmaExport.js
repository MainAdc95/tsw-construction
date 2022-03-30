const url = "https://trendsportwear.com";

export function Underlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        padding: 40,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Antonio', sans-serif",
            flex: "1 1 0%",
            height: 30,
            fontSize: 30,
            fontWeight: "700",
            lineHeight: "30px",
            color: "black",
            letterSpacing: -2,
          }}
        >
          TREND SPORT WEAR
        </p>
        <p
          className="full"
          style={{
            fontFamily: "'Antonio', sans-serif",
            flex: "1 1 0%",
            fontSize: 16,
            fontWeight: "700",
            lineHeight: "1em",
            textAlign: "center",
            color: "black",
            letterSpacing: -0.5,
            whiteSpace: "nowrap",
          }}
        >
          THE WEARS THAT MAKE YOUR SPORTS INTERESTING
        </p>
        <p
          style={{
            flex: "1 1 0%",
            height: 30,
            fontSize: 30,
            lineHeight: "30px",
            textAlign: "right",
            color: "black",
          }}
        >
          ⎑
        </p>
      </div>
      <div style={{ height: 60 }} />
      <div
        style={{
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            flex: "1 1 0%",
            height: "100%",
            fontSize: 12,
            lineHeight: "1.5em",
            color: "black",
          }}
        >
          <b>Comming Soon</b>
          <br />
          United Arab Emirates / GCC
          <br />
          <b>—</b>
        </p>
        <div style={{ width: 10 }} />
        <p
          style={{
            transform: "rotate3d(0, 0, 1, 90deg) translate3d(100%,10px,0)",
            transformOrigin: "right",
            fontSize: 12,
            fontWeight: "700",
            lineHeight: "100%",
            textAlign: "right",
            color: "black",
            whiteSpace: "nowrap",
          }}
        >
          DRAG POINTER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ●
        </p>
      </div>
      <div style={{ height: 10 }} />
      <div
        className="full"
        style={{
          fontFamily: "'Antonio', sans-serif",
          width: "100%",
          flex: "1 1 0%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            flex: "1 1 0%",
            fontSize: 250,
            lineHeight: "1em",
            color: "black",
            margin: 0,
            letterSpacing: -10,
          }}
        >
          X
        </p>
        <div style={{ width: 10 }} />
        <p
          style={{
            flex: "1 1 0%",
            fontSize: 250,
            lineHeight: "100%",
            textAlign: "right",
            color: "black",
            margin: 0,
            letterSpacing: -10,
          }}
        >
          01-
        </p>
      </div>
      <div style={{ height: 60 }} />
      <div
        style={{
          pointerEvents: "all",
          pointer: "auto",
          width: "100%",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            gap: 10,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              style={{
                minWidth: logo.width,
              }}
            >
              <img src={url + logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            margin: "0 15px",
            width: 600,
            maxWidth: "100%",
            margin: "auto",
            padding: "0 20px",
          }}
        >
          <img src="/logo.svg" alt="trend wear" />
        </div>
      </div>
    </div>
  );
}

const extraWidth = 50;

const logos = [
  {
    src: "/logo (1).svg",
    alt: "natural",
    width: 100 + extraWidth,
  },
  {
    src: "/logo (2).svg",
    alt: "respect",
    width: 100 + extraWidth,
  },
  {
    src: "/logo (3).svg",
    alt: "energy",
    width: 100 + extraWidth,
  },
  {
    src: "/logo (4).svg",
    alt: "trust",
    width: 85 + extraWidth,
  },
  {
    src: "/logo (5).svg",
    alt: "deserve",
    width: 120 + extraWidth,
  },
];
