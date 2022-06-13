import { React } from "react";
import { Link } from "react-router-dom";
import './styles.css'
import translate from "i18n/translate";

function LearnMoreButton() {
  return (
    <Link to={"/aboutus"}>
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">{translate("learnMore")}</span>
      </button>
    </Link>
  );
}

export default LearnMoreButton;
