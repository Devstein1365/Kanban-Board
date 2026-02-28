import { useState, useEffect } from "react";
import {
  BsDownload,
  BsShare,
  BsXLg,
  BsPhone,
  BsPlusSquare,
} from "react-icons/bs";

const DISMISSED_KEY = "pwa-install-dismissed";
const LAST_SHOWN_KEY = "pwa-install-last-shown";
// Re-show after 7 days if dismissed
const REDISPLAY_MS = 7 * 24 * 60 * 60 * 1000;

function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

function isInStandaloneMode() {
  return (
    window.navigator.standalone === true ||
    window.matchMedia("(display-mode: standalone)").matches
  );
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [visible, setVisible] = useState(false);
  const [iosGuide, setIosGuide] = useState(false);

  useEffect(() => {
    // Don't show if already installed
    if (isInStandaloneMode()) return;

    const dismissed = localStorage.getItem(DISMISSED_KEY);
    const lastShown = localStorage.getItem(LAST_SHOWN_KEY);
    const now = Date.now();

    if (dismissed === "permanent") return;
    if (lastShown && now - Number(lastShown) < REDISPLAY_MS) return;

    // iOS — no beforeinstallprompt event, show manual guide
    if (isIOS()) {
      // Small delay so app feels loaded first
      const t = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(t);
    }

    // Android / Chrome — capture the native prompt
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      const t = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(t);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  function dismiss(permanent = false) {
    setVisible(false);
    setIosGuide(false);
    localStorage.setItem(LAST_SHOWN_KEY, String(Date.now()));
    if (permanent) localStorage.setItem(DISMISSED_KEY, "permanent");
  }

  async function handleInstall() {
    if (isIOS()) {
      setIosGuide(true);
      return;
    }
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    dismiss(outcome === "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  // iOS step-by-step guide modal
  if (iosGuide) {
    return (
      <div className="install-overlay" onClick={() => setIosGuide(false)}>
        <div
          className="install-guide-card"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="install-guide-close"
            onClick={() => setIosGuide(false)}
          >
            <BsXLg size={14} />
          </button>
          <div className="install-guide-icon">
            <img
              src="/apple-touch-icon.png"
              alt="30-Day Build"
              width={56}
              height={56}
            />
          </div>
          <h2 className="install-guide-title">Install 30-Day Build</h2>
          <p className="install-guide-sub">
            Add to your Home Screen for the full app experience
          </p>
          <ol className="install-steps">
            <li className="install-step">
              <span className="install-step-num">1</span>
              <span className="install-step-text">
                Tap the{" "}
                <span className="install-step-icon-inline">
                  <BsShare size={15} />
                </span>{" "}
                <strong>Share</strong> button at the bottom of Safari
              </span>
            </li>
            <li className="install-step">
              <span className="install-step-num">2</span>
              <span className="install-step-text">
                Scroll down and tap{" "}
                <span className="install-step-icon-inline">
                  <BsPlusSquare size={15} />
                </span>{" "}
                <strong>Add to Home Screen</strong>
              </span>
            </li>
            <li className="install-step">
              <span className="install-step-num">3</span>
              <span className="install-step-text">
                Tap <strong>Add</strong> in the top-right corner
              </span>
            </li>
          </ol>
          <button className="install-done-btn" onClick={() => dismiss(false)}>
            Got it
          </button>
          <button className="install-never-btn" onClick={() => dismiss(true)}>
            Don&apos;t show again
          </button>
        </div>
      </div>
    );
  }

  // Android / Chrome install banner
  return (
    <div className="install-banner">
      <img src="/icon-192.png" alt="" className="install-banner-icon" />
      <div className="install-banner-text">
        <span className="install-banner-title">Install 30-Day Build</span>
        <span className="install-banner-sub">
          Add to Home Screen for faster access
        </span>
      </div>
      <button className="install-banner-btn" onClick={handleInstall}>
        {isIOS() ? (
          "How?"
        ) : (
          <>
            <BsDownload size={15} /> Install
          </>
        )}
      </button>
      <button
        className="install-banner-dismiss"
        onClick={() => dismiss(false)}
        aria-label="Dismiss"
      >
        <BsXLg size={12} />
      </button>
    </div>
  );
}
