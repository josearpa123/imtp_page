import { useEffect, useMemo, useRef, useState } from "react";
import "../styles/ContactKeypad.css";

export default function ContactKeypad() {
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);

  const audioRef = useRef(null);

  const [muted, setMuted] = useState(true); // por defecto muted (evita sustos)
  const [email, setEmail] = useState("");

  const keys = useMemo(
    () => [
      { id: "one", key: "o", label: "ok", ref: oneRef },
      { id: "two", key: "g", label: "go", ref: twoRef },
      { id: "three", key: "Enter", label: "create.", ref: threeRef },
    ],
    []
  );

  useEffect(() => {
    // audio
    audioRef.current = new Audio(
      "https://cdn.freesound.org/previews/378/378085_6260145-lq.mp3"
    );
    audioRef.current.muted = muted;

    const playClick = () => {
      if (!audioRef.current || muted) return;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    };

    const onKeyDown = (event) => {
      keys.forEach((k) => {
        if (event.key === k.key) {
          const el = k.ref.current;
          if (el) el.dataset.pressed = "true";
          playClick();
        }
      });
    };

    const onKeyUp = (event) => {
      keys.forEach((k) => {
        if (event.key === k.key) {
          const el = k.ref.current;
          if (el) el.dataset.pressed = "false";
        }
      });
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    // pointer sound
    const addPointerSound = (btn) => {
      if (!btn) return;
      const handler = () => playClick();
      btn.addEventListener("pointerdown", handler);
      return () => btn.removeEventListener("pointerdown", handler);
    };

    const cleanups = [
      addPointerSound(oneRef.current),
      addPointerSound(twoRef.current),
      addPointerSound(threeRef.current),
    ].filter(Boolean);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      cleanups.forEach((fn) => fn());
    };
  }, [keys, muted]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
  }, [muted]);

  const onSubmit = (e) => {
    e.preventDefault();
    // Demo: no hace nada (si luego lo conectas a backend / email service)
  };

  return (
    <section className="cc-section">
      <div className="cc-card">
        <div className="cc-left">
          <h2 className="cc-title">¿Hablamos?</h2>
          <p className="cc-sub">
            Cuéntame tu idea y te digo la ruta más corta para convertirla en algo real.
          </p>

          <div className="cc-actions">
            <a className="cc-mail" href="mailto:info@imtpstudios.com">
              <span className="cc-mail-ico" aria-hidden="true">✉</span>
              info@imtpstudios.com
            </a>

            <div className="cc-social">
              <a className="cc-social-btn" href="#" aria-label="Instagram">
                <span aria-hidden="true">⌁</span>
              </a>
              <a className="cc-social-btn" href="#" aria-label="LinkedIn">
                <span aria-hidden="true">in</span>
              </a>
              <a className="cc-social-btn" href="#" aria-label="WhatsApp">
                <span aria-hidden="true">⟡</span>
              </a>
            </div>
          </div>

          <form className="cc-form" onSubmit={onSubmit}>
            <input
              type="email"
              required
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Enviar</button>
          </form>

          <div className="cc-toggles">
            <label className="cc-toggle">
              <input
                type="checkbox"
                checked={!muted}
                onChange={(e) => setMuted(!e.target.checked)}
              />
              Sonido
            </label>
            <div className="cc-hint">
              Teclas: <b>O</b> (ok), <b>G</b> (go), <b>Enter</b> (create)
            </div>
          </div>
        </div>

        <div className="cc-right">
          <div className="keypad" aria-hidden="true">
            <div className="keypad__base">
              <img
                src="https://assets.codepen.io/605876/keypad-base.png?format=auto&quality=86"
                alt=""
              />
            </div>

            <button
              ref={oneRef}
              id="one"
              className="key keypad__single keypad__single--left"
              type="button"
            >
              <span className="key__mask">
                <span className="key__content">
                  <span className="key__text">ok</span>
                  <img
                    src="https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86"
                    alt=""
                  />
                </span>
              </span>
            </button>

            <button
              ref={twoRef}
              id="two"
              className="key keypad__single"
              type="button"
            >
              <span className="key__mask">
                <span className="key__content">
                  <span className="key__text">go</span>
                  <img
                    src="https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86"
                    alt=""
                  />
                </span>
              </span>
            </button>

            <button
              ref={threeRef}
              id="three"
              className="key keypad__double"
              type="button"
            >
              <span className="key__mask">
                <span className="key__content">
                  <span className="key__text">create.</span>
                  <img
                    src="https://assets.codepen.io/605876/keypad-double.png?format=auto&quality=86"
                    alt=""
                  />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
