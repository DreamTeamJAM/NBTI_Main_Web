import React from "react";
import CookieConsent from "react-cookie-consent";

export default function Cookies() {
  const [hasCookies, setHasCookies] = React.useState(false);
  React.useEffect(() => {
    const cookies = localStorage.getItem("nbtiCookies");
    if (cookies === "accepted") {
      setHasCookies(true);
    }
  }, []);

  return (
    <>
      {!hasCookies && (
        <CookieConsent
          debug={true}
          location="bottom"
          buttonText="Accept"
          cookieName="nbtiCookies"
          style={{ background: "#0B0D17" }}
          buttonStyle={{ background: "#fff", color: "#0B0D17" }}
          expires={150}
          enableDeclineButton={true}
          declineButtonText="Decline"
          declineButtonStyle={{ background: "#0B0D17", color: "#fff" }}
          containerStyle={{ background: "#0B0D17", color: "#fff" }}
          contentStyle={{ background: "#0B0D17", color: "#fff" }}
          overlay={true}
          onDecline={() => {
            console.log("Declined");
          }}
          onAccept={() => {
            console.log("Accepted");
            localStorage.setItem("nbtiCookies", "accepted");
          }}
        >
          This site uses cookies. See our <a href="#"> privacity policy </a> for
          more.{" "}
        </CookieConsent>
      )}
    </>
  );
}
